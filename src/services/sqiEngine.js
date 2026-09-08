/**
 * Session Quality Index (SQI) Engine
 * 
 * Mathematical Framework for Measuring Quality of Digital Gambling Sessions
 * Rather than merely treating sessions as binary (converted vs bounced),
 * SQI measures holistic session value, user confidence, and safe engagement.
 * 
 * Formula:
 * SQI = (w_vel * V_discovery) + (w_intent * D_intent) + (w_action * C_action) + (w_safety * S_safety)
 * Normalised on a scale of 0.0 to 100.0
 */

export class SQIEngine {
  constructor(baselineTTFBSec = 408.0) {
    this.baselineTTFBSec = baselineTTFBSec;
    this.weights = {
      velocity: 0.25,
      intent: 0.25,
      action: 0.25,
      safety: 0.25
    };

    this.sessionState = {
      startTime: Date.now(),
      firstActionTime: null,
      actionsCount: 0,
      inspectionsCount: 0,
      intentFilterClicks: 0,
      copilotViews: 0,
      slipItemsAdded: 0,
      slipConfirmed: false,
      slipHesitationSec: 0,
      slipFlexUsed: false,
      voluntaryBudgetSetEUR: 50.0,
      currentStakedEUR: 0.0,
      velocityAlerts: 0,
      timeInSessionSec: 0
    };
  }

  recordFirstAction() {
    if (!this.sessionState.firstActionTime) {
      this.sessionState.firstActionTime = Date.now();
    }
    this.sessionState.actionsCount++;
  }

  recordInspection(type = 'match_details') {
    this.sessionState.inspectionsCount++;
    if (!this.sessionState.firstActionTime) {
      this.recordFirstAction();
    }
  }

  recordFilterClick() {
    this.sessionState.intentFilterClicks++;
    if (!this.sessionState.firstActionTime) {
      this.recordFirstAction();
    }
  }

  recordCopilotInteraction() {
    this.sessionState.copilotViews++;
  }

  recordSlipItemAdd() {
    this.sessionState.slipItemsAdded++;
    if (!this.sessionState.firstActionTime) {
      this.recordFirstAction();
    }
  }

  recordSlipConfirm(stakeEUR = 0, isFlex = false) {
    this.sessionState.slipConfirmed = true;
    this.sessionState.currentStakedEUR += stakeEUR;
    if (isFlex) this.sessionState.slipFlexUsed = true;
    this.sessionState.actionsCount++;
  }

  recordVelocityAlert() {
    this.sessionState.velocityAlerts++;
  }

  /**
   * Calculates Discovery Velocity Score (0 - 100)
   * Evaluates how rapidly the user reached relevant content relative to baseline (408s)
   */
  calculateVelocityScore() {
    const elapsedSec = (Date.now() - this.sessionState.startTime) / 1000;
    const ttfbSec = this.sessionState.firstActionTime
      ? (this.sessionState.firstActionTime - this.sessionState.startTime) / 1000
      : elapsedSec;

    // If user acted in under 60 seconds -> 100 score; if at baseline 408s -> 50; if >900s -> 10
    if (ttfbSec <= 60) return 100;
    const score = 100 - ((ttfbSec - 60) / (this.baselineTTFBSec - 60)) * 50;
    return Math.max(10, Math.min(100, Math.round(score)));
  }

  /**
   * Calculates Intent Depth Score (0 - 100)
   * High score indicates informed exploration (inspections, stats, filters) vs aimless scrolling
   */
  calculateIntentScore() {
    const s = this.sessionState;
    const rawPoints =
      (s.intentFilterClicks * 15) +
      (s.inspectionsCount * 12) +
      (s.copilotViews * 15) +
      (s.slipItemsAdded * 10);

    return Math.min(100, Math.max(15, rawPoints));
  }

  /**
   * Calculates Decision Confidence Score (0 - 100)
   * Evaluates completion of intent at final step without friction
   */
  calculateActionConfidenceScore() {
    const s = this.sessionState;
    if (s.slipItemsAdded === 0) {
      // User is exploring, hasn't yet entered checkout stage
      return s.inspectionsCount > 0 ? 55 : 40;
    }

    if (s.slipConfirmed) {
      // Confirmed action with extra confidence points if system/flex was used to manage risk
      return s.slipFlexUsed ? 98 : 92;
    }

    // Slip built but not confirmed yet (hesitation stage)
    return Math.max(30, 75 - (s.slipItemsAdded * 5));
  }

  /**
   * Calculates Responsible Gambling Safety Margin (0 - 100)
   * 100 = 100% within healthy limits, normal pacing
   * Deducts points if rapid velocity or approaching limits occurs
   */
  calculateSafetyScore() {
    const s = this.sessionState;
    let score = 100;

    // Deduct for velocity alerts (e.g. erratic betting cadence)
    score -= (s.velocityAlerts * 25);

    // Check stake vs voluntary daily limit
    if (s.voluntaryBudgetSetEUR > 0) {
      const budgetUtilization = s.currentStakedEUR / s.voluntaryBudgetSetEUR;
      if (budgetUtilization > 0.8) {
        score -= 20;
      }
    }

    // Session duration warning (>45 min)
    const elapsedMinutes = (Date.now() - this.sessionState.startTime) / (1000 * 60);
    if (elapsedMinutes > 45) {
      score -= 15;
    }

    return Math.max(20, Math.min(100, score));
  }

  /**
   * Computes the composite Session Quality Index
   */
  computeCompositeSQI() {
    const v = this.calculateVelocityScore();
    const d = this.calculateIntentScore();
    const c = this.calculateActionConfidenceScore();
    const s = this.calculateSafetyScore();

    const composite = (
      this.weights.velocity * v +
      this.weights.intent * d +
      this.weights.action * c +
      this.weights.safety * s
    );

    const rounded = Math.round(composite * 10) / 10;
    const ttfb = this.sessionState.firstActionTime
      ? Math.round((this.sessionState.firstActionTime - this.sessionState.startTime) / 1000)
      : Math.round((Date.now() - this.sessionState.startTime) / 1000);

    return {
      sqiScore: rounded,
      components: {
        discoveryVelocity: v,
        intentDepth: d,
        actionConfidence: c,
        safetyMargin: s
      },
      metrics: {
        ttfbSec: ttfb,
        actionsCount: this.sessionState.actionsCount,
        inspectionsCount: this.sessionState.inspectionsCount,
        slipConfirmed: this.sessionState.slipConfirmed,
        currentStakedEUR: this.sessionState.currentStakedEUR
      },
      rating: rounded >= 80 ? 'Optimal' : (rounded >= 60 ? 'Dobar' : 'Pasivno pregledavanje')
    };
  }
}

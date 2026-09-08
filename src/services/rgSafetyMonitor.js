/**
 * Responsible Gambling & Regulatory Safety Monitor
 * 
 * Complies with:
 * - Croatian Act on Games of Chance (Zakon o igrama na sreću)
 * - Croatian Register of Excluded Players (Registar isključenih igrača)
 * - EU AI Act (Reg. 2024/1689): Absolute prohibition of manipulative dark patterns
 * - GDPR Art. 25: Data protection by design and default
 */

export class RGSafetyMonitor {
  constructor(dailyLimitEUR = 50.0) {
    this.dailyLimitEUR = dailyLimitEUR;
    this.currentSpentEUR = 0.0;
    this.sessionStartTime = Date.now();
    this.betTimestamps = [];
    this.isSelfExcluded = false;
    this.realityCheckIntervalMinutes = 45;
    this.listeners = [];
  }

  onEvent(callback) {
    this.listeners.push(callback);
  }

  notify(event) {
    this.listeners.forEach(cb => cb(event));
  }

  /**
   * Simulates verification against Croatian Ministry of Finance
   * Register of Excluded Players (Registar isključenih igrača)
   */
  checkCroatianExclusionRegister(playerId = 'test-player-id') {
    // In our prototype, simulate a registered check pattern
    if (this.isSelfExcluded) {
      return {
        allowed: false,
        status: 'EXCLUDED',
        register: 'Ministarstvo financija RH - Registar isključenih igrača',
        message: 'Korisnik je evidentiran u registru samoisključenih osoba. Pristup igrama na sreću je blokiran sukladno Zakonu o igrama na sreću.'
      };
    }

    return {
      allowed: true,
      status: 'VERIFIED_ACTIVE',
      register: 'Ministarstvo financija RH - Registar isključenih igrača',
      ageVerified: true,
      message: 'Status igrača uredan. Punoljetnost (18+) potvrđena. Nema mjera samoisključenja.'
    };
  }

  /**
   * Sets or updates voluntary daily deposit/spending limit
   */
  setDailyLimit(newLimitEUR) {
    this.dailyLimitEUR = Math.max(5.0, Number(newLimitEUR));
    this.notify({
      type: 'LIMIT_UPDATED',
      newLimit: this.dailyLimitEUR
    });
    return this.dailyLimitEUR;
  }

  /**
   * Sets self-exclusion for player protection
   */
  setSelfExclusion(enabled = true) {
    this.isSelfExcluded = enabled;
    this.notify({
      type: 'SELF_EXCLUSION_CHANGED',
      isExcluded: enabled
    });
  }

  /**
   * Validates a proposed bet before placement
   */
  validateBetPlacement(stakeEUR) {
    // 1. Check Register
    const regCheck = this.checkCroatianExclusionRegister();
    if (!regCheck.allowed) {
      return {
        valid: false,
        reason: 'REGISTER_EXCLUDED',
        message: regCheck.message
      };
    }

    // 2. Check Daily Limit
    if (this.currentSpentEUR + stakeEUR > this.dailyLimitEUR) {
      const remaining = Math.max(0, this.dailyLimitEUR - this.currentSpentEUR);
      return {
        valid: false,
        reason: 'DAILY_LIMIT_EXCEEDED',
        message: `Ulog od €${stakeEUR.toFixed(2)} premašuje vaš dnevni dobrovoljni limit. Preostali raspoloživi iznos danas: €${remaining.toFixed(2)}.`
      };
    }

    // 3. Velocity check (harmful rapid-fire play)
    const now = Date.now();
    this.betTimestamps = this.betTimestamps.filter(t => now - t < 60000); // within last 60 seconds
    if (this.betTimestamps.length >= 4) {
      this.notify({
        type: 'VELOCITY_ALERT',
        message: 'Zabilježen je brz tempo igre. Preporučujemo kratku stanku.'
      });
      return {
        valid: false,
        reason: 'VELOCITY_WARNING',
        message: 'Detektiran je prebrz tempo klađenja. Molimo uzmite trenutak za provjeru vašeg listića.'
      };
    }

    return {
      valid: true,
      remainingDailyLimit: this.dailyLimitEUR - (this.currentSpentEUR + stakeEUR)
    };
  }

  /**
   * Confirms a placed bet and updates spending
   */
  recordBetPlaced(stakeEUR) {
    this.currentSpentEUR += stakeEUR;
    this.betTimestamps.push(Date.now());
    this.notify({
      type: 'BET_RECORDED',
      stake: stakeEUR,
      totalSpentToday: this.currentSpentEUR,
      remainingLimit: this.dailyLimitEUR - this.currentSpentEUR
    });
  }

  getBudgetStatus() {
    const percentUsed = Math.min(100, Math.round((this.currentSpentEUR / this.dailyLimitEUR) * 100));
    return {
      dailyLimitEUR: this.dailyLimitEUR,
      currentSpentEUR: this.currentSpentEUR,
      remainingEUR: Math.max(0, this.dailyLimitEUR - this.currentSpentEUR),
      percentUsed,
      sessionMinutes: Math.floor((Date.now() - this.sessionStartTime) / 60000)
    };
  }
}

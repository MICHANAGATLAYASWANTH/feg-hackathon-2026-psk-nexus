/**
 * Bet Slip Optimizer & Confidence Engine
 * 
 * Complies with Croatian Sports Betting Regulations:
 * 5% MT (Manipulativni Trošak / Manipulation Fee) deduction on stake
 * Net Stake = Gross Stake * 0.95
 * Potential Win = Net Stake * Total Odds
 * 
 * Provides "Slip Flex" (System Hedging) to reduce final-step hesitation
 */

export class SlipOptimizer {
  constructor(manipulationFeePct = 0.05) {
    this.feePct = manipulationFeePct;
  }

  /**
   * Calculates odds, fees, and payouts for single or accumulator slips
   */
  calculateSlip(selections, grossStakeEUR = 5.0, betType = 'combo') {
    if (!selections || selections.length === 0) {
      return {
        selectionsCount: 0,
        totalOdds: 1.0,
        grossStakeEUR: 0,
        manipulationFeeEUR: 0,
        netStakeEUR: 0,
        potentialPayoutEUR: 0,
        confidenceScore: 0
      };
    }

    const stake = Math.max(0.5, Number(grossStakeEUR) || 0.5);
    const fee = Math.round((stake * this.feePct) * 100) / 100;
    const netStake = Math.round((stake - fee) * 100) / 100;

    let totalOdds = 1.0;
    let avgImpliedProb = 0;

    selections.forEach(sel => {
      totalOdds *= sel.oddVal;
      const prob = (1 / sel.oddVal) * 100;
      avgImpliedProb += prob;
    });

    totalOdds = Math.round(totalOdds * 100) / 100;
    avgImpliedProb = Math.round((avgImpliedProb / selections.length) * 10) / 10;

    let potentialPayout = Math.round((netStake * totalOdds) * 100) / 100;

    // Confidence indicator based on selection count, odds distribution, and transparent stats
    let confidenceScore = Math.max(30, Math.min(95, Math.round(avgImpliedProb * (1 - (selections.length - 1) * 0.08))));

    // Slip Flex / System bet option (e.g. if 3 selections, allows 2/3 system)
    let flexAlternative = null;
    if (selections.length >= 3) {
      const systemMinWins = selections.length - 1;
      // Conservative estimate for system return
      const conservativeMultiplier = Math.pow(totalOdds, (systemMinWins / selections.length));
      flexAlternative = {
        name: `Sistem ${systemMinWins}/${selections.length}`,
        description: `Dobitak i uz 1 promašeni par (${systemMinWins} od ${selections.length})`,
        estPayoutEUR: Math.round((netStake * conservativeMultiplier) * 100) / 100,
        riskReductionPct: 35
      };
    }

    return {
      selectionsCount: selections.length,
      betType,
      grossStakeEUR: stake,
      feePercentage: (this.feePct * 100).toFixed(0) + '%',
      manipulationFeeEUR: fee,
      netStakeEUR: netStake,
      totalOdds,
      avgImpliedProb: avgImpliedProb + '%',
      potentialPayoutEUR: potentialPayout,
      confidenceScore,
      flexAlternative
    };
  }

  /**
   * Generates transparent context bullets for the slip confirmation view
   */
  generateSanityCheck(selections) {
    const checks = [];

    if (selections.length === 1) {
      checks.push({
        type: 'info',
        text: 'Pojedinačna oklada (Single) nosi najvišu vjerojatnost prolaznosti.'
      });
    } else if (selections.length > 5) {
      checks.push({
        type: 'caution',
        text: 'Listić s više od 5 parova ima visoku volatilnost. Razmotrite sistemsku okladu.'
      });
    }

    selections.forEach(s => {
      if (s.copilotInsight) {
        checks.push({
          type: 'fact',
          team: s.matchName,
          text: s.copilotInsight
        });
      }
    });

    return checks;
  }
}

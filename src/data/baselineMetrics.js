/**
 * Baseline metrics extracted from FEG Hackathon 2026 historical datasets
 * Focus: Market HR (Croatia) - Brand: PSK (Hattrick-PSK / HTK-CRO)
 * Reference: hackathon_sportsbook_trends.xlsx & hackathon_casino_trends.xlsx
 */

export const FEG_BASELINE_DATA = {
  market: 'HR',
  brand: 'PSK',
  sportsbookTrends: [
    {
      month: '2026-03',
      sessions: 555211,
      activePlayers: 20877,
      stakePerSessionEUR: 21.47,
      avgBetslipsPerSession: 1.72,
      avgSportsPerSession: 1.44,
      avgSessionsPerPlayer: 26.59,
      sessionConversionRate: 0.2724, // 27.2%
      medianSessionLengthSec: 247.8,
      medianTTFBSec: 408.0, // 6.8 minutes to first bet
      avgTTFBSec: 978.9 // 16.3 minutes
    },
    {
      month: '2026-04',
      sessions: 506178,
      activePlayers: 19112,
      stakePerSessionEUR: 21.77,
      avgBetslipsPerSession: 1.71,
      avgSportsPerSession: 1.48,
      avgSessionsPerPlayer: 26.48,
      sessionConversionRate: 0.2176, // 21.8%
      medianSessionLengthSec: 251.2,
      medianTTFBSec: 393.0,
      avgTTFBSec: 949.5
    },
    {
      month: '2026-05',
      sessions: 473177,
      activePlayers: 20222,
      stakePerSessionEUR: 22.97,
      avgBetslipsPerSession: 1.70,
      avgSportsPerSession: 1.55,
      avgSessionsPerPlayer: 23.40,
      sessionConversionRate: 0.1997, // 20.0%
      medianSessionLengthSec: 211.2,
      medianTTFBSec: 377.0,
      avgTTFBSec: 917.1
    },
    {
      month: '2026-06',
      sessions: 441799,
      activePlayers: 23348,
      stakePerSessionEUR: 25.28,
      avgBetslipsPerSession: 1.64,
      avgSportsPerSession: 1.48,
      avgSessionsPerPlayer: 18.92,
      sessionConversionRate: 0.2030, // 20.3%
      medianSessionLengthSec: 206.4,
      medianTTFBSec: 336.0,
      avgTTFBSec: 836.8
    },
    {
      month: '2026-07',
      sessions: 404726,
      activePlayers: 21079,
      stakePerSessionEUR: 26.07,
      avgBetslipsPerSession: 1.68,
      avgSportsPerSession: 1.43,
      avgSessionsPerPlayer: 19.20,
      sessionConversionRate: 0.2154, // 21.5%
      medianSessionLengthSec: 240.0,
      medianTTFBSec: 330.0,
      avgTTFBSec: 833.0
    },
    {
      month: '2026-08',
      sessions: 447046,
      activePlayers: 18397,
      stakePerSessionEUR: 25.32,
      avgBetslipsPerSession: 1.71,
      avgSportsPerSession: 1.34,
      avgSessionsPerPlayer: 24.30,
      sessionConversionRate: 0.2413, // 24.1%
      medianSessionLengthSec: 316.6,
      medianTTFBSec: 377.0,
      avgTTFBSec: 900.3
    }
  ],
  casinoTrends: [
    {
      month: '2026-06',
      stakePerSessionEUR: 291.27,
      avgSpinsPerSession: 331.7,
      avgGamesPerSession: 2.28,
      avgSessionsPerPlayer: 16.07,
      medianSessionLengthSec: 605.0
    },
    {
      month: '2026-07',
      stakePerSessionEUR: 327.75,
      avgSpinsPerSession: 372.5,
      avgGamesPerSession: 2.49,
      avgSessionsPerPlayer: 15.09,
      medianSessionLengthSec: 717.0
    },
    {
      month: '2026-08',
      stakePerSessionEUR: 343.40,
      avgSpinsPerSession: 378.6,
      avgGamesPerSession: 2.49,
      avgSessionsPerPlayer: 15.08,
      medianSessionLengthSec: 722.0
    }
  ],
  benchmarks: {
    avgMonthlySessions: 471356,
    avgActivePlayers: 20506,
    baselineConversionRate: 0.2249, // ~22.5%
    baselineMedianTTFBSec: 370.2, // ~6.2 minutes
    finalStepDropoffRate: 0.384, // 38.4% of users who add to slip abandon before confirm
    pskNexusTargetConversionRate: 0.2850, // +6.0% absolute uplift
    pskNexusTargetTTFBSec: 85.0, // 77% faster discovery velocity
    pskNexusTargetFinalStepDropoff: 0.182 // 52% relative reduction in slip abandonment
  }
};

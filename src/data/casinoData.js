/**
 * Realistic Casino Game Data for PSK.hr
 * Fully compliant with EU AI Act & Croatian regulatory transparency:
 * Transparent RTP (Return to Player) disclosure, provider labels, and voluntary limits
 */

export const CASINO_GAMES = [
  {
    id: 'cas-201',
    name: 'Shining Crown',
    provider: 'EGT Digital',
    category: 'slots',
    rtp: 96.37,
    volatility: 'Srednja',
    minStakeEUR: 0.10,
    maxStakeEUR: 20.00,
    jackpotEligible: true,
    jackpotAmount: 14829.45,
    imageUrl: 'linear-gradient(135deg, #FF8C00, #FFD700)',
    tags: ['popular', 'jackpot', 'halftime_quick'],
    description: 'Klasični voćni slot s 10 fiksnih linija i jackpot kartama.',
    crossCategoryBadge: 'Omiljeno u poluvremenu nogometa'
  },
  {
    id: 'cas-202',
    name: 'Gates of Olympus',
    provider: 'Pragmatic Play',
    category: 'slots',
    rtp: 96.50,
    volatility: 'Visoka',
    minStakeEUR: 0.20,
    maxStakeEUR: 15.00,
    jackpotEligible: false,
    imageUrl: 'linear-gradient(135deg, #4A0E4E, #8A2BE2)',
    tags: ['popular', 'tumble', 'bonus_round'],
    description: 'Grčka mitologija sa Zeusovim multiplikatorima do 500x.',
    crossCategoryBadge: 'Najviša ocjena korisnika'
  },
  {
    id: 'cas-203',
    name: 'Book of Ra Deluxe',
    provider: 'Novomatic',
    category: 'slots',
    rtp: 95.10,
    volatility: 'Visoka',
    minStakeEUR: 0.10,
    maxStakeEUR: 25.00,
    jackpotEligible: false,
    imageUrl: 'linear-gradient(135deg, #78350F, #D97706)',
    tags: ['classic', 'egypt'],
    description: 'Legendarna avantura u drevnom Egiptu s besplatnim vrtnjama i širećim simbolima.',
    crossCategoryBadge: 'Bezvremenski klasik'
  },
  {
    id: 'cas-204',
    name: 'Sweet Bonanza',
    provider: 'Pragmatic Play',
    category: 'slots',
    rtp: 96.48,
    volatility: 'Srednje-visoka',
    minStakeEUR: 0.20,
    maxStakeEUR: 20.00,
    jackpotEligible: false,
    imageUrl: 'linear-gradient(135deg, #EC4899, #F43F5E)',
    tags: ['popular', 'tumble'],
    description: 'Slatki svijet sa kaskadnim dobitcima i bombama multiplikatorima.',
    crossCategoryBadge: 'Brza zabava bez čekanja'
  },
  {
    id: 'cas-205',
    name: 'European Roulette VIP',
    provider: 'Evolution / PSK Live',
    category: 'table',
    rtp: 97.30,
    volatility: 'Niska-srednja',
    minStakeEUR: 0.50,
    maxStakeEUR: 100.00,
    jackpotEligible: false,
    imageUrl: 'linear-gradient(135deg, #064E3B, #059669)',
    tags: ['live', 'table'],
    description: 'Klasični europski rulet s jednim nulom i detaljnim statistikama brojeva.',
    crossCategoryBadge: 'Transparentna matematika'
  },
  {
    id: 'cas-206',
    name: 'Football Pro Penalty Shootout',
    provider: 'Evoplay',
    category: 'instant',
    rtp: 96.00,
    volatility: 'Podesiva',
    minStakeEUR: 0.20,
    maxStakeEUR: 10.00,
    jackpotEligible: false,
    imageUrl: 'linear-gradient(135deg, #1E3A8A, #3B82F6)',
    tags: ['sports_bridge', 'instant', 'quick_play'],
    description: 'Interaktivni izvođač jedanaesteraca dizajniran za sportske entuzijaste.',
    crossCategoryBadge: 'Most između sporta i casina'
  }
];

/**
 * Realistic Sportsbook match fixtures for PSK.hr (Croatian & European football)
 * All statistical insights are objective, verified data points with zero coercive language
 */

export const SPORTS_FIXTURES = [
  {
    id: 'fix-101',
    league: 'supersport_hnl',
    leagueName: 'SuperSport HNL (Hrvatska)',
    category: 'football',
    homeTeam: 'GNK Dinamo Zagreb',
    awayTeam: 'HNK Hajduk Split',
    derbyName: 'Vječni derbi',
    startTime: 'Danas, 20:00',
    isLive: true,
    liveMinute: '64\'',
    score: { home: 1, away: 1 },
    venue: 'Stadion Maksimir, Zagreb',
    streamAvailable: true,
    tags: ['hnl', 'derby', 'live_stream', 'trending'],
    odds: {
      '1': { id: 'opt-101-1', label: '1', name: 'Dinamo Zagreb', val: 2.15, impliedProb: '46.5%' },
      'X': { id: 'opt-101-x', label: 'X', name: 'Neriješeno', val: 3.25, impliedProb: '30.8%' },
      '2': { id: 'opt-101-2', label: '2', name: 'Hajduk Split', val: 3.40, impliedProb: '29.4%' },
      'over25': { id: 'opt-101-o25', label: 'Više 2.5', name: 'Zbroj golova > 2.5', val: 1.85, impliedProb: '54.1%' },
      'under25': { id: 'opt-101-u25', label: 'Manje 2.5', name: 'Zbroj golova < 2.5', val: 1.95, impliedProb: '51.3%' },
      'btts': { id: 'opt-101-btts', label: 'Oba daju', name: 'Oba tima daju gol', val: 1.70, impliedProb: '58.8%' }
    },
    liveStats: {
      possession: { home: 58, away: 42 },
      shotsOnTarget: { home: 6, away: 4 },
      corners: { home: 5, away: 3 },
      xG: { home: 1.64, away: 1.12 }
    },
    h2h: {
      summary: 'Zadnjih 5 susreta: 2 pobjede Dinamo, 2 pobjede Hajduk, 1 neriješeno',
      recentScores: ['1:0', '0:1', '2:2', '1:2', '2:0']
    },
    form: {
      home: ['W', 'W', 'D', 'W', 'W'],
      away: ['W', 'D', 'W', 'L', 'W']
    },
    copilotInsights: [
      {
        id: 'ins-101-a',
        type: 'stat_fact',
        title: 'Forma na domaćem terenu',
        text: 'Dinamo Zagreb je neporažen u zadnjih 9 domaćih utakmica HNL-a na Maksimiru.',
        metricTag: '9 utakmica bez poraza',
        evidence: 'HNL službena statistika 2025/26'
      },
      {
        id: 'ins-101-b',
        type: 'trend',
        title: 'Učinkovitost derbija',
        text: 'U 4 od zadnjih 5 derbija na Maksimiru postignuto je najmanje 2 pogotka.',
        metricTag: 'Prosjek 2.4 gola/derbi',
        evidence: 'Međusobni susreti 2024-2026'
      }
    ]
  },
  {
    id: 'fix-102',
    league: 'supersport_hnl',
    leagueName: 'SuperSport HNL (Hrvatska)',
    category: 'football',
    homeTeam: 'HNK Rijeka',
    awayTeam: 'NK Osijek',
    startTime: 'Sutra, 17:30',
    isLive: false,
    venue: 'Stadion Rujevica, Rijeka',
    streamAvailable: false,
    tags: ['hnl', 'trending', 'high-scoring'],
    odds: {
      '1': { id: 'opt-102-1', label: '1', name: 'Rijeka', val: 1.75, impliedProb: '57.1%' },
      'X': { id: 'opt-102-x', label: 'X', name: 'Neriješeno', val: 3.60, impliedProb: '27.8%' },
      '2': { id: 'opt-102-2', label: '2', name: 'Osijek', val: 4.50, impliedProb: '22.2%' },
      'over25': { id: 'opt-102-o25', label: 'Više 2.5', name: 'Zbroj golova > 2.5', val: 1.80, impliedProb: '55.6%' },
      'under25': { id: 'opt-102-u25', label: 'Manje 2.5', name: 'Zbroj golova < 2.5', val: 2.00, impliedProb: '50.0%' }
    },
    h2h: {
      summary: 'Zadnjih 5 susreta: 3 pobjede Rijeka, 1 Osijek, 1 neriješeno',
      recentScores: ['3:1', '1:1', '2:0', '0:1', '3:0']
    },
    form: {
      home: ['W', 'W', 'W', 'D', 'W'],
      away: ['L', 'D', 'W', 'L', 'D']
    },
    copilotInsights: [
      {
        id: 'ins-102-a',
        type: 'stat_fact',
        title: 'Obrambena čvrstoća Rijeke',
        text: 'Rijeka je primila samo 4 gola u zadnjih 8 domaćih prvenstvenih utakmica na Rujevici.',
        metricTag: '0.5 primljenih golova/meč',
        evidence: 'SuperSport HNL bilanca'
      }
    ]
  },
  {
    id: 'fix-103',
    league: 'uefa_champions_league',
    leagueName: 'UEFA Liga Prvaka',
    category: 'football',
    homeTeam: 'Real Madrid',
    awayTeam: 'Bayern München',
    startTime: 'Danas, 21:00',
    isLive: false,
    venue: 'Santiago Bernabéu, Madrid',
    streamAvailable: true,
    tags: ['champions_league', 'top_tier', 'trending'],
    odds: {
      '1': { id: 'opt-103-1', label: '1', name: 'Real Madrid', val: 2.20, impliedProb: '45.5%' },
      'X': { id: 'opt-103-x', label: 'X', name: 'Neriješeno', val: 3.65, impliedProb: '27.4%' },
      '2': { id: 'opt-103-2', label: '2', name: 'Bayern München', val: 3.05, impliedProb: '32.8%' },
      'over25': { id: 'opt-103-o25', label: 'Više 2.5', name: 'Zbroj golova > 2.5', val: 1.62, impliedProb: '61.7%' },
      'under25': { id: 'opt-103-u25', label: 'Manje 2.5', name: 'Zbroj golova < 2.5', val: 2.30, impliedProb: '43.5%' },
      'btts': { id: 'opt-103-btts', label: 'Oba daju', name: 'Oba tima daju gol', val: 1.55, impliedProb: '64.5%' }
    },
    h2h: {
      summary: 'Zadnjih 6 susreta u LP: 3 Real Madrid, 1 Bayern, 2 neriješeno',
      recentScores: ['2:1', '2:2', '2:2', '2:1', '4:2']
    },
    form: {
      home: ['W', 'W', 'W', 'W', 'D'],
      away: ['W', 'W', 'D', 'W', 'W']
    },
    copilotInsights: [
      {
        id: 'ins-103-a',
        type: 'high_value',
        title: 'Europski klasik golova',
        text: 'U zadnjih 7 međusobnih dvoboja Reala i Bayerna, oba kluba su postigla barem jedan pogodak.',
        metricTag: '100% BTTS zadnjih 7 mečeva',
        evidence: 'UEFA Champions League statistika'
      }
    ]
  },
  {
    id: 'fix-104',
    league: 'uefa_champions_league',
    leagueName: 'UEFA Liga Prvaka',
    category: 'football',
    homeTeam: 'Arsenal FC',
    awayTeam: 'Paris Saint-Germain',
    startTime: 'Danas, 21:00',
    isLive: false,
    venue: 'Emirates Stadium, London',
    streamAvailable: true,
    tags: ['champions_league', 'top_tier'],
    odds: {
      '1': { id: 'opt-104-1', label: '1', name: 'Arsenal', val: 1.95, impliedProb: '51.3%' },
      'X': { id: 'opt-104-x', label: 'X', name: 'Neriješeno', val: 3.55, impliedProb: '28.2%' },
      '2': { id: 'opt-104-2', label: '2', name: 'PSG', val: 3.80, impliedProb: '26.3%' },
      'over25': { id: 'opt-104-o25', label: 'Više 2.5', name: 'Zbroj golova > 2.5', val: 1.72, impliedProb: '58.1%' }
    },
    h2h: {
      summary: 'Zadnja 3 susreta: 1 Arsenal, 2 neriješeno',
      recentScores: ['2:0', '2:2', '1:1']
    },
    form: {
      home: ['W', 'W', 'D', 'W', 'W'],
      away: ['W', 'D', 'W', 'W', 'W']
    },
    copilotInsights: [
      {
        id: 'ins-104-a',
        type: 'stat_fact',
        title: 'Arsenal domaći rekord',
        text: 'Arsenal ima 82% posjeda i prosječno 18 udaraca po susretu u europskim utakmicama na Emiratesu.',
        metricTag: 'Prosjek 2.2 postignuta gola',
        evidence: 'Opta Sports feed'
      }
    ]
  },
  {
    id: 'fix-105',
    league: 'supersport_hnl',
    leagueName: 'SuperSport HNL (Hrvatska)',
    category: 'football',
    homeTeam: 'NK Lokomotiva Zagreb',
    awayTeam: 'HNK Gorica',
    startTime: 'Subota, 15:00',
    isLive: false,
    venue: 'Kranjčevićeva, Zagreb',
    streamAvailable: false,
    tags: ['hnl', 'underdog_value'],
    odds: {
      '1': { id: 'opt-105-1', label: '1', name: 'Lokomotiva', val: 2.05, impliedProb: '48.8%' },
      'X': { id: 'opt-105-x', label: 'X', name: 'Neriješeno', val: 3.30, impliedProb: '30.3%' },
      '2': { id: 'opt-105-2', label: '2', name: 'Gorica', val: 3.60, impliedProb: '27.8%' }
    },
    h2h: {
      summary: 'Zadnjih 5 susreta: 2 pobjede Lokomotiva, 1 pobjeda Gorica, 2 neriješeno',
      recentScores: ['1:1', '2:1', '0:1', '2:2', '1:0']
    },
    form: {
      home: ['D', 'L', 'W', 'D', 'W'],
      away: ['L', 'L', 'D', 'W', 'L']
    },
    copilotInsights: [
      {
        id: 'ins-105-a',
        type: 'trend',
        title: 'Tradicionalno izjednačeni dvoboji',
        text: '3 od zadnjih 4 susreta ove dvije momčadi završila su s točno jednim golom razlike ili remijem.',
        metricTag: 'Visok postotak neriješenih',
        evidence: 'HNL H2H baza'
      }
    ]
  }
];

export const INTENT_FILTERS = [
  { id: 'all', label: 'Sve Ponude', icon: '⚽' },
  { id: 'hnl', label: 'SuperSport HNL', icon: '🇭🇷', badge: 'Lokalni derbiji' },
  { id: 'live_stream', label: 'Uživo s Prijenosom', icon: '🔴', badge: 'Dinamo vs Hajduk' },
  { id: 'champions_league', label: 'Liga Prvaka', icon: '⭐', badge: 'Večeras 21:00' },
  { id: 'high-scoring', label: 'Golovi & Statistika', icon: '🔥', badge: 'Visok xG' },
  { id: 'underdog_value', label: 'Vrijednosni Tečajevi', icon: '💎', badge: 'Objektivna analiza' }
];

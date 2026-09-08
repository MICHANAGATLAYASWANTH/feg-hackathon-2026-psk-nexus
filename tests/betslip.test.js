/**
 * Unit tests for Bet Slip calculations and Croatian Manipulation Fee (MT)
 */

import { SlipOptimizer } from '../src/services/slipOptimizer.js';

export function runBetSlipTests(assert) {
  console.log('--- Running Bet Slip & Financial Calculation Tests ---');

  const optimizer = new SlipOptimizer(0.05); // 5% MT fee (Zakon o igrama na sreću)

  // Test 1: Empty slip calculation
  const emptyCalc = optimizer.calculateSlip([]);
  assert(emptyCalc.selectionsCount === 0, 'Empty selections count is 0');
  assert(emptyCalc.grossStakeEUR === 0, 'Empty gross stake is 0');

  // Test 2: Single bet calculation with 5% fee deduction
  const singleSelections = [
    { optId: '101-1', oddVal: 2.00, matchName: 'Dinamo vs Hajduk' }
  ];
  const singleCalc = optimizer.calculateSlip(singleSelections, 10.0, 'single');
  assert(singleCalc.grossStakeEUR === 10.0, 'Gross stake is €10.00');
  assert(singleCalc.manipulationFeeEUR === 0.50, '5% Croatian manipulation fee is €0.50');
  assert(singleCalc.netStakeEUR === 9.50, 'Net stake is €9.50');
  assert(singleCalc.totalOdds === 2.00, 'Total odds are 2.00');
  assert(singleCalc.potentialPayoutEUR === 19.00, 'Potential payout is Net Stake * Odds (€9.50 * 2.00 = €19.00)');

  // Test 3: Multiple selections accumulator (combo)
  const comboSelections = [
    { optId: '101-1', oddVal: 2.00, matchName: 'Dinamo vs Hajduk' },
    { optId: '102-1', oddVal: 1.50, matchName: 'Rijeka vs Osijek' },
    { optId: '103-1', oddVal: 2.00, matchName: 'Real Madrid vs Bayern' }
  ];
  const comboCalc = optimizer.calculateSlip(comboSelections, 20.0, 'combo');
  assert(comboCalc.selectionsCount === 3, 'Selections count is 3');
  assert(comboCalc.totalOdds === 6.00, 'Combined odds are 2.0 * 1.5 * 2.0 = 6.00');
  assert(comboCalc.netStakeEUR === 19.00, 'Net stake on €20 is €19.00 (less €1.00 fee)');
  assert(comboCalc.potentialPayoutEUR === 114.00, 'Payout is €19.00 * 6.00 = €114.00');

  // Test 4: Slip Flex Alternative availability for >= 3 selections
  assert(comboCalc.flexAlternative !== null, 'Slip Flex alternative is available for 3 selections');
  assert(comboCalc.flexAlternative.name === 'Sistem 2/3', 'Flex alternative proposes System 2/3');
  assert(comboCalc.flexAlternative.riskReductionPct === 35, 'Risk reduction factor is 35%');
}

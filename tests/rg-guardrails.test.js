/**
 * Unit tests for Responsible Gambling & Croatian Regulatory Guardrails
 */

import { RGSafetyMonitor } from '../src/services/rgSafetyMonitor.js';

export function runRGTests(assert) {
  console.log('--- Running Responsible Gambling Guardrail Tests ---');

  // Test 1: Active verified status allows normal play
  const monitor1 = new RGSafetyMonitor(50.0);
  const check1 = monitor1.checkCroatianExclusionRegister();
  assert(check1.allowed === true, 'Default simulated player is verified and allowed');
  assert(check1.ageVerified === true, '18+ age verification confirmed');

  // Test 2: Self-exclusion strictly blocks bet validation
  const monitor2 = new RGSafetyMonitor(50.0);
  monitor2.setSelfExclusion(true);
  const check2 = monitor2.checkCroatianExclusionRegister();
  assert(check2.allowed === false, 'Self-excluded player is blocked by register check');

  const betValidation = monitor2.validateBetPlacement(5.0);
  assert(betValidation.valid === false, 'Bet placement rejected for self-excluded player');
  assert(betValidation.reason === 'REGISTER_EXCLUDED', 'Reason code matches REGISTER_EXCLUDED');

  // Test 3: Voluntary Daily Spending Limit enforcement
  const monitor3 = new RGSafetyMonitor(20.0); // €20 limit
  const validBet = monitor3.validateBetPlacement(15.0);
  assert(validBet.valid === true, '€15 bet is valid within €20 limit');
  monitor3.recordBetPlaced(15.0);

  const exceedingBet = monitor3.validateBetPlacement(10.0);
  assert(exceedingBet.valid === false, '€10 bet is rejected as it exceeds remaining €5 limit');
  assert(exceedingBet.reason === 'DAILY_LIMIT_EXCEEDED', 'Reason matches DAILY_LIMIT_EXCEEDED');

  // Test 4: Velocity spike monitoring (harmful rapid play)
  const monitor4 = new RGSafetyMonitor(100.0);
  monitor4.recordBetPlaced(2.0);
  monitor4.recordBetPlaced(2.0);
  monitor4.recordBetPlaced(2.0);
  monitor4.recordBetPlaced(2.0); // 4 bets in quick succession
  const velocityCheck = monitor4.validateBetPlacement(2.0);
  assert(velocityCheck.valid === false, 'Rapid 5th bet blocked by velocity circuit breaker');
  assert(velocityCheck.reason === 'VELOCITY_WARNING', 'Reason matches VELOCITY_WARNING');
}

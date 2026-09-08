/**
 * Unit tests for Session Quality Index (SQI) Engine
 */

import { SQIEngine } from '../src/services/sqiEngine.js';

export function runSQITests(assert) {
  console.log('--- Running SQI Engine Tests ---');

  // Test 1: Initial SQI score is bounded
  const engine1 = new SQIEngine(408.0);
  const initial = engine1.computeCompositeSQI();
  assert(initial.sqiScore >= 0 && initial.sqiScore <= 100, 'Initial SQI score is within [0, 100]');
  assert(initial.components.safetyMargin === 100, 'Initial safety margin is 100%');

  // Test 2: Fast action generates high velocity score
  const engine2 = new SQIEngine(408.0);
  engine2.recordFirstAction();
  const fastResult = engine2.computeCompositeSQI();
  assert(fastResult.components.discoveryVelocity === 100, 'Under 60s TTFA scores 100 in velocity');

  // Test 3: Exploration increases Intent Depth
  const engine3 = new SQIEngine(408.0);
  engine3.recordFilterClick();
  engine3.recordInspection();
  engine3.recordCopilotInteraction();
  engine3.recordSlipItemAdd();
  const intentResult = engine3.computeCompositeSQI();
  assert(intentResult.components.intentDepth > 40, 'Active exploration increases Intent Depth score');

  // Test 4: Final slip confirmation boosts Action Confidence
  engine3.recordSlipConfirm(5.0, true);
  const confirmedResult = engine3.computeCompositeSQI();
  assert(confirmedResult.components.actionConfidence >= 95, 'Slip flex confirmation yields high confidence (>=95)');
  assert(confirmedResult.metrics.slipConfirmed === true, 'Metrics confirm slip placement');

  // Test 5: Velocity alerts penalize Safety Margin
  const engine4 = new SQIEngine(408.0);
  engine4.recordVelocityAlert();
  const penalized = engine4.computeCompositeSQI();
  assert(penalized.components.safetyMargin === 75, 'Single velocity alert reduces safety margin from 100 to 75');
}

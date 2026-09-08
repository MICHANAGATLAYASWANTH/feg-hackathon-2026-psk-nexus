/**
 * Unified Automated Test Runner for PSK Nexus (FEG Hackathon 2026)
 * Executes all unit and regulatory verification test suites
 */

import { runSQITests } from './sqi.test.js';
import { runRGTests } from './rg-guardrails.test.js';
import { runBetSlipTests } from './betslip.test.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    failed++;
  }
}

console.log('====================================================');
console.log('  PSK NEXUS AUTOMATED VERIFICATION TEST SUITE');
console.log('  FEG Innovation Hackathon 2026 — Challenge 1');
console.log('====================================================\n');

try {
  runSQITests(assert);
  console.log('');
  runRGTests(assert);
  console.log('');
  runBetSlipTests(assert);
} catch (err) {
  console.error('\nUnexpected Error during test execution:', err);
  failed++;
}

console.log('\n====================================================');
console.log(`  TEST RESULTS: ${passed} Passed, ${failed} Failed`);
console.log('====================================================');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('  All compliance and algorithmic assertions verified!\n');
  process.exit(0);
}

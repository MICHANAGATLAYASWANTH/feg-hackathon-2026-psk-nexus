/**
 * DiscoveryHub Component ("Moj PSK")
 * 
 * Replaces cumbersome dropdown menus and 150+ league lists with
 * intent-driven, context-aware chips and streamlined recommendations.
 * Directly addresses the 77% Time-to-First-Action reduction goal.
 */

import { INTENT_FILTERS } from '../data/sportsData.js';

export class DiscoveryHub {
  constructor(container, { activeFilter = 'all', onFilterSelect, sqiEngine }) {
    this.container = container;
    this.activeFilter = activeFilter;
    this.onFilterSelect = onFilterSelect;
    this.sqiEngine = sqiEngine;
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <section class="discovery-hub-card">
        <div class="hub-header">
          <div>
            <div class="hub-title">
              <span>🎯</span> Moj PSK — Prilagođeni Izbor
            </div>
            <div class="hub-subtitle">
              Brzi pristup bez pretraživanja stotina liga • Usklađeno s vašim preferencijama
            </div>
          </div>
          <div style="font-size:0.75rem; color:var(--psk-cyan); font-weight:700;">
            ⚡ 0% pritiska • 100% transparentna statistika
          </div>
        </div>

        <div class="intent-chips-grid">
          ${INTENT_FILTERS.map(f => `
            <button class="intent-chip ${this.activeFilter === f.id ? 'active' : ''}" data-filter="${f.id}">
              <span>${f.icon}</span>
              <span>${f.label}</span>
              ${f.badge ? `<span class="chip-badge">${f.badge}</span>` : ''}
            </button>
          `).join('')}
        </div>
      </section>
    `;

    // Bind chip clicks
    this.container.querySelectorAll('[data-filter]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const filterId = e.currentTarget.getAttribute('data-filter');
        this.activeFilter = filterId;
        this.container.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');

        // Record telemetry for SQI
        if (this.sqiEngine) {
          this.sqiEngine.recordFilterClick();
        }

        if (this.onFilterSelect) {
          this.onFilterSelect(filterId);
        }
      });
    });
  }
}

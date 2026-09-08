/**
 * CasinoView Component
 * Transparent, low-friction casino content discovery
 * Compliant with EU AI Act & Croatian player protection rules:
 * - Clear RTP (Return to Player) disclosure
 * - Volatility metrics
 * - Voluntary spin limits & no predatory autoplay
 */

import { CASINO_GAMES } from '../data/casinoData.js';

export class CasinoView {
  constructor(container, { onPlayDemo, sqiEngine }) {
    this.container = container;
    this.onPlayDemo = onPlayDemo;
    this.sqiEngine = sqiEngine;
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:1.25rem;">
        <div style="background:var(--psk-navy-surface); padding:1rem 1.25rem; border-radius:12px; border:1px solid var(--psk-navy-border); display:flex; justify-content:space-between; align-items:center;">
          <div>
            <h3 style="font-size:1.1rem; color:#fff; font-weight:700;">🎰 PSK Casino & Slotovi</h3>
            <p style="font-size:0.8rem; color:var(--text-muted);">Sve igre posjeduju certifikat poštene igre • Prikazani stvarni povrat igraču (RTP)</p>
          </div>
          <span style="font-size:0.75rem; background:rgba(16,185,129,0.15); color:#6EE7B7; padding:4px 8px; border-radius:6px; font-weight:700;">
            ✓ Certificirani RNG
          </span>
        </div>

        <div class="casino-grid">
          ${CASINO_GAMES.map(game => `
            <article class="casino-card" data-game-id="${game.id}">
              <div class="casino-card-banner" style="background:${game.imageUrl};">
                ${game.name}
                <div class="casino-rtp-badge">
                  RTP ${game.rtp.toFixed(2)}%
                </div>
              </div>
              <div class="casino-card-info">
                <div class="casino-card-title">${game.name}</div>
                <div class="casino-card-meta">
                  <span>${game.provider}</span>
                  <span>Volatilnost: ${game.volatility}</span>
                </div>
                <p style="font-size:0.75rem; color:#94A3B8; margin-top:0.25rem;">${game.description}</p>
                
                <div style="margin-top:0.5rem; display:flex; gap:0.5rem;">
                  <button class="inspect-btn casino-demo-btn" data-id="${game.id}" style="flex:1; text-align:center;">
                    Isprobaj Demo
                  </button>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    `;

    this.container.querySelectorAll('.casino-demo-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const game = CASINO_GAMES.find(g => g.id === id);
        if (this.sqiEngine) this.sqiEngine.recordInspection('casino_demo');
        if (this.onPlayDemo) this.onPlayDemo(game);
      });
    });
  }
}

/**
 * InSessionCopilot Component ("PSK Asistent")
 * 
 * Provides transparent, non-intrusive in-session guidance based on real verified facts.
 * In strict compliance with EU AI Act (Reg. 2024/1689 Article 5):
 * - ZERO manipulative language or fake urgency ("uplati odmah!", "istječe vrijeme!")
 * - 100% transparent explanation badges
 * - Purely informational statistical aids
 */

export class InSessionCopilot {
  constructor(container, { selectedMatch = null, sqiEngine }) {
    this.container = container;
    this.selectedMatch = selectedMatch;
    this.sqiEngine = sqiEngine;
    this.isExpanded = true;
    this.render();
  }

  setMatch(match) {
    this.selectedMatch = match;
    this.render();
    if (this.sqiEngine) this.sqiEngine.recordCopilotInteraction();
  }

  render() {
    const match = this.selectedMatch;

    this.container.innerHTML = `
      <section class="copilot-card">
        <div class="copilot-header">
          <div class="copilot-title">
            <span>💡</span> PSK Intelekt Asistent
          </div>
          <button id="copilot-toggle-btn" style="background:transparent; border:none; color:#fff; cursor:pointer; font-size:0.85rem;">
            ${this.isExpanded ? '▲ Sakrij' : '▼ Prikaži'}
          </button>
        </div>

        ${this.isExpanded ? `
          <div class="copilot-content">
            ${match ? `
              <div style="font-size:0.85rem; font-weight:700; color:#fff; display:flex; justify-content:space-between; align-items:center;">
                <span>${match.homeTeam} vs ${match.awayTeam}</span>
                <span class="copilot-tag">${match.leagueName}</span>
              </div>

              <!-- H2H and Form Highlights -->
              <div class="insight-bubble">
                <div class="insight-bubble-title">
                  <span>Međusobni omjer (H2H)</span>
                  <span>Zadnjih 5</span>
                </div>
                <div class="insight-bubble-text">
                  ${match.h2h.summary}. Rezultati: ${match.h2h.recentScores.join(', ')}.
                </div>
                <div class="insight-bubble-footer">
                  <span>ℹ️</span> Izvor: Službena arhiva natjecanja
                </div>
              </div>

              <!-- Dynamic Insights -->
              ${match.copilotInsights.map(ins => `
                <div class="insight-bubble">
                  <div class="insight-bubble-title">
                    <span>${ins.title}</span>
                    <span style="color:var(--psk-yellow); font-size:0.75rem;">${ins.metricTag}</span>
                  </div>
                  <div class="insight-bubble-text">
                    ${ins.text}
                  </div>
                  <div class="insight-bubble-footer">
                    <span>✓</span> Verificirano: ${ins.evidence}
                  </div>
                </div>
              `).join('')}

              <div style="background:rgba(255,255,255,0.04); border-radius:6px; padding:0.5rem 0.75rem; font-size:0.72rem; color:var(--text-muted);">
                🛡️ <strong>EU AI Act transparentnost:</strong> Podaci služe isključivo za informirano donošenje odluka. Ne predstavljaju garanciju ishoda.
              </div>
            ` : `
              <div style="text-align:center; padding:1.5rem 0.5rem; color:var(--text-muted); font-size:0.82rem;">
                <div style="font-size:1.5rem; margin-bottom:0.4rem;">🧭</div>
                Odaberite utakmicu ili kliknite <em>"Provjeri statistiku"</em> na bilo kojem paru za prikaz objektivnih taktičkih i statističkih uvida.
              </div>
            `}
          </div>
        ` : ''}
      </section>
    `;

    const toggleBtn = this.container.querySelector('#copilot-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.isExpanded = !this.isExpanded;
        this.render();
      });
    }
  }
}

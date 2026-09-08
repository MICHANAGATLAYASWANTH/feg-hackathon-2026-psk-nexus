/**
 * RGGuardianModal Component ("Odgovorno Igranje & Zaštita Igrača")
 * 
 * Implements full regulatory compliance with:
 * - Croatian Act on Games of Chance (Zakon o igrama na sreću)
 * - Ministry of Finance Register of Excluded Players (Registar isključenih igrača)
 * - Voluntary deposit/loss limit configuration
 * - Reality check intervals & immediate self-exclusion protocol
 */

export class RGGuardianModal {
  constructor(container, { rgMonitor, onClose }) {
    this.container = container;
    this.rgMonitor = rgMonitor;
    this.onClose = onClose;
    this.render();
  }

  render() {
    const budget = this.rgMonitor.getBudgetStatus();
    const regCheck = this.rgMonitor.checkCroatianExclusionRegister();

    this.container.innerHTML = `
      <div class="modal-overlay" id="rg-modal-backdrop">
        <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="rg-modal-title">
          <div class="modal-header">
            <h3 id="rg-modal-title" style="font-size:1.15rem; color:#fff; display:flex; align-items:center; gap:0.5rem;">
              <span>🛡️</span> Odgovorno Igranje (Zakon o igrama na sreću RH)
            </h3>
            <button class="modal-close-btn" id="rg-modal-close" aria-label="Zatvori prozor">×</button>
          </div>

          <div class="modal-body">
            <!-- Official Croatian Register Check Status -->
            <div class="register-badge">
              <span style="font-size:1.2rem;">🏛️</span>
              <div>
                <strong style="display:block;">${regCheck.register}</strong>
                <span style="font-size:0.75rem; color:#D1FAE5;">
                  ${regCheck.message} (Dob: 18+ • Status: ${regCheck.status})
                </span>
              </div>
            </div>

            <!-- Voluntary Daily Spending Limit -->
            <div style="background:var(--psk-navy-dark); border:1px solid var(--psk-navy-border); border-radius:10px; padding:1rem; display:flex; flex-direction:column; gap:0.6rem;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <label for="daily-limit-input" style="font-weight:700; font-size:0.9rem; color:#fff;">
                  Dobrovoljni Dnevni Limit Uplate:
                </label>
                <span style="font-size:1.15rem; font-weight:800; color:var(--psk-yellow);" id="current-limit-val">
                  €${budget.dailyLimitEUR.toFixed(2)}
                </span>
              </div>

              <input type="range" id="daily-limit-slider" min="10" max="250" step="5" value="${budget.dailyLimitEUR}" 
                style="width:100%; accent-color:var(--psk-yellow); cursor:pointer;" />

              <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted);">
                <span>€10.00 (Minimalno)</span>
                <span>€250.00</span>
              </div>
            </div>

            <!-- Reality Check / Time Pacing -->
            <div style="background:var(--psk-navy-dark); border:1px solid var(--psk-navy-border); border-radius:10px; padding:1rem; font-size:0.85rem;">
              <strong style="color:#fff; display:block; margin-bottom:0.35rem;">⏱️ Vrijeme provedeno u sesiji:</strong>
              <p style="color:var(--text-muted); font-size:0.8rem;">
                Aktivni ste već <strong>${budget.sessionMinutes} minuta</strong>. Sustav automatski nudi podsjetnik nakon 45 minuta kontinuirane igre.
              </p>
            </div>

            <!-- Self-Exclusion Switch (Croatian Law Requirement) -->
            <div style="background:rgba(239, 68, 68, 0.1); border:1px solid rgba(239, 68, 68, 0.35); border-radius:10px; padding:1rem; display:flex; justify-content:space-between; align-items:center;">
              <div>
                <strong style="color:#FCA5A5; font-size:0.85rem; display:block;">Obrazac za samoisključenje</strong>
                <span style="font-size:0.75rem; color:var(--text-muted);">Privremeno ili trajno blokirajte pristup računu</span>
              </div>
              <button id="toggle-exclusion-btn" style="background:${this.rgMonitor.isSelfExcluded ? '#10B981' : '#EF4444'}; color:#fff; border:none; padding:0.4rem 0.8rem; border-radius:6px; font-weight:700; font-size:0.75rem; cursor:pointer;">
                ${this.rgMonitor.isSelfExcluded ? 'Poništi isključenje (Demo)' : 'Aktiviraj Samoisključenje'}
              </button>
            </div>

            <div style="font-size:0.75rem; color:var(--text-muted); text-align:center;">
              Nacionalna linija za pomoć kod prekomjernog igranja: <strong>0800 200 005</strong> • 
              <a href="https://igrajmoodgovorno.hr" target="_blank" style="color:var(--psk-cyan);">igrajmoodgovorno.hr</a>
            </div>
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    // Close modal
    const closeBtn = this.container.querySelector('#rg-modal-close');
    const backdrop = this.container.querySelector('#rg-modal-backdrop');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) this.close();
      });
    }

    // Limit Slider
    const slider = this.container.querySelector('#daily-limit-slider');
    const valDisplay = this.container.querySelector('#current-limit-val');
    if (slider && valDisplay) {
      slider.addEventListener('input', (e) => {
        valDisplay.textContent = `€${parseFloat(e.target.value).toFixed(2)}`;
      });
      slider.addEventListener('change', (e) => {
        this.rgMonitor.setDailyLimit(e.target.value);
      });
    }

    // Self Exclusion Toggle
    const exclBtn = this.container.querySelector('#toggle-exclusion-btn');
    if (exclBtn) {
      exclBtn.addEventListener('click', () => {
        const nextState = !this.rgMonitor.isSelfExcluded;
        this.rgMonitor.setSelfExclusion(nextState);
        this.render();
      });
    }
  }

  close() {
    this.container.innerHTML = '';
    if (this.onClose) this.onClose();
  }
}

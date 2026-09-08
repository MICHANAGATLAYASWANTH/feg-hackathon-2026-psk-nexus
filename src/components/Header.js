/**
 * Header Component for PSK Nexus
 * Displays PSK brand identity, voluntary RG budget meter, register check badge, and balance
 */

export class Header {
  constructor(container, { rgMonitor, onOpenRGModal, onBrandClick }) {
    this.container = container;
    this.rgMonitor = rgMonitor;
    this.onOpenRGModal = onOpenRGModal;
    this.onBrandClick = onBrandClick;
    this.render();

    // Listen to RG monitor updates
    this.rgMonitor.onEvent(() => this.updateBudgetPill());
  }

  render() {
    const budget = this.rgMonitor.getBudgetStatus();

    this.container.innerHTML = `
      <header class="app-header">
        <a class="header-brand" id="brand-logo-btn">
          <div class="brand-logo">
            PSK<span style="color:#00A3E0">.hr</span>
            <span class="logo-tag">NEXUS</span>
          </div>
        </a>

        <div class="header-right">
          <!-- Responsible Gaming Budget Pill -->
          <div class="rg-budget-pill" id="rg-header-pill" title="Dobrovoljni limit i sigurna igra (Zakon o igrama na sreću RH)">
            <span class="rg-indicator-dot"></span>
            <span id="rg-header-text">Sigurna igra: <strong>€${budget.currentSpentEUR.toFixed(2)} / €${budget.dailyLimitEUR.toFixed(2)}</strong></span>
            <span style="font-size:0.75rem; color:#A7F3D0; font-weight:700;">18+</span>
          </div>

          <!-- User Wallet Balance -->
          <div class="user-balance-badge" id="user-balance-btn">
            <span class="currency">€</span>
            <span id="user-balance-val">124.50</span>
          </div>
        </div>
      </header>
    `;

    // Bind events
    this.container.querySelector('#brand-logo-btn').addEventListener('click', (e) => {
      e.preventDefault();
      if (this.onBrandClick) this.onBrandClick();
    });

    this.container.querySelector('#rg-header-pill').addEventListener('click', () => {
      if (this.onOpenRGModal) this.onOpenRGModal();
    });
  }

  updateBudgetPill() {
    const budget = this.rgMonitor.getBudgetStatus();
    const textEl = this.container.querySelector('#rg-header-text');
    const dotEl = this.container.querySelector('.rg-indicator-dot');
    if (textEl && dotEl) {
      textEl.innerHTML = `Sigurna igra: <strong>€${budget.currentSpentEUR.toFixed(2)} / €${budget.dailyLimitEUR.toFixed(2)}</strong>`;
      if (budget.percentUsed >= 80) {
        dotEl.style.background = 'var(--rg-warning)';
        dotEl.style.boxShadow = '0 0 8px var(--rg-warning)';
      } else {
        dotEl.style.background = 'var(--rg-safe)';
        dotEl.style.boxShadow = '0 0 8px var(--rg-safe)';
      }
    }
  }

  updateBalance(newBalanceEUR) {
    const el = this.container.querySelector('#user-balance-val');
    if (el) el.textContent = newBalanceEUR.toFixed(2);
  }
}

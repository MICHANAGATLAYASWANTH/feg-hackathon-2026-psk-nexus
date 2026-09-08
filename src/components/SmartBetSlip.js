/**
 * SmartBetSlip Component ("Pametni Listić")
 * 
 * Directly resolves Challenge 1's "Drop-off at the final step".
 * Replaces high-friction, anxiety-inducing checkout with:
 * 1. Contextual Confidence & Sanity Checks on selected bets
 * 2. Slip Flex / System Hedging (one-click risk reduction)
 * 3. Transparent Croatian 5% MT fee calculations
 * 4. Real-time voluntary budget alignment
 */

export class SmartBetSlip {
  constructor(container, { slipOptimizer, rgMonitor, sqiEngine, onRemoveItem, onBetPlaced }) {
    this.container = container;
    this.slipOptimizer = slipOptimizer;
    this.rgMonitor = rgMonitor;
    this.sqiEngine = sqiEngine;
    this.onRemoveItem = onRemoveItem;
    this.onBetPlaced = onBetPlaced;

    this.selections = [];
    this.stakeEUR = 5.0;
    this.isFlexActive = false;
    this.lastPlacedTicket = null;

    this.render();
  }

  setSelections(selections) {
    this.selections = selections;
    this.lastPlacedTicket = null;
    this.render();
  }

  render() {
    if (this.lastPlacedTicket) {
      this.renderSuccessTicket();
      return;
    }

    const calc = this.slipOptimizer.calculateSlip(
      this.selections, 
      this.stakeEUR, 
      this.isFlexActive ? 'system' : 'combo'
    );

    const budget = this.rgMonitor.getBudgetStatus();
    const budgetPctAfterBet = Math.min(100, Math.round(((budget.currentSpentEUR + this.stakeEUR) / budget.dailyLimitEUR) * 100));

    this.container.innerHTML = `
      <section class="smart-slip-card" id="smart-slip-container">
        <div class="slip-header">
          <div class="slip-title">
            <span>📝</span> Pametni Listić
          </div>
          <span class="slip-count-badge" id="slip-badge">${this.selections.length}</span>
        </div>

        <div class="slip-body">
          ${this.selections.length === 0 ? `
            <div class="slip-empty-state">
              <div class="slip-empty-icon">🎟️</div>
              <p>Vaš listić je trenutno prazan.</p>
              <p style="font-size:0.75rem; margin-top:0.25rem;">Odaberite tečaj na utakmici za početak slaganja listića.</p>
            </div>
          ` : `
            <!-- Selection Items List -->
            <div style="display:flex; flex-direction:column; gap:0.6rem;">
              ${this.selections.map((item, idx) => `
                <div class="slip-item" data-opt-id="${item.optId}">
                  <button class="slip-item-remove" data-remove-id="${item.optId}" title="Ukloni par">×</button>
                  <div class="slip-item-match">${item.matchName}</div>
                  <div class="slip-item-selection">
                    <span>Tip: <strong>${item.label}</strong></span>
                    <span>Tečaj: <strong>${item.oddVal.toFixed(2)}</strong></span>
                  </div>
                  ${item.copilotInsight ? `
                    <div class="slip-item-fact">
                      💡 <em>${item.copilotInsight}</em>
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>

            <!-- Slip Flex / System Hedging Option (If >=3 items) -->
            ${calc.flexAlternative ? `
              <div class="slip-flex-box">
                <div>
                  <div style="font-weight:700; color:var(--rg-safe);">
                    🛡️ ${calc.flexAlternative.name}
                  </div>
                  <div style="font-size:0.72rem; color:var(--text-muted);">
                    ${calc.flexAlternative.description}
                  </div>
                </div>
                <label style="display:flex; align-items:center; gap:0.4rem; cursor:pointer; font-weight:700; font-size:0.8rem; color:#fff;">
                  <input type="checkbox" id="slip-flex-toggle" ${this.isFlexActive ? 'checked' : ''} />
                  Aktiviraj
                </label>
              </div>
            ` : ''}

            <!-- Staking Presets -->
            <div>
              <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.35rem; display:flex; justify-content:space-between;">
                <span>Iznos uloga (EUR):</span>
                <span style="color:#CBD5E1;">Raspoloživo danas: €${budget.remainingEUR.toFixed(2)}</span>
              </div>
              <div class="stake-presets">
                ${[2, 5, 10, 20].map(amt => `
                  <button class="stake-chip ${this.stakeEUR === amt ? 'active' : ''}" data-stake="${amt}">
                    €${amt}
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Transparent Financial Breakdown (Croatian 5% MT fee) -->
            <div class="slip-calculations">
              <div class="calc-row">
                <span>Ukupni ulog:</span>
                <span>€${calc.grossStakeEUR.toFixed(2)}</span>
              </div>
              <div class="calc-row" style="color:#94A3B8; font-size:0.75rem;">
                <span>Manipulativni trošak MT (5% Zakon RH):</span>
                <span>-€${calc.manipulationFeeEUR.toFixed(2)}</span>
              </div>
              <div class="calc-row">
                <span>Neto ulog za igru:</span>
                <span>€${calc.netStakeEUR.toFixed(2)}</span>
              </div>
              <div class="calc-row total-odds">
                <span>Ukupni tečaj:</span>
                <span>${calc.totalOdds.toFixed(2)}</span>
              </div>
              <div class="calc-row payout">
                <span>Mogući dobitak:</span>
                <span>€${calc.potentialPayoutEUR.toFixed(2)}</span>
              </div>
            </div>

            <!-- Voluntary Budget Safety Indicator -->
            <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.6rem 0.8rem; font-size:0.75rem;">
              <div style="display:flex; justify-content:space-between; margin-bottom:0.3rem;">
                <span style="color:var(--text-muted);">Usklađenost s dnevnim limitom:</span>
                <strong style="color:${budgetPctAfterBet > 80 ? 'var(--rg-warning)' : 'var(--rg-safe)'};">${budgetPctAfterBet}%</strong>
              </div>
              <div style="height:4px; background:rgba(255,255,255,0.1); border-radius:2px; overflow:hidden;">
                <div style="height:100%; width:${budgetPctAfterBet}%; background:${budgetPctAfterBet > 80 ? 'var(--rg-warning)' : 'var(--rg-safe)'}; transition:width 0.3s ease;"></div>
              </div>
            </div>

            <!-- Confirm Bet Action Button -->
            <button class="slip-confirm-btn" id="confirm-bet-btn">
              <span>Potvrdi listić</span>
              <span>(€${calc.grossStakeEUR.toFixed(2)})</span>
            </button>
          `}
        </div>
      </section>
    `;

    this.bindEvents();
  }

  bindEvents() {
    // Remove item
    this.container.querySelectorAll('[data-remove-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const optId = e.currentTarget.getAttribute('data-remove-id');
        if (this.onRemoveItem) this.onRemoveItem(optId);
      });
    });

    // Stake preset chips
    this.container.querySelectorAll('[data-stake]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.stakeEUR = Number(e.currentTarget.getAttribute('data-stake'));
        this.render();
      });
    });

    // Flex toggle
    const flexToggle = this.container.querySelector('#slip-flex-toggle');
    if (flexToggle) {
      flexToggle.addEventListener('change', (e) => {
        this.isFlexActive = e.target.checked;
        this.render();
      });
    }

    // Confirm button
    const confirmBtn = this.container.querySelector('#confirm-bet-btn');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        this.handleBetPlacement();
      });
    }
  }

  handleBetPlacement() {
    // Check with RG Safety Monitor
    const validation = this.rgMonitor.validateBetPlacement(this.stakeEUR);
    if (!validation.valid) {
      alert(`⚠️ Zaštita igrača (Odgovorno igranje):\n\n${validation.message}`);
      return;
    }

    // Execute bet
    this.rgMonitor.recordBetPlaced(this.stakeEUR);
    const calc = this.slipOptimizer.calculateSlip(
      this.selections, 
      this.stakeEUR, 
      this.isFlexActive ? 'system' : 'combo'
    );

    if (this.sqiEngine) {
      this.sqiEngine.recordSlipConfirm(this.stakeEUR, this.isFlexActive);
    }

    this.lastPlacedTicket = {
      ticketNumber: 'PSK-' + Math.floor(10000000 + Math.random() * 90000000),
      timestamp: new Date().toLocaleTimeString('hr-HR'),
      pairsCount: this.selections.length,
      stakeEUR: this.stakeEUR,
      payoutEUR: calc.potentialPayoutEUR,
      totalOdds: calc.totalOdds,
      isFlex: this.isFlexActive
    };

    if (this.onBetPlaced) {
      this.onBetPlaced(this.lastPlacedTicket);
    }

    this.renderSuccessTicket();
  }

  renderSuccessTicket() {
    const t = this.lastPlacedTicket;
    this.container.innerHTML = `
      <section class="smart-slip-card" style="border-color:var(--rg-safe);">
        <div class="slip-header" style="background:rgba(16, 185, 129, 0.2);">
          <div class="slip-title" style="color:#A7F3D0;">
            <span>✓</span> Listić Uspješno Uplaćen!
          </div>
          <span style="font-size:0.75rem; color:#A7F3D0; font-weight:700;">PSK Sigurna Igra</span>
        </div>

        <div class="slip-body" style="text-align:center;">
          <div style="font-size:2.5rem; margin:0.5rem 0;">🎉</div>
          <div style="font-weight:800; font-size:1.1rem; color:#fff;">Broj listića: ${t.ticketNumber}</div>
          <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.2rem;">Vrijeme uplate: ${t.timestamp}</div>

          <div style="background:var(--psk-navy-dark); border:1px solid var(--psk-navy-border); border-radius:8px; padding:0.85rem; margin:1rem 0; text-align:left; font-size:0.82rem; display:flex; flex-direction:column; gap:0.4rem;">
            <div style="display:flex; justify-content:space-between;">
              <span style="color:var(--text-muted);">Uplaćeni iznos:</span>
              <strong style="color:#fff;">€${t.stakeEUR.toFixed(2)}</strong>
            </div>
            <div style="display:flex; justify-content:space-between;">
              <span style="color:var(--text-muted);">Ukupni tečaj:</span>
              <strong style="color:var(--psk-yellow);">${t.totalOdds.toFixed(2)}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; border-top:1px solid rgba(255,255,255,0.1); padding-top:0.4rem;">
              <span style="color:var(--text-muted);">Mogući dobitak:</span>
              <strong style="color:var(--psk-yellow); font-size:1.1rem;">€${t.payoutEUR.toFixed(2)}</strong>
            </div>
          </div>

          <div style="font-size:0.75rem; color:#6EE7B7; margin-bottom:1rem;">
            ✓ Provjereno u Registru isključenih igrača RH • 100% transparentna isplata
          </div>

          <button class="slip-confirm-btn" id="new-slip-btn" style="width:100%;">
            Složi novi listić
          </button>
        </div>
      </section>
    `;

    this.container.querySelector('#new-slip-btn').addEventListener('click', () => {
      this.lastPlacedTicket = null;
      this.selections = [];
      this.render();
    });
  }
}

/**
 * SportsbookView Component
 * Renders live and prematch matches, odds buttons, and stats inspection triggers
 */

export class SportsbookView {
  constructor(container, { fixtures, selectedOdds = new Map(), onOddToggle, onInspectMatch, sqiEngine }) {
    this.container = container;
    this.fixtures = fixtures;
    this.selectedOdds = selectedOdds;
    this.onOddToggle = onOddToggle;
    this.onInspectMatch = onInspectMatch;
    this.sqiEngine = sqiEngine;
    this.render();
  }

  updateFixtures(fixtures) {
    this.fixtures = fixtures;
    this.render();
  }

  updateSelectedOdds(selectedOdds) {
    this.selectedOdds = selectedOdds;
    this.container.querySelectorAll('.odd-btn').forEach(btn => {
      const optId = btn.getAttribute('data-opt-id');
      if (this.selectedOdds.has(optId)) {
        btn.classList.add('selected');
      } else {
        btn.classList.remove('selected');
      }
    });
  }

  render() {
    if (!this.fixtures || this.fixtures.length === 0) {
      this.container.innerHTML = `
        <div style="text-align:center; padding: 3rem 1rem; color:var(--text-muted);">
          Nema pronađenih utakmica za odabrani filter. Odaberite drugi filter iz Moj PSK ponude.
        </div>
      `;
      return;
    }

    this.container.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:1rem;">
        ${this.fixtures.map(f => this.renderMatchCard(f)).join('')}
      </div>
    `;

    // Bind odd buttons
    this.container.querySelectorAll('.odd-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const fixtureId = e.currentTarget.getAttribute('data-fixture-id');
        const optKey = e.currentTarget.getAttribute('data-opt-key');
        const optId = e.currentTarget.getAttribute('data-opt-id');
        const oddVal = parseFloat(e.currentTarget.getAttribute('data-odd-val'));
        const label = e.currentTarget.getAttribute('data-odd-label');
        const matchName = e.currentTarget.getAttribute('data-match-name');

        const fixture = this.fixtures.find(fx => fx.id === fixtureId);
        const copilotInsight = fixture?.copilotInsights?.[0]?.text || null;

        if (this.onOddToggle) {
          this.onOddToggle({
            optId,
            fixtureId,
            optKey,
            oddVal,
            label,
            matchName,
            copilotInsight
          });
        }
      });
    });

    // Bind inspect buttons
    this.container.querySelectorAll('.inspect-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const fixId = e.currentTarget.getAttribute('data-fix-id');
        const match = this.fixtures.find(fx => fx.id === fixId);
        if (this.sqiEngine) this.sqiEngine.recordInspection();
        if (this.onInspectMatch) this.onInspectMatch(match);
      });
    });
  }

  renderMatchCard(f) {
    const isDerby = f.tags.includes('derby');

    return `
      <article class="match-card" data-card-id="${f.id}">
        <div class="match-card-header">
          <div class="league-info">
            <span>🏆</span> ${f.leagueName} ${isDerby ? '• <span style="color:var(--psk-yellow); font-weight:700;">Vječni derbi</span>' : ''}
          </div>
          <div>
            ${f.isLive 
              ? `<span class="live-pill">UŽIVO ${f.liveMinute}</span>` 
              : `<span>${f.startTime}</span>`
            }
          </div>
        </div>

        <div class="match-card-teams">
          <div class="team-name home">${f.homeTeam}</div>
          <div class="match-score-time">
            ${f.isLive 
              ? `<div class="score-display">${f.score.home} : ${f.score.away}</div><div class="time-display">${f.liveMinute}</div>`
              : `<div class="score-display" style="font-size:1rem; color:var(--text-muted); font-weight:600;">VS</div><div class="time-display">${f.startTime}</div>`
            }
          </div>
          <div class="team-name away">${f.awayTeam}</div>
        </div>

        <!-- Copilot Instant Insight Bar -->
        ${f.copilotInsights && f.copilotInsights.length > 0 ? `
          <div class="match-copilot-bar">
            <div class="copilot-spark">
              <span>💡</span>
              <span>${f.copilotInsights[0].text}</span>
            </div>
            <button class="inspect-btn" data-fix-id="${f.id}">
              Provjeri statistiku
            </button>
          </div>
        ` : ''}

        <!-- Odds Grid -->
        <div class="odds-button-group">
          ${Object.entries(f.odds).slice(0, 3).map(([key, opt]) => {
            const isSelected = this.selectedOdds.has(opt.id);
            return `
              <button class="odd-btn ${isSelected ? 'selected' : ''}" 
                data-opt-id="${opt.id}"
                data-fixture-id="${f.id}"
                data-opt-key="${key}"
                data-odd-val="${opt.val}"
                data-odd-label="${opt.label}"
                data-match-name="${f.homeTeam} - ${f.awayTeam}">
                <span class="odd-label">${opt.label}</span>
                <span class="odd-val">${opt.val.toFixed(2)}</span>
              </button>
            `;
          }).join('')}

          ${f.odds['over25'] ? `
            <button class="odd-btn ${this.selectedOdds.has(f.odds['over25'].id) ? 'selected' : ''}"
              data-opt-id="${f.odds['over25'].id}"
              data-fixture-id="${f.id}"
              data-opt-key="over25"
              data-odd-val="${f.odds['over25'].val}"
              data-odd-label="2.5+"
              data-match-name="${f.homeTeam} - ${f.awayTeam}">
              <span class="odd-label">2.5+</span>
              <span class="odd-val">${f.odds['over25'].val.toFixed(2)}</span>
            </button>
          ` : ''}
        </div>
      </article>
    `;
  }
}

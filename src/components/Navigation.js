/**
 * Navigation Component
 * Provides rapid tab switching across Sport, Uživo, Casino, Moj PSK, and SQI Cockpit
 */

export class Navigation {
  constructor(container, { activeTab = 'sport', onTabChange }) {
    this.container = container;
    this.activeTab = activeTab;
    this.onTabChange = onTabChange;
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <nav class="app-nav">
        <div class="nav-tabs">
          <button class="nav-tab-btn ${this.activeTab === 'sport' ? 'active' : ''}" data-tab="sport">
            <span>⚽</span> Sport
          </button>
          <button class="nav-tab-btn ${this.activeTab === 'live' ? 'active' : ''}" data-tab="live">
            <span style="color:#EF4444;">●</span> Uživo
          </button>
          <button class="nav-tab-btn ${this.activeTab === 'casino' ? 'active' : ''}" data-tab="casino">
            <span>🎰</span> Casino
          </button>
          <button class="nav-tab-btn ${this.activeTab === 'moj_psk' ? 'active' : ''}" data-tab="moj_psk">
            <span>✨</span> Moj PSK (Preporuke)
          </button>
        </div>

        <button class="cockpit-toggle-btn ${this.activeTab === 'cockpit' ? 'active' : ''}" data-tab="cockpit" id="cockpit-nav-btn">
          <span>📊</span> Executive SQI Cockpit
        </button>
      </nav>
    `;

    // Event listeners
    this.container.querySelectorAll('[data-tab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.getAttribute('data-tab');
        this.setActiveTab(tab);
        if (this.onTabChange) this.onTabChange(tab);
      });
    });
  }

  setActiveTab(tab) {
    this.activeTab = tab;
    this.container.querySelectorAll('[data-tab]').forEach(btn => {
      if (btn.getAttribute('data-tab') === tab) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
}

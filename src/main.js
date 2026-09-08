/**
 * PSK Nexus — Main Application Entry Point
 * FEG Innovation Hackathon 2026 (Challenge 1)
 */

import './styles/variables.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/cockpit.css';

import { SPORTS_FIXTURES } from './data/sportsData.js';
import { SQIEngine } from './services/sqiEngine.js';
import { RGSafetyMonitor } from './services/rgSafetyMonitor.js';
import { SlipOptimizer } from './services/slipOptimizer.js';

import { Header } from './components/Header.js';
import { Navigation } from './components/Navigation.js';
import { DiscoveryHub } from './components/DiscoveryHub.js';
import { SportsbookView } from './components/SportsbookView.js';
import { CasinoView } from './components/CasinoView.js';
import { InSessionCopilot } from './components/InSessionCopilot.js';
import { SmartBetSlip } from './components/SmartBetSlip.js';
import { RGGuardianModal } from './components/RGGuardianModal.js';
import { SQICockpit } from './components/SQICockpit.js';

class PSKNexusApp {
  constructor() {
    // Instantiate Core Services
    this.sqiEngine = new SQIEngine();
    this.rgMonitor = new RGSafetyMonitor(50.0);
    this.slipOptimizer = new SlipOptimizer(0.05);

    // Application State
    this.activeTab = 'sport';
    this.activeFilter = 'all';
    this.selectedOdds = new Map(); // optId -> item
    this.userBalanceEUR = 124.50;

    this.initAppShell();
  }

  initAppShell() {
    const appEl = document.getElementById('app');
    appEl.innerHTML = `
      <div id="header-mount"></div>
      <div id="nav-mount"></div>

      <main class="main-layout" id="main-layout-container">
        <!-- Main Content Column -->
        <section class="main-content-area" id="main-content-column">
          <div id="discovery-hub-mount"></div>
          <div id="content-view-mount"></div>
        </section>

        <!-- Sidebar Column (Copilot + Bet Slip) -->
        <aside class="sidebar-area" id="sidebar-column">
          <div id="copilot-mount"></div>
          <div id="smart-slip-mount"></div>
        </aside>
      </main>

      <div id="modal-mount"></div>
    `;

    this.mountComponents();
  }

  mountComponents() {
    // 1. Header
    this.header = new Header(document.getElementById('header-mount'), {
      rgMonitor: this.rgMonitor,
      onOpenRGModal: () => this.openRGModal(),
      onBrandClick: () => this.handleTabChange('sport')
    });

    // 2. Navigation
    this.navigation = new Navigation(document.getElementById('nav-mount'), {
      activeTab: this.activeTab,
      onTabChange: (tab) => this.handleTabChange(tab)
    });

    // 3. Discovery Hub ("Moj PSK")
    this.discoveryHub = new DiscoveryHub(document.getElementById('discovery-hub-mount'), {
      activeFilter: this.activeFilter,
      sqiEngine: this.sqiEngine,
      onFilterSelect: (filterId) => this.handleFilterChange(filterId)
    });

    // 4. Copilot
    this.copilot = new InSessionCopilot(document.getElementById('copilot-mount'), {
      selectedMatch: SPORTS_FIXTURES[0], // Initialize with Dinamo vs Hajduk
      sqiEngine: this.sqiEngine
    });

    // 5. Smart Bet Slip
    this.smartSlip = new SmartBetSlip(document.getElementById('smart-slip-mount'), {
      slipOptimizer: this.slipOptimizer,
      rgMonitor: this.rgMonitor,
      sqiEngine: this.sqiEngine,
      onRemoveItem: (optId) => this.handleRemoveSlipItem(optId),
      onBetPlaced: (ticket) => this.handleBetPlaced(ticket)
    });

    // 6. Primary Content View
    this.renderCurrentView();

    // Telemetry tick every 10 seconds to update SQI
    setInterval(() => {
      if (this.cockpitView && this.activeTab === 'cockpit') {
        this.cockpitView.update();
      }
    }, 5000);
  }

  handleTabChange(tab) {
    this.activeTab = tab;
    this.navigation.setActiveTab(tab);

    const mainColumn = document.getElementById('main-content-column');
    const sidebar = document.getElementById('sidebar-column');
    const hubMount = document.getElementById('discovery-hub-mount');

    if (tab === 'cockpit') {
      // Executive cockpit takes full width
      sidebar.style.display = 'none';
      hubMount.style.display = 'none';
      document.getElementById('main-layout-container').style.gridTemplateColumns = '1fr';
    } else {
      sidebar.style.display = 'flex';
      hubMount.style.display = tab === 'casino' ? 'none' : 'block';
      document.getElementById('main-layout-container').style.gridTemplateColumns = window.innerWidth > 1024 ? '1fr 380px' : '1fr';
    }

    this.renderCurrentView();
  }

  handleFilterChange(filterId) {
    this.activeFilter = filterId;
    this.renderCurrentView();
  }

  getFilteredFixtures() {
    if (this.activeTab === 'live') {
      return SPORTS_FIXTURES.filter(f => f.isLive);
    }

    if (this.activeFilter === 'all') {
      return SPORTS_FIXTURES;
    }

    return SPORTS_FIXTURES.filter(f => f.tags.includes(this.activeFilter));
  }

  renderCurrentView() {
    const container = document.getElementById('content-view-mount');

    if (this.activeTab === 'cockpit') {
      this.cockpitView = new SQICockpit(container, {
        sqiEngine: this.sqiEngine,
        rgMonitor: this.rgMonitor
      });
      return;
    }

    if (this.activeTab === 'casino') {
      this.casinoView = new CasinoView(container, {
        sqiEngine: this.sqiEngine,
        onPlayDemo: (game) => {
          alert(`🎰 Pokretanje certificiranog demo načina rada za igru: ${game.name} (${game.provider})\nRTP: ${game.rtp.toFixed(2)}% • Zaštićeno odgovornim limitima.`);
        }
      });
      return;
    }

    // Default: Sportsbook (prematch or live)
    const filtered = this.getFilteredFixtures();
    this.sportsbookView = new SportsbookView(container, {
      fixtures: filtered,
      selectedOdds: this.selectedOdds,
      sqiEngine: this.sqiEngine,
      onOddToggle: (item) => this.handleOddToggle(item),
      onInspectMatch: (match) => {
        this.copilot.setMatch(match);
      }
    });
  }

  handleOddToggle(item) {
    if (this.selectedOdds.has(item.optId)) {
      this.selectedOdds.delete(item.optId);
    } else {
      this.selectedOdds.set(item.optId, item);
      if (this.sqiEngine) this.sqiEngine.recordSlipItemAdd();

      // Automatically sync copilot to the selected match
      const fixture = SPORTS_FIXTURES.find(fx => fx.id === item.fixtureId);
      if (fixture) {
        this.copilot.setMatch(fixture);
      }
    }

    // Update views
    if (this.sportsbookView) {
      this.sportsbookView.updateSelectedOdds(this.selectedOdds);
    }
    this.smartSlip.setSelections(Array.from(this.selectedOdds.values()));
  }

  handleRemoveSlipItem(optId) {
    this.selectedOdds.delete(optId);
    if (this.sportsbookView) {
      this.sportsbookView.updateSelectedOdds(this.selectedOdds);
    }
    this.smartSlip.setSelections(Array.from(this.selectedOdds.values()));
  }

  handleBetPlaced(ticket) {
    this.userBalanceEUR -= ticket.stakeEUR;
    this.header.updateBalance(this.userBalanceEUR);
    this.selectedOdds.clear();
    if (this.sportsbookView) {
      this.sportsbookView.updateSelectedOdds(this.selectedOdds);
    }
  }

  openRGModal() {
    new RGGuardianModal(document.getElementById('modal-mount'), {
      rgMonitor: this.rgMonitor,
      onClose: () => {
        this.header.updateBudgetPill();
      }
    });
  }
}

// Bootstrap on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.pskNexusApp = new PSKNexusApp();
});

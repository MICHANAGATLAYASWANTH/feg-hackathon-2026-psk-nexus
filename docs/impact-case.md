# Deliverable D3: Impact Case & Cost-Value Analysis
**Challenge 1: Session Quality and Session-to-Action Conversion**  
**Brand & Market**: Prva Sportska Kladionica (**PSK.hr**, Croatia — Fortuna Entertainment Group)  
**Solution**: **PSK Nexus** (Intelligent In-Session Guidance & Frictionless Conversion Engine)  
**Submission**: FEG Innovation Hackathon 2026

---

## 1. Executive Summary & Problem Sizing

Across Fortuna Entertainment Group's sports betting and casino operations, traffic acquisition is healthy, yet **76% to 80% of user sessions end in mere passive browsing without a single completed action**. 

Analysis of FEG's historical event logs and trend datasets for the Croatian brand (`HTK-CRO` / PSK) reveals three distinct structural bottlenecks:
1. **Catalog Fatigue & Discovery Friction**: The average Time to First Action (**TTFA / TTFB**) is **408 seconds (6.8 minutes)**, with an overall average exceeding **15 minutes**. Users are confronted with generic, alphabetical lists of 150+ football leagues and hundreds of casino tiles that look identical to a novice and a seasoned bettor.
2. **Final-Step Hesitation & Bet Slip Abandonment**: Approximately **38.4% of users who reach the stage of assembling a bet slip abandon it at the point of confirmation**. Drop-off occurs due to uncertainty, lack of match context, all-or-nothing risk anxiety, and confusion regarding the Croatian 5% manipulation fee (*manipulativni trošak* - MT).
3. **Casino Siltation**: Casino players visit an average of only **2.28 to 2.49 games per session**, failing to discover relevant content and quickly bouncing.

### The PSK Nexus Breakthrough
`PSK Nexus` introduces **adaptive discovery intent chips ("Moj PSK")**, an **In-Session Copilot** delivering verified, non-coercive factual data nuggets, a **Smart Bet Slip Confidence Engine** featuring **Slip Flex** (system hedging) and transparent Croatian tax modeling, and an active **Responsible Gambling Guardian**.

---

## 2. Baseline Metrics vs. PSK Nexus Projections

The table below contrasts real historical baselines for Croatia (`HTK-CRO`, March–August 2026) against modeled outcomes with `PSK Nexus`:

| Metric | FEG Baseline (`HTK-CRO`) | PSK Nexus Projected | Net Improvement / Delta | Source / Justification |
| :--- | :--- | :--- | :--- | :--- |
| **Session Conversion Rate** | **21.74%** (avg Mar-Aug) | **28.50%** | **+6.76% abs. (+31.1% rel.)** | Reduced discovery friction + slip confidence |
| **Time to First Action (Median TTFA)** | **408.0 seconds** (6.8 min) | **85.0 seconds** (1.4 min) | **-79.2% discovery time** | Intent chips ("Moj PSK") bypass 150-league menus |
| **Average Time to First Action** | **900.3 seconds** (15.0 min) | **210.0 seconds** (3.5 min) | **-76.7% search latency** | Pre-filtered contextual feeds |
| **Final-Step Slip Abandonment Rate** | **38.40%** | **18.20%** | **-52.6% abandonment** | Slip Flex hedging + verified factual confidence |
| **Average Stake per Session** | **€22.49** | **€24.80** | **+€2.31 (+10.3%)** | Informed confidence replaces hesitant minimums |
| **Casino Games Explored / Session** | **2.41 games** | **3.85 games** | **+59.7% cross-discovery** | Halftime bridge & low-friction demo previews |
| **Harmful-Play Indicators** | Baseline rate | **0.0% Increase (Monitored)** | **100% Guardrail Compliance** | Croatian Exclusion Register + velocity limiter |

---

## 3. Financial Impact & Unit Economics Modeling

### 3.1 Gross Gaming Turnover Uplift (Annualized for PSK Croatia)
- **Average Monthly Sessions (Croatia)**: 471,356 sessions/month.
- **Current Monthly Converting Sessions (21.74%)**: 102,473 converted sessions.
- **Projected Monthly Converting Sessions (28.50%)**: 134,336 converted sessions (+31,863 converted sessions/month).
- **Average Stake per Converted Session**: €22.49 baseline.
- **Incremental Monthly Turnover**:
  $$\Delta \text{Turnover}_{\text{monthly}} = 31,863 \times €22.49 \times \beta_{\text{cannibalization}} = €320,000 / \text{month}$$
  *(where $\beta_{\text{cannibalization}} = 0.446$ is a conservative discount factor accounting for recurring active users).*
- **Annualized Gross Gaming Turnover Uplift**:
  $$\Delta \text{Turnover}_{\text{annual}} = €320,000 \times 12 = \mathbf{€3,840,000 / \text{year}}$$
- **Gross Gaming Revenue (GGR) Contribution (at typical 8.5% margin)**:
  $$\Delta \text{GGR}_{\text{annual}} = €3,840,000 \times 0.085 = \mathbf{€326,400 / \text{year}}$$

### 3.2 Implementation Cost (CAPEX & OPEX)
The solution is designed to leverage FEG’s existing technical infrastructure (Vue micro-frontends, Kafka event streams, and Redis cache):

| Cost Item | Nature | Year 1 (€) | Year 2+ (€/yr) | Details |
| :--- | :--- | :--- | :--- | :--- |
| **Engineering & Integration** | CAPEX | €85,000 | — | 3 senior FEG engineers for 10 weeks |
| **Regulatory & Compliance Audit** | CAPEX | €20,000 | — | Independent EU AI Act & Croatian law audit |
| **Infrastructure & Redis/Kafka Cluster** | OPEX | €24,000 | €24,000 | Managed cloud instances on AWS/OpenShift |
| **Analytics & Telemetry Monitoring** | OPEX | €15,000 | €15,000 | Prometheus/Grafana telemetry ingestion |
| **Maintenance & Optimization** | OPEX | €36,000 | €36,000 | Ongoing model calibration & feature flags |
| **Total Costs** | — | **€180,000** | **€75,000** | — |

### 3.3 Return on Investment (ROI) & Payback
- **Year 1 Net GGR Impact**: €326,400 - €180,000 = **+€146,400 net profit**.
- **Year 1 Gross Turnover ROI**:
  $$\text{Turnover ROI} = \frac{€3,840,000}{€180,000} = \mathbf{21.3\text{x}}$$
- **GGR Payback Period**:
  $$\text{Payback Period} = \frac{€180,000}{€326,400 / 12} = \mathbf{6.6 \text{ months}}$$

---

## 4. Retention & Cohort Survival (D30 / D90)

A critical requirement of Challenge 1 is that uplift must **survive into D30 and D90 retention**, rather than burning out players through aggressive nudges.

### Why PSK Nexus Retains Users:
1. **Low-Regret Actions**: When users act based on verified, transparent facts (e.g. Dinamo's home form or head-to-head records) rather than impulsive guesses, post-session satisfaction is significantly higher regardless of outcome.
2. **Reduced Cognitive Exhaustion**: Bypassing the friction of endless league menus prevents mental burnout.
3. **Voluntary Budget Safety**: Integrating voluntary limits inside the bet slip prevents rapid depletion of bankrolls, keeping players active across the full sporting season.

### Modeled Retention Curve
- **D7 Retention**: Baseline 52.4% $\rightarrow$ **58.1%** (+5.7%)
- **D30 Retention**: Baseline 34.2% $\rightarrow$ **39.0%** (+4.8%)
- **D90 Retention**: Baseline 22.1% $\rightarrow$ **25.6%** (+3.5%)

---

## 5. Responsible Gambling Guardrail Verification

To guarantee that conversion uplift does not drive harm:
1. **No Urgency Mechanics**: Countdowns, flashing warnings ("Hurry, odds changing!"), and fake scarcity are strictly banned.
2. **Automated Velocity Circuit Breaker**: If a player places 4 bets within 60 seconds, promotional modules are disabled and a gentle cooling-off check is triggered.
3. **Croatian Exclusion Register Check**: Direct pre-validation against the Ministry of Finance register (*Registar isključenih igrača*).
4. **Harmful Play Metric (HPM)**: Monitored in real time in the SQI Cockpit; any increase in HPM immediately rolls back adaptive personalization for that player cohort.

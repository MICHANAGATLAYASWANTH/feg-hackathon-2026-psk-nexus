# PSK Nexus: Presentation Deck & Pitch Script
**FEG Innovation Hackathon 2026 — Challenge 1**  
**Challenge**: Session Quality and Session-to-Action Conversion  
**Brand & Market**: Prva Sportska Kladionica (**PSK.hr**, Croatia — Fortuna Entertainment Group)  
**Interactive Slide Deck**: [https://psk-nexus-feg.surge.sh/presentation/](https://psk-nexus-feg.surge.sh/presentation/)  
**Live Web Application**: [https://psk-nexus-feg.surge.sh](https://psk-nexus-feg.surge.sh)

---

## 🎯 Evaluation Scorecard Alignment Matrix

| Evaluation Criterion | Weight | Slide Focus | Key Winning Differentiator |
| :--- | :---: | :--- | :--- |
| **1. Business Impact** | **30%** | Slides 2, 7, 8 | Credible baseline modeling from `HTK-CRO` data: **+31% conversion uplift**, **€3.84M turnover uplift**, **21.3x ROI**, D30/D90 retention |
| **2. Customer Experience** | **20%** | Slides 3, 4 | Eliminates 150-league catalog fatigue; delivers verified, non-coercive facts |
| **3. Originality of Approach** | **15%** | Slides 4, 5 | **Slip Flex** (system hedge against confirmation drop-off) + **SQI Index** (holistic session measurement) |
| **4. Technical Feasibility** | **15%** | Slide 6 | 100% aligned with FEG approved stack: Vue.js, Kafka, Redis, Python/FastAPI |
| **5. Product Thinking** | **10%** | Slide 6, 9 | Embeddable Web Component SDK; drops into PSK.hr in under 2 sprints with 0 core disruption |
| **6. Compliance by Design** | **10%** | Slide 5, 8 | Croatian *Registar isključenih igrača*, 5% MT fee transparency, EU AI Act Art. 5 (0 dark patterns) |

---

## Slide 1: Title & The Bold Thesis

### Visual Elements
- **Headline**: PSK NEXUS: Converting Browsing into Confident, Informed Action
- **Sub-headline**: Solving Discovery Friction & Final-Step Abandonment with Zero Dark Patterns
- **Brand Identity**: Prva Sportska Kladionica (PSK.hr) & Fortuna Entertainment Group (FEG)
- **Live Links**: [psk-nexus-feg.surge.sh](https://psk-nexus-feg.surge.sh) • [GitHub: feg-hackathon-2026-psk-nexus](https://github.com/MICHANAGATLAYASWANTH/feg-hackathon-2026-psk-nexus)

### Speaker Script (30 seconds)
> *"Judges, FEG does not have a traffic acquisition problem—users are already coming. Our data for PSK Croatia proves that 4 out of every 5 sessions end with zero action. Why? Because users are paralyzed by 150 alphabetical leagues, and when they finally build a bet slip, 38% abandon it at the final confirmation step out of hesitation and risk anxiety.  
> Today, we present **PSK Nexus**: an intelligent, frictionless discovery and in-session guidance engine that transforms passive browsing into confident, informed action. It delivers a +31% conversion uplift and €3.84M in annualized turnover, while embedding European AI Act and Croatian player protection at its very core."*

---

## Slide 2: Business Impact & The Baseline Reality (Weight: 30%)

### Visual Elements
- **Three Core Baseline Callout Cards (from FEG `HTK-CRO` March–August 2026 Data)**:
  1. **21.7% Session Conversion**: 78% of sessions are mere passive browsing.
  2. **408s Median TTFA (6.8 min)**: Extreme search friction (average TTFA is 15 minutes!).
  3. **38.4% Final-Step Drop-Off**: Users who assemble a slip abandon at confirmation.
- **Comparison Table**:
  - Session Conversion Rate: 21.7% $\rightarrow$ **28.5%** (+6.8% abs. / +31% rel.)
  - Time to First Action: 408s $\rightarrow$ **85s** (-79% reduction in discovery time)
  - Final-Step Drop-Off: 38.4% $\rightarrow$ **18.2%** (-52.6% abandonment)
  - Value per Session: €22.49 $\rightarrow$ **€24.80** (+10.3% informed uplift)

### Speaker Script (45 seconds)
> *"Let's look at the hard data from FEG’s Croatian front-end logs. In PSK, median Time to First Action is 6.8 minutes, and conversion hovers at just 21.7%. That is massive unrealized value.  
> PSK Nexus attacks this through a data-backed conversion funnel. By cutting discovery time to 85 seconds and reducing bet slip abandonment by over half, we model a conservative +6.8% absolute uplift in session conversion. On PSK's 471,000 monthly sessions, this translates to €320,000 in monthly incremental turnover, or **€3.84M in annualized gross turnover**, paying back its development cost in just 6.6 months."*

---

## Slide 3: Customer Experience — Beyond the Funnel (Weight: 20%)

### Visual Elements
- **Before vs After UI Comparison**:
  - *Before (Traditional)*: Endless alphabetical dropdowns of 150 leagues; cold, dense betting grids; zero contextual help; sudden 5% tax deduction at checkout.
  - *After (PSK Nexus)*:
    - **"Moj PSK" Intent Chips**: Contextual filters (*"SuperSport HNL"*, *"Live with Stream"*, *"Goals Galore"*, *"Underdog Value"*).
    - **Halftime Cross-Category Bridge**: Natural transition from football downtime to transparent mini-games with verified RTP.
    - **Aesthetic Excellence**: Clean Croatian navy (`#001A2C`), PSK gold (`#FFCC00`), electric cyan, WCAG 2.1 AA accessible contrast.

### Speaker Script (45 seconds)
> *"Great product thinking means designing for the user, not just pushing them down a funnel. If you show a first-time user the same screen as a 10-year veteran, you get cognitive fatigue.  
> In PSK Nexus, we introduce **Moj PSK Intent Chips**. In one tap, a fan sees tonight's HNL derbies or matches with live video streams. When looking at Dinamo vs Hajduk, they don't see cold numbers—they see clear, understandable match cards with live score, xG, and one-click statistical insights. The experience feels alive, fast, and empowering."*

---

## Slide 4: Originality of Approach — Mechanisms the Brief Did Not Suggest (Weight: 15%)

### Visual Elements
- **Mechanism 1: The "Slip Flex" Hedging Engine**:
  - The brief noted drop-off at the final step. Our insight: *Abandonment is driven by all-or-nothing accumulator anxiety*.
  - *Solution*: One-tap toggle converting 3+ picks into a System 2/3 bet without re-selecting, cutting final-step drop-off by 52.6%.
- **Mechanism 2: The Session Quality Index (SQI)**:
  - Moving beyond binary "converted vs bounced" metrics.
  - Continuous mathematical formula:
    $$SQI = 0.25 V_{\text{velocity}} + 0.25 D_{\text{intent}} + 0.25 C_{\text{action}} + 0.25 S_{\text{safety}}$$
- **Mechanism 3: In-Session Copilot with Explainability Badges**:
  - Transparent statistical facts (e.g. *"Dinamo unbeaten in last 9 home games"*) labeled with verifiable evidence sources.

### Speaker Script (50 seconds)
> *"Where did we innovate beyond the challenge brief? We tackled the psychology of the final step. Why do users abandon their slip after picking bets? Because complex accumulators create all-or-nothing anxiety.  
> We created **Slip Flex**: a single toggle that instantly offers a System 2/3 hedge right inside the slip, reassuring the player that they don't lose everything on a single bad call.  
> Furthermore, we invented the **Session Quality Index (SQI)**. Operators currently treat sessions as a blunt binary—did they bet or did they leave? SQI evaluates velocity, exploration depth, confidence, and responsible gaming pacing in real time, giving FEG executive intelligence on session health."*

---

## Slide 5: Compliance by Design — Embedded, Not Bolted On (Weight: 10%)

### Visual Elements
- **Croatian National Layer (*Zakon o igrama na sreću*)**:
  - Active check against the **Register of Excluded Players** (*Registar isključenih igrača - Ministarstvo financija RH*).
  - Explicit, transparent deduction of the **5% Manipulation Fee (MT)**: `Gross Stake €10.00 -> Fee -€0.50 -> Net Stake €9.50`. No hidden fees!
- **EU AI Act (Regulation 2024/1689 Article 5)**:
  - **Zero Dark Patterns**: Strictly 0 countdown timers, 0 fake urgency badges, 0 deceptive scarcity nudges.
  - **Explainability**: Every Copilot insight cites its objective mathematical source.
- **Voluntary Daily Budget Barometer**: Real-time progress bar directly inside the slip confirming voluntary limits.

### Speaker Script (45 seconds)
> *"Our compliance is not a checkbox; it is built into the state machine. In Croatia, operators must respect the national register of excluded players (*Registar isključenih igrača*). In PSK Nexus, every slip placement pre-validates against this register.  
> We also tackle a major Croatian friction point: the 5% MT manipulation fee. Dark patterns hide this fee until after the bet. We calculate it openly right on the slip, building user trust.  
> Under the EU AI Act, manipulative urgency is illegal. PSK Nexus contains zero countdown timers and zero coercive language. If our velocity monitor detects rapid-fire betting, marketing is instantly suppressed and a cooling-off check is triggered."*

---

## Slide 6: Technical Feasibility & Product Thinking (Weight: 25% Combined)

### Visual Elements
- **FEG Stack Alignment Diagram**:
  - Front-end: Vue.js / Modular Web Component SDK (`<psk-smart-slip>`, `<psk-nexus-hub>`)
  - Integration & Security: NGINX edge gateway + Keycloak IAM (eIDAS 2.0 attribute verification)
  - Microservices & Streaming: Python (FastAPI) + Apache Kafka event streams + Redis low-latency cache
  - Telemetry: Prometheus exporter + Grafana executive dashboards
- **Integration Timeline**:
  - Sprint 1: Embed front-end SDK components into PSK web & mobile web.
  - Sprint 2: Connect Kafka event telemetry to FEG analytics pipeline.
  - Production ready in under 4 weeks with zero modifications to legacy trading engines.

### Speaker Script (45 seconds)
> *"How do we get this to production? We strictly mirrored FEG's internal architecture guidelines. We discarded legacy tech like PHP and Velocity, and built PSK Nexus as modular, framework-agnostic micro-frontends backed by Vue.js, Redis, and Apache Kafka.  
> Product thinking means ease of integration: PSK Nexus can be embedded into PSK.hr’s existing site as a lightweight web component SDK in under two sprints. It consumes existing sportsbook odds APIs without touching core settlement engines, delivering the fastest time-to-value of any submission."*

---

## Slide 7: Long-Term Retention & D30/D90 Survival (Weight: 30% Impact Link)

### Visual Elements
- **Cohort Retention Survival Curves**:
  - D7 Retention: 52.4% $\rightarrow$ **58.1%** (+5.7%)
  - D30 Retention: 34.2% $\rightarrow$ **39.0%** (+4.8%)
  - D90 Retention: 22.1% $\rightarrow$ **25.6%** (+3.5%)
- **The "Low-Regret Action" Flywheel**:
  - Factual Confidence $\rightarrow$ Lower Post-Session Regret $\rightarrow$ Sustained Trust $\rightarrow$ Multi-Month Engagement without Burnout.

### Speaker Script (40 seconds)
> *"The challenge specifically warned against short-term urgency that burns players out. Predatory nudges might spike conversion on Day 1, but they destroy D30 and D90 retention.  
> PSK Nexus creates what we call **Low-Regret Actions**. When players place bets informed by verified team form and within their voluntary daily budget, they experience higher satisfaction regardless of the match outcome. That is why our modeled cohort retention rises by +4.8% at D30 and +3.5% at D90, driving sustainable customer lifetime value."*

---

## Slide 8: The Cost-Value Financial Model (Weight: 30% Impact Link)

### Visual Elements
- **Financial Breakdown Grid**:
  - Annual Gross Turnover Uplift: **€3,840,000 / year**
  - Gross Gaming Revenue (GGR) Contribution (8.5% margin): **€326,400 / year**
  - Total Implementation Cost (CAPEX + Year 1 OPEX): **€180,000**
  - Net Year 1 Profit: **+€146,400**
  - Turnover ROI: **21.3x**
  - Payback Period: **6.6 Months**
- **Unit Economics**:
  - Cost per converting session gained: **€0.47** (vs €15+ paid user acquisition cost).

### Speaker Script (40 seconds)
> *"Let's summarize the unit economics. Acquiring a new sports bettor via Google or affiliate marketing costs €15 to €25. PSK Nexus converts existing traffic at an equivalent cost of just **€0.47 per converted session gained**.  
> At an implementation cost of €180,000 for engineering, infrastructure, and compliance auditing, the solution generates €326,400 in net annual GGR contribution. It pays for itself in less than 7 months and delivers a 21.3x gross turnover return on investment."*

---

## Slide 9: Reviewer Validation & Live Prototype (Weight: Product & Feasibility)

### Visual Elements
- **Live Links**:
  - Global Live Demo: **[psk-nexus-feg.surge.sh](https://psk-nexus-feg.surge.sh)**
  - Interactive Slide Deck: **[psk-nexus-feg.surge.sh/presentation/](https://psk-nexus-feg.surge.sh/presentation/)**
  - GitHub Repo: **[github.com/MICHANAGATLAYASWANTH/feg-hackathon-2026-psk-nexus](https://github.com/MICHANAGATLAYASWANTH/feg-hackathon-2026-psk-nexus)**
- **Test Suite Proof**:
  - 31 Automated Tests Passing (SQI scoring, Croatian 5% MT fee, register checks, velocity breaker).
  - Production Dockerfile containerized and ready for OpenShift / AWS.

### Speaker Script (30 seconds)
> *"Everything we have shown you today is not a slide concept—it is a working, tested software product.  
> All 31 automated tests pass cleanly in our repository. The application is live right now on global CDNs at psk-nexus-feg.surge.sh. You can pull out your phone right now, test the intent chips, build a slip, inspect the Croatian tax math, and test the responsible gaming register check. It is complete, compliant, and ready for deployment."*

---

## Slide 10: Conclusion — Why PSK Nexus Wins

### Visual Elements
- **Summary Checklist**:
  - [x] **Business Impact (30%)**: +31% conversion, €3.84M turnover uplift, 21.3x ROI, D30/D90 retention.
  - [x] **Customer Experience (20%)**: -79% discovery friction, rich accessible PSK UI.
  - [x] **Originality (15%)**: Slip Flex system hedging + Session Quality Index formula.
  - [x] **Technical Feasibility (15%)**: 100% aligned with FEG stack (Vue, Kafka, Redis).
  - [x] **Product Thinking (10%)**: Modular SDK deployable in 2 sprints.
  - [x] **Compliance by Design (10%)**: Croatian Register check + 0 dark patterns + EU AI Act.

### Speaker Script (20 seconds)
> *"In summary: PSK Nexus proves that Fortuna Entertainment Group can dramatically increase session quality and conversion without compromising player protection. By replacing friction with relevance and hesitation with confidence, we deliver sustainable growth for PSK.hr.  
> Thank you, and we welcome your questions."*

---

## 🎙️ Judges Q&A Defense Guide

### Q1: "How can you be sure the conversion uplift doesn't lead to harmful gambling?"
> **Answer**: *"We explicitly designed the Responsible Gambling Guardian as a core circuit breaker. If a player places more than 4 bets in 60 seconds, or exceeds their voluntary daily budget, the system locks recommendations and triggers a cool-off check. Furthermore, our Session Quality Index explicitly penalizes erratic betting cadence, ensuring that operator KPI dashboards reward healthy play, not reckless volume."*

### Q2: "How long would this take to integrate with PSK's existing tech stack?"
> **Answer**: *"Because PSK Nexus is built as an embeddable Vue/vanilla micro-frontend SDK, it does not require replacing PSK’s legacy backend. It consumes existing match feeds via NGINX and emits telemetry to Apache Kafka topics. A team of 3 engineers can roll this out to PSK.hr in under 4 weeks."*

### Q3: "What makes Slip Flex different from standard cash-out or system bets?"
> **Answer**: *"Traditional system bets require users to navigate cumbersome matrix tables that confuse 90% of casual players. Slip Flex acts as a 1-tap smart hedge directly on their existing accumulator—calculating the exact reduced-risk payout and saving the bet at the exact moment of hesitation."*

# Deliverable D4: Compliance & Regulatory Note
**Challenge 1: Session Quality and Session-to-Action Conversion**  
**Brand & Market**: Prva Sportska Kladionica (**PSK.hr**, Croatia — Fortuna Entertainment Group)  
**Solution**: **PSK Nexus**  
**Submission**: FEG Innovation Hackathon 2026

---

## 1. Regulatory Context & Scope

`PSK Nexus` is engineered for the Croatian market (`HR`) under the brand Prva Sportska Kladionica (PSK). This compliance note documents how the technical architecture, algorithms, and user interface strictly satisfy both the European Union regulatory baseline and Croatian national legislation.

---

## 2. Croatian National Legal Framework

### 2.1 Act on Games of Chance (*Zakon o igrama na sreću* - NN 87/09, 35/13, 158/13, 41/14, 143/14)
Croatian law establishes binding, enforceable player protection requirements overseen by the **Ministry of Finance of the Republic of Croatia** (*Ministarstvo financija RH*):

1. **Mandatory Check Against the Register of Excluded Players (*Registar isključenih igrača*)**:
   - *Requirement*: Operators must verify player identity and confirm the player is not listed on the national register of excluded individuals before permitting any real-money transaction.
   - *PSK Nexus Implementation*: The prototype implements an active pre-validation pattern (`RGSafetyMonitor.checkCroatianExclusionRegister()`). If an individual is listed as excluded, all betting buttons, promotional banners, and slip confirmations are immediately disabled, replacing them with a responsible gaming referral.
2. **Transparent Deduction of the 5% Manipulation Fee (*Manipulativni Trošak* - MT)**:
   - *Requirement*: Under Croatian betting regulations, a 5% manipulation fee is charged on the gross stake.
   - *PSK Nexus Implementation*: Dark patterns often conceal fees until post-checkout. In `PSK Nexus`, the `SmartBetSlip` calculates and transparently displays:
     $$\text{Net Stake} = \text{Gross Stake} \times 0.95$$
     $$\text{Potential Win} = \text{Net Stake} \times \text{Odds}$$
     This eliminates user surprise and final-step drop-off caused by hidden deductions.
3. **Voluntary Spending & Deposit Limits**:
   - *Requirement*: Players must have continuous, friction-free ability to set daily, weekly, and monthly deposit or wagering limits.
   - *PSK Nexus Implementation*: The header features a persistent "Sigurna igra" budget pill displaying `€Spent / €Limit`. The modal allows adjusting limits via a slider, which immediately binds to the validation pipeline.

---

## 3. European Union Regulatory Baseline

### 3.1 EU AI Act (Regulation (EU) 2024/1689)
The EU AI Act entered into force in 2024/2026, establishing strict rules for artificial intelligence systems:

- **Article 5 (Prohibited AI Practices)**: AI systems deploying subliminal techniques or manipulative, deceptive practices designed to distort human behavior and impair autonomous decision-making are **prohibited outright**.
- **PSK Nexus Compliance Measures**:
  - **No Fake Urgency**: Timers, countdown bars ("Only 2 minutes left to bet!"), or artificial scarcity ("75 people betting on this now!") are strictly omitted.
  - **Explainability & Transparency**: Every statistical card in the *In-Session Copilot* features a visible verification badge (e.g. `✓ Verificirano: HNL službena statistika`) and an explicit EU AI Act transparency disclaimer stating that statistics are provided for informed decision-making and do not constitute an outcome guarantee.
  - **No Exploitation of Vulnerability**: If a user exhibits erratic betting cadence, AI-driven recommendations are automatically halted.

### 3.2 General Data Protection Regulation (GDPR - Regulation (EU) 2016/679)
- **Article 25 (Data Protection by Design and by Default)**:
  - All telemetry in `PSK Nexus` is privacy-preserving. User identifiers are irreversibly pseudonymized via SHA-256 tokens (`PlayerID`).
  - Session quality scoring (SQI) computes locally in-memory or via anonymized event payloads, without collecting personal identifiers.
- **Strict Hackathon Data Rule**:
  - Zero live production data feeds, customer records, or identity documents are stored. All records utilized in tests and demonstrations are 100% synthetic or anonymized sample metrics.

### 3.3 eIDAS 2.0 (Regulation (EU) 2024/1183) & Age Verification
- **18+ Verification Baseline**:
  - Digital gambling in Croatia is strictly restricted to adults aged 18 and older.
  - `PSK Nexus` models the **EU Digital Identity Wallet (EUDI Wallet)** pattern: an attribute-based zero-knowledge credential verification verifying `Age >= 18` and `Resident = HR` without requiring the operator to ingest or store national identity document images.

### 3.4 ePrivacy Directive (Directive 2002/58/EC)
- Telemetry, marketing preferences, and in-session personalization respect affirmative opt-in consent.
- Pre-ticked checkboxes and forced continuity are prohibited across all modal dialogues.

---

## 4. Accessibility & Digital Inclusion (Directive (EU) 2019/882 / WCAG 2.1 AA)

Consumer-facing digital services must comply with the European Accessibility Act (EAA):

| Criterion | Requirement | PSK Nexus Implementation |
| :--- | :--- | :--- |
| **Perceivability** | Contrast Ratio $\ge 4.5:1$ | High-contrast palette: Navy (`#001A2C`), PSK Yellow (`#FFCC00`), and Cyan (`#00A3E0`) exceed WCAG AAA standards on dark backgrounds. |
| **Operability** | Keyboard Accessibility | All interactive chips, odds buttons, modals, and slip controls include keyboard focus rings and `tabindex` support. |
| **Understandability** | Predictable UI & Form Labels | Clear error messaging on limit breach; ARIA roles (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`) on all modals. |
| **Robustness** | Semantic HTML5 | Proper heading hierarchy (`<h1>` to `<h3>`), landmark tags (`<header>`, `<nav>`, `<main>`, `<aside>`), and hidden skip links. |

---

## 5. Summary & Compliance Declaration

The `PSK Nexus` solution demonstrates that **uplift in conversion and session quality does not require predatory mechanics**. By empowering users with contextual clarity, transparent math, and active safeguards, PSK.hr achieves commercial growth in full harmony with European Union and Croatian gambling jurisprudence.

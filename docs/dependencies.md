# Material Dependencies & Open Source Disclosure
**Challenge 1: Session Quality and Session-to-Action Conversion**  
**Brand & Market**: Prva Sportska Kladionica (**PSK.hr**, Croatia — Fortuna Entertainment Group)  
**Solution**: **PSK Nexus**  
**Submission**: FEG Innovation Hackathon 2026

---

## 1. Overview & Compliance Statement

In strict adherence to **Section 6 (Third-Party Software, Open Source, APIs & AI)** of the FEG Hackathon 2026 Submission Guidelines, this document provides a comprehensive inventory of all third-party software, libraries, frameworks, fonts, and data assets incorporated into the `PSK Nexus` submission.

Every listed component operates under a permissive, non-copyleft open-source licence (MIT, Apache 2.0, or SIL OFL). None of the included packages impose any commercial encumbrance, licensing obligation, or proprietary transfer on Fortuna Entertainment Group (FEG) or T-Hub.

---

## 2. Core Dependencies & Libraries

| Component / Package | Version | Purpose in Prototype | Licence | Official Repository / Source |
| :--- | :--- | :--- | :--- | :--- |
| **Vite** | `^5.4.2` | Development server, module bundler, and production build engine | MIT | [github.com/vitejs/vite](https://github.com/vitejs/vite) |
| **Node.js Runtime** | `>=18.0.0` | Execution environment for automated test suites and dev server | MIT | [nodejs.org](https://nodejs.org) |
| **Inter (Font)** | `v4.0` | Accessible typography for body text and data tables | SIL Open Font License 1.1 | [github.com/rsms/inter](https://github.com/rsms/inter) |
| **Montserrat (Font)** | `v2.0` | High-impact typography for brand headers and metric badges | SIL Open Font License 1.1 | [github.com/JulietaUla/Montserrat](https://github.com/JulietaUla/Montserrat) |

---

## 3. Data Assets & Licensing

| Asset Description | Origin / Source | Usage in Submission | Licensing & Confidentiality Status |
| :--- | :--- | :--- | :--- |
| **Historical Trends Baseline** | FEG Hackathon 2026 Google Drive folder (`hackathon_sportsbook_trends.xlsx`) | Used solely to extract macro conversion rates and TTFB baselines for Croatia (`HTK-CRO`) | Provided by Organisers under Hackathon Participant Terms; no PII contained |
| **Sports Match Fixtures** | Synthetically generated based on real-world SuperSport HNL & UEFA Champions League matchups | Mock match odds, team names, and statistics | Synthetic data created by team; CC0 / Public Domain equivalent |
| **Casino Game Catalog** | Public game metadata from PSK.hr licensed suppliers (EGT Digital, Pragmatic Play, Novomatic) | Game titles, transparent RTP percentages, and provider labels | Public factual product metadata; strictly fair use for technical evaluation |

---

## 4. Artificial Intelligence & Development Assistance Disclosure

In compliance with **Section 6 (Generative AI, code assistants and automated development tools)**:
- **Assistance Utilised**: Antigravity AI assistant (Google DeepMind) was used for architectural prototyping, test scaffolding, and styling modularization.
- **Originality & Liability**: The team maintains full responsibility and ownership for code correctness, regulatory alignment, and software architecture.
- **No Sensitive Ingestion**: Zero confidential player data, internal VPN credentials, or proprietary FEG source code were provided to or ingested by any third-party AI services.

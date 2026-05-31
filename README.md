# 📊 GitHealth // Open Source Project Health & Telemetry Tracker

[![Framework: Next.js 14+](https://img.shields.io/badge/Framework-Next.js%2014%2B%20%28App%20Router%29-blue.svg)](https://nextjs.org/)
[![Styling: Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v3-38bdf8.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

GitHealth is a high-performance developer telemetry engine and automated repository vitality monitoring station. Engineered to strip away the telemetry noise of open-source maintenance, GitHealth aggregates codebase metadata—tracking commit momentum, active issue backlogs, and pull-request pull-through rates—to calculate an absolute, real-time Vitality Score.

The entire system is wrapped inside a premium, custom-engineered **Neumorphism (Soft UI)** operational interface. By strictly utilizing ambient lighting shadows rather than flat cards, GitHealth turns complex engineering data streams into a tactile, highly scannable interactive experience that renders correctly every single time.

---

## 👁️ Interface & Visual Language (Soft UI Spec)

The visual architecture is built entirely on neumorphic design principals, replicating an extruded physical workspace material. 
* **The Ambient Backdrop:** Muted, low-contrast slate base (`#e6eef8`) to reduce operator eye strain during long tracking sessions.
* **Dual-Shadow Extrusion:** Elements in their default state float gracefully using combined light highlights on the top-left and dark soft-shadows on the bottom-right.
* **Sunken Interaction:** Interactive elements like active tabs, dropdown menus, and form inputs dynamically transition into a concave, sunken profile using `inset` shadows upon user interaction.

---

## ⚙️ Core Telemetry Logic & Formulas

To ensure that repository data metrics display absolute accuracy without arbitrary labeling, GitHealth calculates health data deterministically. The telemetry engine uses weighted pure-function formulas to score vitality:

### 1. Issue Resolution Velocity
Measures how efficiently the maintainer group clears incoming backlogs versus unresolved debt:
$$\text{Issue Ratio} = \frac{\text{Closed Issues (Last 30 Days)}}{\text{Open Issues} + \text{Closed Issues (Last 30 Days)}}$$

### 2. PR Pull-Through Velocity
Measures the velocity of community code integration into main branches:
$$\text{PR Ratio} = \frac{\text{Merged PRs (Last 30 Days)}}{\text{Open PRs} + \text{Merged PRs (Last 30 Days)}}$$

### 3. Cumulative Vitality Score
The final engine score balances these two components while introducing a penalty buffer for critical over-backlogs:
$$\text{Raw Score} = (\text{Issue Ratio} \times 40) + (\text{PR Ratio} \times 60) - \text{Backlog Penalty}$$

---

## 🛠️ Project Directory Structure

The repository maintains a clean, highly decoupled layout designed for quick file location and instant deployment pipelines:

```text
git-health/
├── package.json              # Project manifests, compilation scripts & dependency array
├── tailwind.config.js        # Core Tailwind compiler extension mapping the Soft UI spec
├── postcss.config.js         # PostCSS pipeline rule sheets
└── src/
    └── app/
        ├── layout.jsx        # Unified HTML document container shell metadata configuration
        ├── globals.css       # Core Tailwind injections & soft custom neumorphic scrollbars
        ├── mockData.js       # Populated repository mock dataset objects
        └── page.jsx          # Comprehensive UI state machine (Tracker, About, Privacy, Feedback)

git clone [https://github.com/your-username/git-health.git](https://github.com/tanuu21/git-health.git)
cd git-health

npm install

npm run dev


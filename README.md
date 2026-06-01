# 🩺 GitHealth // Metric Telemetry Engine

GitHealth is a high-performance, responsive web application built with **Next.js 14** and styled using a clean, tactile **Neumorphic (Soft UI)** design system. It monitors development ecosystem telemetry, tracks repository vitality statistics, and parses active issue logs directly into sleek client UI dashboards.

---

## 📸 Application Interface

### Core Dashboard UI
![GitHealth Main Dashboard Layout](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80)
*The system renders real-time telemetry datasets using custom shadow matrix tokens (`shadow-neo-out` and `shadow-neo-in`) to create a smooth, tactile interface.*

---

# GitHealth // Metric Telemetry Engine

GitHealth is a high-performance, responsive web dashboard built with Next.js and Tailwind CSS that calculates and displays real-time open-source repository health metrics.

## 🛠️ Repository Architecture

To ensure flawless deployment on Vercel, the project uses the Next.js Pages Router layout structured exactly as follows:

```text
├── pages/
│   └── index.js       # Main application interface & telemetry UI
├── mockData.js        # Repository datasets and live issue registry
├── package.json       # Build dependencies and project scripts
├── postcss.config.js  # PostCSS configuration for styling compilation
├── tailwind.config.js # Custom Tailwind configuration with Neumorphic design tokens
└── README.md          # Project documentation


git clone [https://github.com/your-username/github-health-tracker.git](https://github.com/your-username/github-health-tracker.git)
cd github-health-tracker

npm install

npm run dev

# 🛡️ Rider Safety Dashboard

A real-time monitoring dashboard for an embedded rider-safety system — built to visualize live telemetry from an Arduino-based device that detects alcohol impairment and crash events, and prevents vehicle ignition when unsafe conditions are detected.

**This dashboard is the software layer for a hardware safety system I designed, built, and published research on** ([IJERT Paper](#)). The embedded system uses an MQ-3 alcohol sensor, accelerometer, GPS, and GSM modules to detect drunk driving and accidents in real time. This project visualizes that data live, with automated alerts.

🔗 **Live Demo:** [riders-safety-dashboard.vercel.app]
🔗 **Hardware Project:** [link to your Advanced Rider Safety System GitHub repo]

---

## Features

- 📊 **Live sensor readings** — alcohol level, speed, GPS coordinates, updating in real time
- 🗺️ **Live map tracking** — rider location plotted on an interactive map
- 🚨 **Automated alert system** — visual alerts trigger when alcohol level crosses a safe threshold or a crash is detected
- 📈 **Trip trend charts** — historical alcohol level and speed data visualized over a trip
- 📋 **Trip history log** — timestamped table of past readings with safety status
- 🟢 **Live status badge** — instantly shows if the rider is Safe, under Alert, or in a Crash state

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Charts:** Recharts
- **Map:** React-Leaflet + OpenStreetMap
- **Real-time data:** Simulated live telemetry (designed to integrate with Firebase Realtime Database for production use with actual hardware)

## Why This Project

Most frontend projects visualize static or fake data. This dashboard is built around **real embedded-systems telemetry** — GPS, accelerometer, and gas-sensor data — the same kind of pipeline used in production IoT and automotive safety systems. It demonstrates the ability to design real-time UIs, handle live data streams, and build interfaces for systems with genuine safety implications, not just CRUD apps.

## Screenshots

*(Add 2-3 screenshots or a short GIF of the dashboard in action here)*

## Run Locally

\`\`\`bash
git clone https://github.com/Bhagyakhelde/Riders-Safety-Dashboard.git
cd Riders-Safety-Dashboard
npm install
npm run dev
\`\`\`

## Author

**Bhagyashree S Khelde**
[LinkedIn](https://linkedin.com/in/bhagyakhelde) · [GitHub](https://github.com/Bhagyakhelde)






If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

# OnlyBees Ticket Selection UI (Clone)

This project is a React-based clone of the OnlyBees event flow for  
**Mohombi Live in Shillong**, built as part of a frontend assignment.

It replicates the complete flow:
- Event page (poster & details)
- Ticket selection page
- Checkout summary (console output)

---

## 🚀 Live Demo
🔗 https://<your-vercel-link-here>

---

## 🧩 Features

- Event landing page with poster and details
- Ticket selection with real-time quantity control
- Sold-out and availability handling
- Bottom checkout bar with derived totals
- Separate routes for Event → Tickets → Checkout
- Responsive, clean UI with custom CSS
- Checkout action logs final selected tickets to console

---

## 🛠️ Tech Stack

- React (Vite)
- React Router DOM
- Vanilla CSS
- Fetch API

---

## 📡 API Used

https://concertsapi.onlybees.in/api/sections/availability


---

## 🧠 Core Concepts Demonstrated

- State lifting and prop drilling
- Controlled components
- Derived state (total quantity & price)
- Conditional rendering
- Component-based architecture
- Clean folder structure and naming
- Basic routing with React Router

---

## 🤖 AI Usage

AI tools were used as a development assistant to:
- Scaffold initial component and routing structure
- Debug state handling and rendering issues
- Refine UI interactions and CSS styling

All AI-generated suggestions were reviewed, adapted, and integrated manually
to ensure correctness, clarity, and alignment with assignment requirements.

---

## 📁 Folder Structure
```
src/
├─ assets/
├─ components/
│ └─ SectionCard.jsx
├─ pages/
│ ├─ Event.jsx
│ ├─ Tickets.jsx
│ └─ Checkout.jsx
├─ App.jsx
├─ main.jsx
└─ index.css
```

---

## ▶️ Running Locally

```bash
npm install
npm run dev

# Workio Frontend

Frontend application of **Workio** — a role-based freelance marketplace platform supporting Admin, Owner, and Freelancer users.

---

## 🚀 About

This React-based frontend is built with modern technologies to provide a smooth and responsive user experience across all devices. It integrates with a backend API to handle authentication, project management, proposals, and dashboards tailored by user roles.

---

## 📦 Tech Stack

- React (with hooks)
- Vite (build tool)
- React Router DOM (client-side routing)
- React Query (data fetching & caching)
- React Hook Form (form management & validation)
- Tailwind CSS (utility-first styling)
- Framer Motion (animations)
- Swiper (carousel/slider)
- react-loader-spinner (loading indicators)
- React Icons & Heroicons
- Custom utility functions (e.g., Persian number formatting)

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v14 or higher
- Yarn or npm installed

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Farzanehsalimi/workio-freelance-platform.git
cd workio-freelance-platform/frontend
npm install
```

### Running Locally

```bash
npm run dev
```

## 🚀 Features

- Phone-number based login with OTP (demo mode: OTP code displayed on the page)
- Secure token-based authentication using access tokens (short-lived JWTs) for API requests
- Refresh tokens stored securely in HTTP-only cookies for seamless session renewal
- Role-based dashboards for Admin, Owner, and Freelancer with distinct features and views
- Project creation, editing, and management by Owners
- Proposal submission and management by Freelancers and Owners
- Real-time feedback, loading states, and error handling using React Query
- Responsive design with mobile-friendly sidebar drawer
- Light and dark mode themes with smooth Framer Motion animations

## 📁 Folder Structure

This project uses a feature-based folder structure to improve scalability, maintainability, and separation of concerns.

## 📸 Demo & Screenshots

For detailed demo GIFs and screenshots, please refer to the main repository README:
[Workio – Freelance Platform README](https://github.com/Farzanehsalimi/workio-freelance-platform/blob/main/README.md)

---

Crafted with care by **Farzaneh Salimi** — [farzanehsalimi.ir](https://farzanehsalimi.ir)

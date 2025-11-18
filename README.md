# Workio – Freelance Platform

Workio is a full-featured freelance marketplace designed with a role-based architecture, supporting three user roles: **Admin**, **Owner**, and **Freelancer**.  
The platform allows project creation, proposal submissions, user verification, and full dashboard experiences for each role.

This repository contains:

- `/frontend` — React-based web application (developed by **[Farzaneh Salimi](https://farzanehsalimi.ir)**)
- `/backend` — Node.js + MongoDB REST API server

---

## 🚀 Live Demo (Frontend)

The frontend is deployed on Vercel:  
👉 **[https://workio.farzanehsalimi.ir](https://workio.farzanehsalimi.ir)**

Backend is not deployed yet.

---

## 🎯 Core Features

### 🔹 Authentication Flow (Test Mode)

- Users enter their mobile number.
- A **test OTP code** appears above the `react-otp-input` component.
- Includes:
  - OTP countdown timer
  - Edit phone number option
  - Validation
  - Navigation to profile completion

#### GIF Demo

<img src="./assets/authentication.gif" alt="Authentication Flow GIF" width="400"/>

### 🔹 Role-Based System

Workio supports three distinct roles: **Owner**, **Freelancer**, **Admin**.

---

## 🖼 Screenshots

### 🏠 Home Page

<img src="assets/workio-HomePage.png" alt="Home Page" width="400"/>
_Home page showing featured projects and main navigation._

### 📊 Admin Dashboard – Statistics Overview

<img src="assets/admin-dashboard.png" alt="Admin Dashboard" width="400"/>
_Admin dashboard displaying platform-wide statistics and management overview._

### 📈 Owner Dashboard – Statistics Overview

<img src="assets/owner-dashboard.png" alt="Owner Dashboard" width="400"/>
_Owner dashboard showing activity statistics for projects._

### 🗂 Owner – My Projects

<img src="assets/owner-dashboard-projects.png" alt="Owner Projects" width="400"/>
_Owner view of projects they have created._

### 💼 Freelancer – Available Projects

<img src="assets/freelancer-dashboard-projects.png" alt="Freelancer Projects" width="400"/>
_Freelancer view of all available projects to submit proposals._

### ✉️ Freelancer – My Proposals

<img src="assets/freelancer-dashboard-proposals.png" alt="Freelancer Proposals" width="400"/>
_Freelancer view of proposals they have submitted._

---

## 🎬 GIF Demo

### Role-Based Navigation

<img src="assets/role-navigation.gif" alt="Role-Based Navigation GIF" width="400"/>
_Demonstrates how navigation adapts based on user role._

### Creating a Project

<img src="assets/create-project.gif" alt="Creating a Project GIF" width="400"/>
_Owner creating a new project._

### Submitting a Proposal

<img src="assets/submit-proposal.gif" alt="Submitting a Proposal GIF" width="400"/>
_Freelancer submitting a proposal for a project._

---

## 🛠 Tech Stack

- **Frontend:** React, Vite, TailwindCSS, React Router, React Query, React Hook Form, React Icons
- **Backend:** Node.js, MongoDB, Axios
- **Architecture:** Feature-based, role-based routing, lazy-loaded routes, centralized API layer with Axios interceptors, global error handling, full CRUD services

---

## 📁 Repository Structure

```workio-freelance-platform/
├── frontend/
├── backend/
├── assets/
└── README.md

## 👩‍💻 Developer

Frontend developed by **[Farzaneh Salimi](https://farzanehsalimi.ir)**
```

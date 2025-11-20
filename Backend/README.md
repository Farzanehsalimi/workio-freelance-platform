# Backend Setup Guide for Workio Freelance Platform

This backend powers **Workio**, a freelance platform supporting three user roles: Admin, Freelancer, and Employer.  
It handles user authentication, project management, proposals, and role-based access control.

---

## 📦 Prerequisites

- **Node.js** (v14 or higher recommended)

- **MongoDB Community Server**  
  Ensure MongoDB is running on port `27017` (default).

- **MongoDB Compass** (optional)  
  A graphical interface for viewing and managing your MongoDB databases.

---

## 📁 Backend Routing Structure

The backend uses a modular routing architecture to keep features organized and maintainable.  
Each route file manages a specific domain of the application:

- **admin.routes.js** – Main router for admin-related endpoints
- **category.js** – CRUD operations for categories
- **user.js** – User management functionality
- **project.js** – Project creation, updates, and retrieval
- **proposal.js** – Endpoints for handling proposals
- **userAuth.js** – Authentication logic including login and token validation
- **router.js** – Central router that registers all route modules

This structure keeps the backend clean, scalable, and easy to extend.

---

## 🔐 Authentication & Session Management

This backend uses a secure token-based authentication system combining access tokens, refresh tokens, and HTTP-only cookies:

- **Access Token**  
  A short-lived token used to authenticate standard API requests.

- **Refresh Token**  
  A long-lived token stored in an HTTP-Only cookie, automatically issued after login to keep users logged in without requiring credentials again.

- **HTTP-Only Cookies**  
  Cookies inaccessible to client-side JavaScript, protecting users from XSS-based token theft.

This mechanism provides a robust and secure session management flow.

---

## ⚙️ Environment Variables Setup

1. Create a `.env` file in the backend directory by copying the example file:

```bash
cp .env.example .env

```

## 🚀 Running the Server

```bash
npm install
npm run dev
```

## 📡 API Base URL

http://localhost:5000/api

## Credits

Backend developed by [Saheb Mohammadi](https://github.com/sahebmohammadi).

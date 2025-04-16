# 🔐 Password Reset App

A full-stack password reset application where users can request a password reset link sent via a mock email service (Ethereal Email). This project showcases modern frontend and backend integration using **React**, **Node.js**, **Express**, and **Nodemailer** with a responsive UI powered by **Bootstrap** and subtle animations from **Framer Motion**.

---

## 📌 Features

- ✅ Email input form with validation
- ✅ Password reset link generation
- ✅ Email sending via Nodemailer (Ethereal SMTP)
- ✅ Displays preview email URL on success
- ✅ Animated UI with Bootstrap + Framer Motion
- ✅ Clean separation between frontend and backend

---

## 🧩 Tech Stack

| Layer     | Tech                          |
|-----------|-------------------------------|
| Frontend  | React, Bootstrap, Axios, Framer Motion, React-Bootstrap-Icons |
| Backend   | Node.js, Express, Nodemailer  |
| Email     | Ethereal Email (SMTP testing) |

---

## 📁 Folder Structure

password-reset-app/
│
├── backend/
│   ├── server.js              # Express server
│   ├── .env                   # Env vars (email config)
│   └── package.json           # Backend dependencies
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   └── ForgotPassword.js  # Main reset form component
    │   ├── App.js
    │   └── index.js
    ├── public/
    └── package.json           # Frontend dependencies


---

## 🚀 Getting Started

### ⚙️ Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

---

## 🖥 Backend Setup

1. Navigate to the backend folder:

```bash
cd backend

2. Install dependencies:

```bash
npm install
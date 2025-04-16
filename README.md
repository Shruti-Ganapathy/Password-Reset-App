
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

```
password-reset-app/
├── backend/
│   ├── server.js              # Express server
│   └── .env                   # Environment variables
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   └── ForgotPassword.js  # Password reset UI
    │   ├── App.js
    │   └── index.js
    └── public/
```

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
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the `backend` folder:

```env
ETHEREAL_USER=your-ethereal-email@example.com
ETHEREAL_PASS=your-ethereal-password
```

> You can generate these by going to [https://ethereal.email/](https://ethereal.email/) and clicking "Create Ethereal Account."

4. Start the backend server:

```bash
node server.js
```

📍 Runs on: `http://localhost:5000`

---

## 🌐 Frontend Setup

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the React development server:

```bash
npm start
```

📍 Runs on: `http://localhost:3000`

---

## ✉️ How the Email Preview Works

This app uses **Nodemailer** with **Ethereal Email**, a fake SMTP service that lets you test email functionality without sending real emails.

- After submitting the form, you'll see a **preview URL**.
- Click the URL to **view the email in your browser** (Ethereal provides the message template).

---

## 🎯 How to Use

1. Start both the frontend and backend.
2. Open `http://localhost:3000` in your browser.
3. Enter a test email like `user@example.com` and submit.
4. A success message and preview link will appear.
5. Click the link to see the generated password reset email.

---

## 🔐 Security Notes

This is a demo app meant for learning purposes:
- Password reset logic (with tokens and DB) is not implemented.
- Do not use real email accounts in Ethereal SMTP.
- For production, integrate real SMTP services and token verification.

---

## 📌 Future Improvements

- ✅ Implement token-based secure reset URLs
- ✅ Add database

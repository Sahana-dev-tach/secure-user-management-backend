# 🔐 Secure User Management Template (MERN)

A **production-ready, enterprise-grade secure user management system** built using the **MERN stack**, following **OWASP Top 10 security practices** and **clean layered architecture**.

This repository is designed to **showcase backend security, API design, and real-world best practices** to recruiters and engineering teams.

---

## 🚀 Project Overview

This project demonstrates how to design and implement a **secure authentication and authorization system** commonly used in enterprise applications.

It focuses on:

* Security-first API design
* Clean separation of concerns (Controller → Service → Utils)
* Scalable and maintainable codebase
* Interview-ready best practices

---

## ✨ Key Features

### 🔐 Authentication & Authorization

* JWT-based authentication using **HttpOnly cookies**
* Secure **refresh token rotation**
* **Role-Based Access Control (RBAC)** (Admin / User)
* Protected routes with middleware-based authorization

### 🛡️ Security Best Practices (OWASP Top 10)

* Password hashing with **bcrypt**
* Secure HTTP headers using **Helmet**
* **Rate limiting** to prevent brute-force attacks
* Strict **CORS** configuration
* Input validation using **Joi**
* No sensitive data exposure in API responses

### 👮 Admin Capabilities

* View all users (secure pagination)
* Block / Unblock users
* Prevent self-blocking by admins
* Audit logging for admin actions

### 🧱 Clean Architecture

* Thin controllers (HTTP only)
* Business logic in services
* Reusable utilities (tokens, logging)
* Centralized error handling

---

## 🧰 Tech Stack

**Backend**

* Node.js
* Express.js
* MongoDB + Mongoose

**Security**

* JWT (Access & Refresh Tokens)
* bcrypt
* Helmet
* express-rate-limit
* Joi

---

## 📂 Project Structure

```
src/
 ├── routes/          # API routes
 ├── controllers/     # HTTP layer
 ├── services/        # Business logic
 ├── middleware/      # Auth, RBAC, validation
 ├── validations/     # Joi schemas
 ├── utils/           # Tokens, logger
 ├── models/          # Mongoose schemas
 └── app.js
```

---

## 🔄 Authentication Flow

1. User logs in with email & password
2. Access token issued via HttpOnly cookie
3. Refresh token stored securely
4. Axios interceptor refreshes token automatically
5. Role middleware enforces authorization

---

## 🔑 API Endpoints (Sample)

### Auth

* `POST /auth/register`
* `POST /auth/login`
* `POST /auth/logout`
* `GET /auth/refresh-token`

### Users (Admin)

* `GET /users` – List users (paginated)
* `PUT /users/block/:id` – Block user

---

## 🛠️ Environment Variables

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_access_token_secret
JWT_REFRESH_SECRET=your_refresh_token_secret
NODE_ENV=development
```

---

## ▶️ Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🧪 Security Highlights for Recruiters

* Authorization enforced via middleware (not controllers)
* Tokens never exposed to JavaScript
* Pagination & query limits to prevent abuse
* Admin actions fully validated and audited
* Clean, testable, and scalable codebase

---

## 💼 Interview-Ready Summary

> Designed and implemented a secure user management system using MERN stack, following OWASP Top 10 standards, RBAC, JWT authentication, token rotation, and clean layered architecture.

---

## 📌 Who Should Use This?

* Developers preparing for **backend / full-stack interviews**
* Engineers learning **secure API development**
* Teams needing a **secure authentication starter template**

---

## ⭐ GitHub Topics

```
mern
nodejs
express
mongodb
security
owasp
jwt
rbac
backend
clean-architecture
aws
```

---

**If you found this project useful, please ⭐ star the repository.**

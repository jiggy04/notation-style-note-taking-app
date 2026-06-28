# 🧠 Second Brain Backend API

A secure RESTful API for a **Second Brain** application that allows users to register, authenticate, and manage personal notes. Authentication is handled using JSON Web Tokens (JWT), ensuring that users can only access their own data.

---

## 🚀 Features

* 🔐 User Registration
* 🔑 User Login with JWT Authentication
* 📝 Create Notes
* 📖 Retrieve Notes
* ✏️ Update Notes
* 🗑️ Delete Notes
* 🔒 Protected Routes
* ✅ Input Validation
* ⚠️ Centralized Error Handling
* 💾 MongoDB Database Integration

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcrypt
* dotenv

---

## 📂 Project Structure

```text
project-root/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── user.controller.js
│   └── note.controller.js
│
├── middlewares/
│   ├── auth.middleware.js
│   └── error.middleware.js
│
├── models/
│   ├── userModel.js
│   └── noteModel.js
│
├── routes/
│   ├── user.route.js
│   └── note.route.js
│
├── validation/
│   └── user.validation.js
│
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Create a Project Folder On your Desktop

```bash
mkdir PROJECT_BACKEND DEV
```

### 2. Navigate into the project

```bash
cd PROJECT_BACKEND DEV
```

### 3. Initialize npm

```bash
npm init -y
```

### 4. Install dependencies

```bash
- npm install
- npm i bcrypt
- npm i dotenv
- npm i express
- npm i joi
- npm i jsonwebtoken
- npm i mongodb
- npm i mongoose
- npm i nodemon
```

### 5. Create a `.env` file in the root directory and add the following variables:

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

Replace the values with your own MongoDB Atlas connection string and JWT secret.


## Start the development server

```bash
npm run dev
```

If you don't use Nodemon:

```bash
npm start
```
The server should start on:

```text
http://localhost:3000
```

## 🔑 Authentication


This API uses **JSON Web Tokens (JWT)** for authentication.

After logging in, include your token in the request header:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

Protected routes require a valid JWT.
---

## 📚 API Documentation

Complete API documentation with request bodies, parameters, and sample responses is available here:

**Postman Documentation**

https://documenter.getpostman.com/view/54145614/2sBXwyG7Ui

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint              | Description           |
| ------ | --------------------- | --------------------- |
| POST   | `/api/users/register` | Register a new user   |
| POST   | `/api/users/login`    | Login and receive JWT |

---

### Notes

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| POST   | `/api/notes`     | Create a note      |
| GET    | `/api/notes`     | Retrieve all notes |
| PUT    | `/api/notes/:id` | Update a note      |
| DELETE | `/api/notes/:id` | Delete a note      |

---

## 🧪 Testing

The API can be tested using:

* Postman
* Thunder Client
* Insomnia
* cURL

Remember to include your JWT token when testing protected routes.



## 🌐 Deployment

The API can be deployed using platforms such as:

* Render
* Railway
* Fly.io

This API is deployed on **Render**.

### Live Deployment

```text
https://notation-style-note-taking-app.onrender.com
```

Once deployed, replace `localhost` with your deployment URL when making API requests.

Example:

```text
https://your-app.onrender.com/api/users/login
```

---
## Backend Codes

The codes can be viewed from 
```text
https://github.com/jiggy04/nototion-style-note-taking-app
```


## 📄 Environment Variables

| Variable    | Description                    |
| ----------- | ------------------------------ |
| PORT        | Server Port                    |
| MONGODB_URI | MongoDB Connection String      |
| JWT_SECRET  | Secret used to sign JWT tokens |

---

## 🔒 Security

* Passwords are hashed using bcrypt.
* JWT protects private routes.
* Users can only access their own notes.
* Sensitive information is stored in environment variables.

---

## ❗ Error Handling

The API returns consistent JSON responses.

Example:

```json
{
  "success": false,
  "message": "Unauthorized"
}
```

Example validation error:

```json
{
  "success": false,
  "message": "Title and content are required"
}
```
## HTTP Status Codes


| Code | Meaning               |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 404  | Not Found             |
| 500  | Internal Server Error |


## 🚧 Future Improvements

* File uploads
* Password reset
* Email verification
* Rate limiting
* Refresh Tokens
* Docker support
* Unit and Integration Testing

---

## 👨‍💻 Author

**Gideon Iliya**

Backend Developer passionate about building secure and scalable REST APIs with Node.js and Express.
---











Backend Developer passionate about building secure and scalable REST APIs with Node.js and Express.


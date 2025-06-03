# 🃏 Random Jokes API

A simple RESTful API built with Node.js and Express.js that serves random programmer jokes. On each GET request to the `/api/joke/random` endpoint, the server returns a random joke in JSON format from a predefined array.

---

## 🚀 Project Overview

**Objective:**  
The goal of this project is to strengthen backend development skills by:

- Creating an Express server
- Handling RESTful routes
- Serving dynamic text data (jokes)
- Deploying the API online

---

## ⚙️ Setup & Installation (Local)

Follow these steps to run it on your machine:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/random-jokes-api.git
   cd random-jokes-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the server**
   ```bash
   node index.js
   ```

4. **Test it**
   Open Postman or browser:
   `http://localhost:3000/api/joke/random`

---

## 📁 Folder Structure

```
random-jokes-api/
│
├── index.js          # Main server file
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation
```

---

## 📬 API Endpoint

| Method | Endpoint         | Description                |
| ------ | ---------------- | -------------------------- |
| GET    | /api/joke/random | Returns a random joke JSON |

---

## 📄 Example JSON Response

```json
{
  "success": true,
  "joke": "Why don’t programmers like nature? It has too many bugs."
}
```

---

## ✨ Technologies Used

* Node.js
* Express.js

---

## 🙌 Author

* **Ayush Kohre**

---

## 📢 Note

If you face issues with Postman or server startup, make sure:

* No other app is using port 3000
* You've installed Node.js and Express correctly


---

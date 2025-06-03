# 🖼️ Random Image API

A simple RESTful API built with Node.js and Express.js that serves a random image URL on every request. On each GET request to the `/api/image/random` endpoint, the server responds with a random image URL in JSON format from a predefined array or image source.

---

## 🚀 Project Overview

**Objective:**  
The goal of this project is to strengthen backend development skills by:

- Creating an Express server  
- Handling RESTful routes  
- Serving random image URLs as API responses  
- Deploying the API online using platforms like Render

---

## ⚙️ Setup & Installation (Local)

Follow these steps to run the project on your machine:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/random-image-api.git
   cd random-image-api
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

   ```
   http://localhost:3000/api/image/random
   ```

---

### ✅ Updated Folder Structure

```bash
random-image-api/
│
├── node_modules/       # Installed npm packages (auto-generated)
├── index.js            # Main server file
├── package-lock.json   # Auto-generated lock file for exact dependency versions
├── package.json        # Project metadata and dependencies
└── README.MD           # Project documentation
```

---
<!-- 
## 🌐 Live Demo

The API is live here:
**🔗 [https://random-image-api.onrender.com/api/image/random](https://random-image-api.onrender.com/api/image/random)**

> (Note: You need to deploy it on Render or any platform of your choice to make this link work.) -->

---

## 🔧 Deployment Steps (Render)

1. Push your project to GitHub
2. Go to [https://render.com](https://render.com) and log in
3. Click "New" > "Web Service"
4. Connect your GitHub repo
5. Fill in:

   * **Build Command:** `npm install`
   * **Start Command:** `node index.js`
   * **Environment:** Node
6. Click **Deploy**!

---

## 📦 Sample API Response

```json
{
  "image": "https://picsum.photos/800/600"
}
```

---

## 📬 Endpoints

| Method | Endpoint            | Description                |
| ------ | ------------------- | -------------------------- |
| GET    | `/api/image/random` | Returns a random image URL |

---

## 👨‍💻 Author

Made with ❤️ by Ayush Kohre

---
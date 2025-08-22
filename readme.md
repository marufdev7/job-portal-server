# 🖥️ Job Portal Server

This is the **backend API** for the [Job Portal Client](https://job-portal-c4aa6.web.app/).  
It provides **secure authentication**, **job postings management**, and **user data handling** using **Express.js** and **MongoDB**.

🔗 **Live Server:** [https://job-portal-server-ten-pi.vercel.app/](https://job-portal-server-ten-pi.vercel.app/)

---

## 🛠️ Technologies Used

- ⚡️ **Node.js** — JavaScript runtime  
- 🚂 **Express.js** — Web framework for Node.js  
- 🗄️ **MongoDB** — NoSQL database  
- 🌐 **CORS** — Handle cross-origin requests  
- 🔐 **JWT (jsonwebtoken)** — Token-based authentication  
- 🍪 **cookie-parser** — Parse and manage cookies  
- 🔑 **dotenv** — Manage environment variables  

---

## 🚀 Features

- 🔹 RESTful API endpoints for jobs and users  
- 🔹 Secure authentication with **JWT (HTTP-only cookie)**  
- 🔹 MongoDB integration for persistent storage  
- 🔹 Protected routes for logged-in users  
- 🔹 Easy deployment on **Vercel**  

---

<!-- ## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/job-portal-server.git
cd job-portal-server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run locally:

```bash
npm start
```

Server will run at: `http://localhost:3000`

--- -->

## 🔑 API Endpoints

### Auth
- `POST /jwt` — Generate JWT and set in HTTP-only cookie  
- `POST /logout` — Clear authentication cookie  

### Jobs
- `GET /jobs` — Get all job listings  
- `GET /jobs/:id` — Get single job by ID  
- `POST /jobs` — Create new job (protected)  
- `PUT /jobs/:id` — Update job details (protected)  
- `DELETE /jobs/:id` — Delete job (protected)  


---

## 🌐 Deployment

This backend is deployed on **Vercel**.  
Frontend is deployed on **Firebase**: [Job Portal Client](https://job-portal-c4aa6.web.app/)

---

## 📜 License

This project is licensed under the **MIT License**.

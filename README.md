# �️ TrustLayer Backend

TrustLayer is a cybersecurity-focused backend service designed to detect potentially suspicious or scam-like messages using risk scoring and analysis. 

The backend provides authentication, protected APIs, and a text scanning engine that analyzes messages and returns a risk score indicating whether the content is safe, suspicious, or potentially harmful. This robust architecture enables seamless integration with frontend applications that require real-time text analysis for user safety.

---

## ✨ Key Features
- **User Registration & Login**: Secure user authentication.
- **JWT Authentication**: Protected API routes using JSON Web Tokens.
- **Text Scam Detection API**: Analyzes messages for potential scams.
- **Risk Scoring System**: Categorizes text as safe, suspicious, or potentially harmful.
- **MongoDB Storage**: Securely stores scan histories and user data.
- **Modular Architecture**: Clean MVC-style backend design.
- **REST API**: Fully ready for frontend integration.

---

## 🛠️ Tech Stack
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Fast, unopinionated web framework for routing.
- **MongoDB**: NoSQL database for flexible data storage.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **JSON Web Tokens (JWT)**: Secure user session management.
- **dotenv**: Environment variable management.
- **CORS**: Cross-Origin Resource Sharing for API access.

---

## � Project Architecture / Folder Structure
The project follows a modular Model-View-Controller (MVC) architecture for scalability and maintainability:

```text
trustlayer-backend/
├── controllers/
│   ├── authController.js       # Handles user authentication logic
│   └── scanController.js       # Handles text scanning and risk scoring
├── middlewares/
│   └── authMiddleware.js       # Verifies JWTs for protected routes
├── models/
│   ├── User.js                 # Mongoose schema for users
│   └── Scan.js                 # Mongoose schema for text scans
├── routes/
│   ├── authRoutes.js           # API routes for registration and login
│   └── scanRoutes.js           # API routes for message analysis
├── services/
│   └── trustAnalyzer.js        # Core engine for scam detection and risk calculation
├── .env                        # Environment variables (not tracked in Git)
├── package.json                # Project dependencies and scripts
└── server.js                   # Entry point of the application
```

---

## 🚀 Installation Guide

### Prerequisites
Make sure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Running locally or via MongoDB Atlas)

### Steps
1. **Clone the repository**
   ```bash
   git clone https://github.com/shimantranjan/trustlayer-backend.git
   cd trustlayer-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

---

## ⚙️ Environment Variables Setup
Create a `.env` file in the root directory of the project and add the following required variables:

```env
# Server Port (Optional, defaults to 3000)
PORT=3000

# JSON Web Token Secret (Replace with a strong secret key)
JWT_SECRET=your_secret_key

# MongoDB Connection String
MONGO_URI=mongodb://127.0.0.1:27017/trustlayer
```

---

## 🏃 Running the Backend

Start the local MongoDB service if it is not already running. Then, start the backend server:

**For Development (with Nodemon):**
```bash
npm run dev
```

**For Production:**
```bash
npm start
```

The server should now be running on `http://localhost:3000`.

---

## � API Documentation

### Base URL
`http://localhost:3000/api`

### Endpoints

| Method | Endpoint | Description | Protected |
|---|---|---|---|
| `POST` | `/auth/register` | Register a new user | No |
| `POST` | `/auth/login` | Login and receive a JWT | No |
| `POST` | `/scan/analyze` | Analyze text for potential scams | Yes |

---

## 💡 Example Requests and Responses

### 1. Analyze Message (Scan API)
**Endpoint:** `POST /api/scan/analyze`

**Request Headers:**
```http
Authorization: Bearer <your_jwt_token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "text": "You won a lottery click here"
}
```

**Response (200 OK):**
```json
{
  "text": "You won a lottery click here",
  "riskScore": 36,
  "level": "Suspicious"
}
```

---

## 🔐 Authentication Explanation (JWT)
This backend uses **JSON Web Tokens (JWT)** for securing endpoints.
1. When a user logs in via `/api/auth/login`, the server verifies the credentials and returns a signed JWT.
2. The frontend must store this token (e.g., in localStorage or secure cookies).
3. To access protected routes like `/api/scan/analyze`, include the token in the `Authorization` header of the HTTP request:
   `Authorization: Bearer <your_jwt_token>`
4. The `authMiddleware.js` intercepts the request, verifies the token validity, and grants access if successful.

---

## 🔌 Integration Guide for Frontend Developers
To integrate this backend with a frontend (React, Vue, etc.):
1. Form a POST request to `/api/auth/login` with the user credentials to authenticate.
2. Store the returned JWT token securely.
3. For text analysis, attach the JWT token as a Bearer token in the `Authorization` header of AXIOS or Fetch calls.
4. Call `POST /api/scan/analyze` with the user's text input inside a JSON body.
5. Use the returned `riskScore` and `level` (e.g., `Safe`, `Suspicious`) to dynamically update the UI (e.g., show a warning banner or block access).

---

## 🔮 Future Improvements
- **Advanced Scam Detection Engine**: Integrating Natural Language Processing (NLP) or Machine Learning models to enhance accuracy.
- **URL Scanning**: Adding the capability to extract and verify URLs against known phishing databases.
- **Detailed Scan History**: Extending the database schema to allow users to fetch and review their past analysis interactions.
- **Rate Limiting**: Implementing API rate limits to prevent abuse and brute-force attacks.

---

## 🤝 Contributing Guidelines
Contributions make the open-source community an amazing place to learn, inspire, and create.
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author
**TrustLayer Team**
- GitHub: [shimantranjan](https://github.com/shimantranjan)

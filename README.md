🚀 TrustLayer Backend

AI-Assisted Scam Detection & Risk Intelligence API

A high-performance backend system for detecting fraudulent text and suspicious domains using rule-based intelligence, cryptographic hashing, and persistent analytics.

🧭 Table of Contents

✨ Highlights

🏗️ Architecture

⚙️ Tech Stack

🚀 Getting Started

📡 API Reference

🧠 Detection Engine

📊 Data Model

🔐 Security Considerations

📈 Performance & Scalability

🛣️ Roadmap

👨‍💻 Author

📄 License

✨ Highlights

⚡ Low-latency REST API built with Express.js

🧠 Rule-based AI detection engine (extensible to ML/NLP)

🔐 SHA-256 hashing to ensure idempotency & deduplication

📊 Built-in analytics endpoints (history + stats)

🗄️ MongoDB persistence layer with schema validation

🧩 Designed as a plug-and-play backend for trust systems

🏗️ Architecture
Client (Frontend / Extension / App)
        │
        ▼
   Express API Layer
        │
        ├── Scam Detection Engine (Keyword + Domain Heuristics)
        ├── Risk Scoring Module
        ├── Hash Generator (SHA-256)
        │
        ▼
   MongoDB (Persistence Layer)
        │
        ├── Scan History
        └── Aggregated Stats
⚙️ Tech Stack
Layer	Technology
Runtime	Node.js
Framework	Express.js
Database	MongoDB + Mongoose
Security	Node Crypto (SHA-256)
Middleware	CORS, Body Parser
🚀 Getting Started
1. Clone Repository
git clone https://github.com/your-username/trustlayer-backend.git
cd trustlayer-backend
2. Install Dependencies
npm install
3. Configure Environment

Create a .env file:

PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/trustlayer
4. Start Server
node app.js

Server runs at: http://localhost:3000

📡 API Reference
🔹 Health Check
GET /
🔹 Analyze Input
POST /analyze
Request
{
  "text": "Your bank account is blocked, verify OTP now",
  "domain": "secure-bank-alert.com"
}
Response
{
  "riskScore": 82,
  "level": "HIGH",
  "message": "🚨 Scam detected",
  "hash": "a1b2c3..."
}
🔹 Scan History
GET /history
🔹 Statistics
GET /stats
{
  "totalScans": 120,
  "highRiskScans": 47
}
🧠 Detection Engine
1. Keyword-Based Heuristics

Weighted scoring based on high-risk tokens:

Keyword Type	Examples
Urgency	urgent, immediately
Financial	bank, OTP, account
Reward Trap	lottery, win, prize
2. Domain Heuristics

Suspicious TLDs

Phishing-like patterns

Mismatch with known trusted domains

3. Risk Scoring Logic
Final Score = Keyword Score + Domain Risk Weight
Score	Classification
0–40	LOW
41–70	MEDIUM
71+	HIGH
📊 Data Model
Scan Schema
{
  text: String,
  domain: String,
  riskScore: Number,
  level: String,
  hash: String,
  createdAt: Date
}
🔐 Security Considerations

✔️ SHA-256 hashing ensures idempotent requests

✔️ Prevents duplicate scans

⚠️ Future:

Rate limiting

JWT authentication

Input sanitization (XSS/Injection)

📈 Performance & Scalability

Stateless API → horizontally scalable

MongoDB indexing → optimized queries

Hash-based deduplication → reduces redundant computation

Future Enhancements:

Redis caching layer

Queue-based processing (BullMQ / Kafka)

Microservice decomposition

🛣️ Roadmap
🔜 Short-Term

 Add JWT authentication

 Improve keyword weighting system

 Dockerize backend

🚀 Mid-Term

 Integrate ML/NLP scam detection model

 Real-time phishing database integration

 Admin dashboard (React)

🌍 Long-Term

 Deploy as SaaS API

 Browser extension integration

 Enterprise-grade threat intelligence system

🧪 Example Use Cases

🔌 Browser Extension Backend

🛡️ Scam Detection API for FinTech Apps

🧠 AI Trust Layer in Messaging Platforms

🏆 Hackathon MVP for Cybersecurity

👨‍💻 Author

Shimant 
Backend Engineer | AI Systems Builder

Focused on building scalable backend systems and intelligent APIs.

📄 License

MIT License © 2026

⭐ Final Positioning

TrustLayer Backend is not just a project — it’s a foundational trust infrastructure that can evolve into:

A real-time fraud detection system

A cybersecurity SaaS product

An AI-powered trust layer for the internet

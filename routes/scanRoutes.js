const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const { analyzeText } = require("../controllers/scanController");

// Analyze text for scam / trust risk
router.post("/analyze", authMiddleware, analyzeText);

module.exports = router;
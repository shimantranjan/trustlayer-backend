const mongoose = require("mongoose");

const scanSchema = new mongoose.Schema({
    text: String,
    domain: String,
    riskScore: Number,
    level: String,
    hash: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Scan", scanSchema);
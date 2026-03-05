const Scan = require("../models/Scan");

exports.analyzeText = async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({ error: "Text required" });
        }

        const riskScore = Math.floor(Math.random() * 100);

        const level =
            riskScore < 30
                ? "Safe"
                : riskScore < 70
                    ? "Suspicious"
                    : "High Risk";

        const scan = await Scan.create({
            text,
            riskScore,
            level
        });

        res.json(scan);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
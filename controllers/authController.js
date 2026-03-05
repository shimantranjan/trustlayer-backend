const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            email,
            password: hashedPassword
        });

        const userObj = user.toObject();
        delete userObj.password;
        delete userObj.__v;

        res.json({
            success: true,
            message: "User registered",
            user: userObj
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // generate token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        // remove password
        const userObj = user.toObject();
        delete userObj.password;
        delete userObj.__v;

        res.json({
            success: true,
            message: "Login successful",
            token,
            user: userObj
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
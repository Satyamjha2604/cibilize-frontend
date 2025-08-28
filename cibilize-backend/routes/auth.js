// file: cibilize-backend/routes/auth.js

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const auth = require("../middleware/auth"); // <-- Add this line

const prisma = new PrismaClient();

// @route   POST /api/auth/signup
// @desc    Register a new user
// @access  Public
router.post("/signup", async (req, res) => {
  const { name, mobile, aadhaar, pan, username, password, email } = req.body;

  try {
    let user = await prisma.user.findUnique({ where: { username } });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = await prisma.user.create({
      data: {
        name,
        mobile,
        aadhaar,
        pan,
        username,
        password: hashedPassword,
        email,
      },
    });

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST /api/auth/login
// @desc    Authenticate user and get token
// @access  Public
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   GET /api/auth/profile
// @desc    Get logged-in user's profile
// @access  Private
router.get("/profile", auth, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        mobile: true,
        aadhaar: true,
        pan: true,
        username: true,
      },
    });
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

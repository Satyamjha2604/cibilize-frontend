const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const prisma = new PrismaClient();

// Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define all routes before starting the server
app.use("/api/auth", require("./routes/auth"));
app.use("/api/expenses", require("./routes/expenses"));

// Simple test route
app.get("/", (req, res) => {
  res.send("Cibilize backend is running!");
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

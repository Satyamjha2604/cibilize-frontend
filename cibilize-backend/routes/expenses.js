// file: cibilize-backend/routes/expenses.js

const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const auth = require("../middleware/auth");

const prisma = new PrismaClient();

// @route   GET /api/expenses
// @desc    Get all expenses for the authenticated user
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const expenses = await prisma.expense.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: "desc" },
    });
    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST /api/expenses
// @desc    Add a new expense for the authenticated user
// @access  Private
router.post("/", auth, async (req, res) => {
  const { description, amount, category, date } = req.body;
  try {
    const newExpense = await prisma.expense.create({
      data: {
        description,
        amount: parseFloat(amount),
        category,
        date,
        userId: req.user.id,
      },
    });
    res.json(newExpense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE /api/expenses/:id
// @desc    Delete a specific expense for the authenticated user
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const expense = await prisma.expense.findUnique({
      where: { id: parseInt(req.params.id) },
    });

    if (!expense) {
      return res.status(404).json({ msg: "Expense not found" });
    }

    if (expense.userId !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await prisma.expense.delete({
      where: { id: parseInt(req.params.id) },
    });

    res.json({ msg: "Expense deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

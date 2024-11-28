const express = require("express");
const { register, login, logout } = require("../controllers/authController");
const { authenticateToken } = require("../middlewares/authMiddleware");

const router = express.Router();

// Authentication routes
router.post("/register", register);
router.post("/login", login);
router.post("/logout", authenticateToken, logout); 

module.exports = router;

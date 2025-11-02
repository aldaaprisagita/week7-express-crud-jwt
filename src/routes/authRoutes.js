const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authenticateToken = require("../middleware/authMiddleware");

// Route register dan login
router.post("/register", authController.register);
router.post("/login", authController.login);

// Route tambahan: profile (improvisasi)
router.get("/profile", authenticateToken, (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    message: `Selamat datang, ${req.user.username}!`,
  });
});

// ekspor router di paling bawah
module.exports = router;

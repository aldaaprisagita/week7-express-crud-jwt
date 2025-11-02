const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");

// hanya user login yang boleh akses
router.get("/", authenticateToken, (req, res) => {
  res.json({ message: `Halo ${req.user.username}, ini data mobil.` });
});

module.exports = router;

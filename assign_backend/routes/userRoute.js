const express = require("express");
const { handleUserLogin } = require("../controllers/userController");
const router = express.Router();
router.post("/login", handleUserLogin);

module.exports = router;

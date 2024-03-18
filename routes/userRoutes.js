const express = require("express");
const { homePage, createUser } = require("../controllers/userController");
const router = express.Router();

router.get("/", homePage)

router.post("/create", createUser)

module.exports = router;
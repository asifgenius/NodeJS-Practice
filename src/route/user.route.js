const express = require('express')
const router = express.Router();
const userController = require("../user/user.conreoller")
router.get("/", userController.userList);
module.exports = router
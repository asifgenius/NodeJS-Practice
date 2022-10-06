const express = require('express')
const router = express.Router();
const userController = require("../user/user.conreoller")
router.get("/user/:id?", userController.userDetail);

module.exports = router
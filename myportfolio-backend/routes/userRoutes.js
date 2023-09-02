const express = require("express")
const router = express.Router()
const {loginUser, getMe} = require("../controllers/userController")

router.post("/login",loginUser)
router.get("/getMe", getMe)

module.exports = router

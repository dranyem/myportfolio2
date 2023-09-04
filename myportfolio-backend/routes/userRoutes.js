const express = require("express")
const router = express.Router()
const {loginUser, getMe} = require("../controllers/userController")
const {protect} = require("../middleware/authMiddleware")


router.post("/login",loginUser)
router.get("/getMe", protect, getMe)

module.exports = router

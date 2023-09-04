const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")

const loginUser = asyncHandler(async (req, res) => {
    const {username, password} = req.body

    if(username==process.env.USER_NAME && password==process.env.PASSWORD){
        res.status(200)
        res.json({
            username,
            token: generateToken(username)})
    }else {
        res.status(400)
        throw new Error("Invalid Credentials")
    }
    
})


const getMe = (req, res) => {
    res.json({message: "get me",
            username:req.user})
}



//genereate jwt
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: "30d"
    })
}

module.exports = {loginUser, getMe}
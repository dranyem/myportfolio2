const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")


const protect = asyncHandler(async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token = req.headers.authorization.split(" ")[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = decoded.id
            next()
        } catch(err) {
            res.status(401)
            throw new Error("Not authorized")
        }
    }

    if(!token){
        res.status(401)
        throw new Error("No Token")
    }
})

module.exports = {protect}
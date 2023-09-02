const loginUser = (req, res) => {
    res.json({message: "Login user"})
}


const getMe = (req, res) => {
    res.json({message: "get me"})
}

module.exports = {loginUser, getMe}
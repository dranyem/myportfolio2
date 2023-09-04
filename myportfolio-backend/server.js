const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const cors = require("cors")

const port = process.env.PORT || 3001



connectDB();

const app = express()

app.use(cors({origin:true}))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/images",express.static('images'))


app.use("/projects", require("./routes/projectRoutes"))
app.use("/user", require("./routes/userRoutes"))

app.use(errorHandler)

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})
const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const port = process.env.PORT || 3001

connectDB();

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use("/projects", require("./routes/projectRoutes"))

app.use(errorHandler)

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})
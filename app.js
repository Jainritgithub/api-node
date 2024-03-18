require('dotenv').config({path: "./.env"})

const express = require("express");
const app = express();

//db connection
require('./models/dbconfig').dbConnection()

//logger
const logger = require("morgan")
app.use(logger("tiny"))

// body parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes
const router = require('./routes/userRoutes')
app.use('/', router)

app.all("*", (req,res,next)=>{
    res.status(404).json({success: false, message: `${req.url} Route not found`})
})


//server
app.listen(process.env.PORT, ()=>{
    console.log(`This server is running on PORT ${process.env.PORT}`)
})
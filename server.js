const express = require("express");
const connectDB = require("./config/db");
const sendEmail = require("./utils/email.service")
const app = express()
require("dotenv").config()

const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("Server is Live")
})

app.use("/api/student", require("./routes/student.route"))
//Database Connection
connectDB();

// send email
// sendEmail("njkandalgon@gmail.com", "gaytri");
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}`);
})

// EMAIL SEND ✔
// Socket IO    ✔
// Rozer Pay
// Google Auth
// Railway Hosting 
// AWS S3
// Testing + Devops
// Docker
// Github Action 
// Cron Job
// Redis
// Multer

// Python + Streamlite




// npm install socket.io  //server side package
// npm install socket.io-client //client side package

// emit('event name', payload)
// on('event name', callback)

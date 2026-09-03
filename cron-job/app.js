const express = require('express');
const cron = require('node-cron');  
const app = express();
const sendEmail = require("../utils/email.service")
app.use(express.json());
const users = [
    {
        email: "njkandalgon@gmail.com",
        name:"Nikhil Jadhav",
        dob: "2000-09-03"
    },{
        email: "gaytrifatle2405@gmail.com",
        name:"Gaytri Fatle",
        dob: "2000-05-24"
    },{
        email:"kaleneha448@gmail.com",
        name:"Kale Neha",
        dob: "2000-12-15"
    }
]

app.get("/", (req, res) => {
    res.send("Hello, World!");
})

cron.schedule('0 0 * * * *', () => {
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth() + 1; // Months are zero-based
    users.forEach(user => {
        const [year, month, day] = user.dob.split('-').map(Number);
        if (day === todayDate && month === todayMonth) {
            // sendEmail(user.email, user.name);
            console.log("Happy Birthday >>>")
            console.log(`Sending birthday email to ${user.name} at ${user.email}`);

        }
    });
});

cron.schedule('0 9 * * *', () => {
    console.log('Running a task every day at 9 AM');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})


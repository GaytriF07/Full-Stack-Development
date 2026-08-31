const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
})

const sendEmail = async (email, name) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Test Email",
        text:"Welcome to CCA"
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Email Sent :- " + info.response)
        }
    })
}

module.exports = sendEmail;
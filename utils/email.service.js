const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
})


const sendEmail = async (email, name) => {
console.log("Email", process.env.EMAIL)
console.log("Pass", process.env.PASS)
const mailOptions = {
  from: process.env.EMAIL,
  to: email,
  subject: "🎂 Happy Birthday!",
  text: "Wishing you a very Happy Birthday! 🎉",
  html: `
    <!DOCTYPE html>
    <html>
    <body style="margin:0;padding:0;background:#fff4f8;font-family:Arial,sans-serif;">

      <table width="100%" cellpadding="0" cellspacing="0" border="0"
        style="background:#fff4f8;padding:30px 10px;">
        <tr>
          <td align="center">

            <table width="600" cellpadding="0" cellspacing="0" border="0"
              style="max-width:600px;width:100%;background:#ffffff;border-radius:20px;overflow:hidden;">

              <!-- Header -->
              <tr>
                <td align="center"
                  style="background:#ff6b9a;padding:40px 20px;">
                  
                  <div style="font-size:50px;">🎂</div>

                  <h1 style="margin:10px 0;color:#ffffff;font-size:36px;">
                    Happy Birthday!
                  </h1>

                  <p style="margin:0;color:#ffe8f0;font-size:16px;">
                    Wishing you a wonderful day filled with happiness!
                  </p>

                </td>
              </tr>

              <!-- Greeting -->
              <tr>
                <td align="center" style="padding:35px 40px 15px;">

                  <p style="font-size:18px;color:#555;margin:0 0 15px;">
                    Dear <strong style="color:#ff4f87;">${name || "Friend"}</strong>,
                  </p>

                  <p style="font-size:16px;color:#555;line-height:26px;margin:0;">
                    Wishing you a very Happy Birthday! 🎉
                    May your special day be filled with laughter,
                    love, wonderful memories, and lots of happiness.
                  </p>

                </td>
              </tr>

              <!-- Birthday Message -->
              <tr>
                <td align="center" style="padding:20px 40px;">

                  <table width="100%" cellpadding="0" cellspacing="0" border="0"
                    style="background:#fff0f5;border-radius:15px;">
                    <tr>
                      <td align="center" style="padding:25px;">

                        <div style="font-size:35px;">
                          🎈 🎁 🥳
                        </div>

                        <p style="margin:12px 0 5px;color:#d9366e;
                          font-size:21px;font-weight:bold;">
                          Make a Wish! ✨
                        </p>

                        <p style="margin:0;color:#777;font-size:14px;">
                          May all your dreams come true.
                        </p>

                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Closing -->
              <tr>
                <td align="center" style="padding:15px 40px 35px;">

                  <p style="font-size:16px;color:#555;line-height:26px;">
                    Here's to another amazing year of adventures,
                    success, laughter, and beautiful memories!
                  </p>

                  <p style="margin-top:25px;color:#d9366e;font-size:16px;font-weight:bold;">
                    Have an amazing birthday! ❤️
                  </p>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td align="center"
                  style="background:#fff0f5;padding:20px;color:#888;font-size:13px;">
                  With lots of love ❤️<br>
                  CCA Team
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>

    </body>
    </html>
  `
};

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Email Sent :- " + info.response)
        }
    })
}

module.exports = sendEmail;
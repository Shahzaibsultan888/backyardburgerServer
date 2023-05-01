const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Create a Nodemailer transporter object
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

// Define a route to handle the form submission
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Create the email message
  const mailOptions = {
    from: 'youremail@gmail.com',
    to: 'shahzaibsultan888@gmail.com',
    subject: `New message from ${name}`,
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log(`Email sent: ${info.response}`);
      res.send('Email sent successfully');
    }
  });
});

module.exports = router;

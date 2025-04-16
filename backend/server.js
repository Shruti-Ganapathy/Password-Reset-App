const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Dummy in-memory DB
let users = [
  {
    email: 'user@example.com',
    password: 'hashedpassword',
    resetToken: '',
    resetExpiry: ''
  }
];

// Create test account and transporter
let transporter;

nodemailer.createTestAccount().then(testAccount => {
  transporter = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });

  console.log("✅ Ethereal test account created");
}).catch(err => {
  console.error("❌ Failed to create Ethereal account", err);
});

// Forgot Password endpoint
app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const token = uuidv4();
  const expiry = Date.now() + 3600000; // 1 hour

  user.resetToken = token;
  user.resetExpiry = expiry;

  const resetLink = `http://localhost:3000/reset-password/${token}`;

  try {
    const info = await transporter.sendMail({
      from: '"Support Team" <support@example.com>',
      to: user.email,
      subject: 'Password Reset',
      text: `Click the following link to reset your password: ${resetLink}`,
      html: `<p>Click the following link to reset your password:</p><a href="${resetLink}">${resetLink}</a>`
    });

    const previewURL = nodemailer.getTestMessageUrl(info);
    console.log('📩 Preview URL:', previewURL);

    return res.status(200).json({
      message: 'Password reset email sent!',
      previewURL
    });

  } catch (err) {
    console.error('❌ Email error:', err);
    return res.status(500).json({ message: 'Error sending email' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
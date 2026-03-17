const nodemailer = require('nodemailer');

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

const sendEmail = async ({ to, subject, html, replyTo }) => {
  const transporter = createTransporter();
  const info = await transporter.sendMail({
    from: `"${process.env.EMAIL_FROM_NAME || 'SageSoul by Sneha K'}" <${process.env.EMAIL_USER}>`,
    to,
    replyTo: replyTo || process.env.EMAIL_USER,
    subject,
    html
  });
  return info;
};

module.exports = { sendEmail };

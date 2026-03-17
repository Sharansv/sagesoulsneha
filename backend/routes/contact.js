const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { sendEmail } = require('../config/mailer');

const contactValidation = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 2000 })
];

router.post('/', contactValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message } = req.body;

  try {
    // Notify Sneha
    await sendEmail({
      to: process.env.NOTIFY_EMAIL,
      subject: `💜 New Contact Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #1a0a2e; color: #e8d5ff; padding: 40px; border-radius: 12px;">
          <h2 style="color: #c084fc; border-bottom: 1px solid #7c3aed; padding-bottom: 16px;">New Contact Message</h2>
          <p><strong style="color: #a78bfa;">From:</strong> ${name}</p>
          <p><strong style="color: #a78bfa;">Email:</strong> <a href="mailto:${email}" style="color: #c084fc;">${email}</a></p>
          <div style="background: #2d1b4e; padding: 20px; border-radius: 8px; margin-top: 16px; border-left: 4px solid #7c3aed;">
            <p style="margin: 0; line-height: 1.7;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color: #7c3aed; font-size: 12px; margin-top: 24px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `
    });

    // Auto-reply to user
    await sendEmail({
      to: email,
      subject: `💜 Thank you for reaching out, ${name.split(' ')[0]}!`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #1a0a2e; color: #e8d5ff; padding: 40px; border-radius: 12px;">
          <h2 style="color: #c084fc;">You've taken the first step 💜</h2>
          <p>Dear ${name.split(' ')[0]},</p>
          <p>Thank you for reaching out. I've received your message and I'll respond within 24–48 hours.</p>
          <p>Remember — the fact that you reached out means your healing has already begun. You are seen, you are heard, and you are not alone.</p>
          <blockquote style="border-left: 3px solid #7c3aed; padding-left: 16px; font-style: italic; color: #a78bfa;">
            "From Nothing to Everything — Your Life Can Shift Too."
          </blockquote>
          <p>With love and light,</p>
          <p><strong style="color: #c084fc;">Sneha K</strong><br>Certified Life Coach | SageSoul</p>
          <hr style="border-color: #2d1b4e; margin: 24px 0;">
          <p style="font-size: 12px; color: #6b21a8;">📧 sagesoulsneha@gmail.com | 📞 9353620629</p>
        </div>
      `
    });

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact email error:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again or contact directly.' });
  }
});

module.exports = router;

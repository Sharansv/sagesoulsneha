const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { sendEmail } = require('../config/mailer');

const bookingValidation = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
  body('age').isInt({ min: 10, max: 100 }).withMessage('Valid age is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required').isLength({ max: 20 }),
  body('focusArea').trim().notEmpty().withMessage('Focus area is required'),
  body('howFound').trim().notEmpty().withMessage('Please tell us how you found us')
];

router.post('/', bookingValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, age, email, phone, focusArea, howFound, message } = req.body;

  try {
    // Notify Sneha
    await sendEmail({
      to: process.env.NOTIFY_EMAIL,
      subject: `🌟 New Clarity Call Booking – ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #1a0a2e; color: #e8d5ff; padding: 40px; border-radius: 12px;">
          <h2 style="color: #c084fc; border-bottom: 1px solid #7c3aed; padding-bottom: 16px;">🌟 New Clarity Call Booking</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #a78bfa; width: 140px;"><strong>Name:</strong></td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #a78bfa;"><strong>Age:</strong></td><td>${age}</td></tr>
            <tr><td style="padding: 8px 0; color: #a78bfa;"><strong>Email:</strong></td><td><a href="mailto:${email}" style="color: #c084fc;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #a78bfa;"><strong>Phone:</strong></td><td><a href="tel:${phone}" style="color: #c084fc;">${phone}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #a78bfa;"><strong>Focus Area:</strong></td><td>${focusArea}</td></tr>
            <tr><td style="padding: 8px 0; color: #a78bfa;"><strong>How Found:</strong></td><td>${howFound}</td></tr>
          </table>
          ${message ? `
          <div style="background: #2d1b4e; padding: 20px; border-radius: 8px; margin-top: 16px; border-left: 4px solid #7c3aed;">
            <p style="color: #a78bfa; margin: 0 0 8px;"><strong>Additional Message:</strong></p>
            <p style="margin: 0; line-height: 1.7;">${message.replace(/\n/g, '<br>')}</p>
          </div>` : ''}
          <p style="color: #7c3aed; font-size: 12px; margin-top: 24px;">Reach out to confirm the call time.</p>
        </div>
      `
    });

    // Auto-reply to user
    await sendEmail({
      to: email,
      subject: `💜 Your FREE Clarity Call is Booked, ${name.split(' ')[0]}!`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #1a0a2e; color: #e8d5ff; padding: 40px; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #c084fc; font-size: 28px; margin: 0;">Your Healing Journey</h1>
            <p style="color: #a78bfa; margin: 8px 0 0;">begins here 🌸</p>
          </div>
          <p>Dear ${name.split(' ')[0]},</p>
          <p>Your FREE 40-Minute Clarity Call request has been received! I am so proud of you for taking this step.</p>
          <div style="background: #2d1b4e; padding: 24px; border-radius: 12px; margin: 24px 0; text-align: center;">
            <p style="color: #c084fc; font-size: 18px; margin: 0 0 8px;"><strong>What's Next?</strong></p>
            <p style="margin: 0; color: #d8b4fe;">I will personally reach out within <strong>24 hours</strong> to confirm your call time.</p>
          </div>
          <p>In our session, you'll:</p>
          <ul style="color: #d8b4fe; line-height: 2;">
            <li>Share your current struggle in a safe, judgment-free space</li>
            <li>Find clarity on where and how to begin your healing</li>
            <li>Feel heard — perhaps for the first time in a long while</li>
          </ul>
          <blockquote style="border-left: 3px solid #7c3aed; padding-left: 16px; font-style: italic; color: #a78bfa; margin: 24px 0;">
            "It takes courage to ask for help. You've already shown that courage."
          </blockquote>
          <p>With love,</p>
          <p><strong style="color: #c084fc;">Sneha K</strong><br>Certified Life Coach | SageSoul</p>
          <hr style="border-color: #2d1b4e; margin: 24px 0;">
          <p style="font-size: 12px; color: #6b21a8;">📧 sagesoulsneha@gmail.com | 📞 9353620629<br>
          Instagram: <a href="https://www.instagram.com/sneha_sagesoul" style="color: #7c3aed;">@sneha_sagesoul</a></p>
        </div>
      `
    });

    res.json({ success: true, message: 'Clarity call booked successfully!' });
  } catch (error) {
    console.error('Booking email error:', error);
    res.status(500).json({ error: 'Failed to book. Please contact directly at sagesoulsneha@gmail.com' });
  }
});

module.exports = router;

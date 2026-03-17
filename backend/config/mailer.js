const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ to, subject, html, replyTo }) => {
  const { data, error } = await resend.emails.send({
    from: `${process.env.EMAIL_FROM_NAME || 'SageSoul by Sneha K'} <${process.env.EMAIL_FROM || 'onboarding@resend.dev'}>`,
    to,
    replyTo: replyTo || process.env.NOTIFY_EMAIL,
    subject,
    html
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

module.exports = { sendEmail };

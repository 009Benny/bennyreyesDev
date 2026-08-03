import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const TO_EMAIL = '009bennyreyes@gmail.com';
const FROM_EMAIL = 'Contact Form <hello@contact.bennyreyes.dev>';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'Server is not configured to send email.' });
  }

  const { name, email, subject, message, company } = (req.body ?? {}) as Record<string, string>;

  // Honeypot: bots fill hidden fields. If "company" has a value, silently accept.
  if (company) {
    return res.status(200).json({ ok: true });
  }

  // Server-side validation (never trust the client alone).
  const errors: string[] = [];
  if (!name || name.trim().length < 2) errors.push('name');
  if (!email || !emailRegex.test(email)) errors.push('email');
  if (!message || message.trim().length < 10) errors.push('message');
  if (errors.length > 0) {
    return res.status(400).json({ error: 'Invalid input', fields: errors });
  }

  const safeSubject = subject?.trim() || 'New contact form message';

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${safeSubject}`,
      text:
        `New message from your website contact form\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Subject: ${safeSubject}\n\n` +
        `Message:\n${message}\n`,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(502).json({ error: 'Could not send the message. Please try again later.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Unexpected error sending email:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
}

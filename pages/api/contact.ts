import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../utils/ses-utils';
import emailTemplate from '../../templates/email-template.html';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const processContactForm = (formData: FormData) => {
  const { name, email, subject, message } = formData;

  const emailContent = emailTemplate.format(name, email, subject, message);

  const params = {
    Source: `${process.env.SENDER_EMAIL}`,
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Subject: { Data: subject },
      Body: { Html: { Data: emailContent } },
    },
  };

  return sendEmail(params);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const formData: FormData = JSON.parse(req.body);
      await processContactForm(formData);
      res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ message: 'Error processing contact form.' });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

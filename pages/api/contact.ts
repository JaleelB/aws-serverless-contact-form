import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../utils/ses-utils';
import {getEmailTemplate} from '../../templates/email-template';
import fs from 'fs';
import path from 'path';

interface FormData {
  email: string;
}

const getEmailContent = (): string => {
    const filePath = path.join(process.cwd(), '../../templates/email-content-template.txt');
    return fs.readFileSync(filePath, 'utf-8');
};

const processContactForm = (formData: FormData) => {
    
    const { email } = formData;    
    const subject = "Demystifying AI for End-Users: Everything You Need to Know to Harness its Potential";
    const date = new Date().toLocaleDateString();
    const content = getEmailContent()
    const title = 'Unlocking the Potential of Artificial Intelligence'

    const emailContent = getEmailTemplate(date, content, title, email);

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

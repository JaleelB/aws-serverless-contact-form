# AWS Serverless Contact Form
A simple contact form implementation using Next.js, Amazon Simple Email Service (SES), and AWS SDK. This project demonstrates how to build a serverless contact form for your website that sends emails to the recipient.

## Features
- Serverless contact form using Next.js API routes
- Integration with Amazon SES for email sending
- Basic form validation and error handling
- Email content stored in a text file

## Prerequisites
- Node.js v12.x or later
- npm v6.x or later
- An AWS account with access to Amazon SES

## Getting Started
1. Clone the repository:
    `https://github.com/JaleelB/aws-serverless-contact-form.git`

2. Navigate to the project directory:
    `cd aws-serverless-contact-form`

3. Install the dependencies:
    `yarn install`

4. Set up AWS credentials:
    - Create an IAM user with the necessary permissions for Amazon SES.
    - Configure your AWS credentials by setting the environment variables AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY or by using the [AWS CLI](https://aws.amazon.com/cli/).

5. Verify the sender and recipient email addresses in Amazon SES.

6. Set the environment variables for the sender email address and AWS region in the .env.local file:
    `
        SENDER_EMAIL=your_sender_email@example.com
        AWS_REGION=your_aws_region
    `

7. Start the development server:
    `yarn dev`

8. Open your browser and navigate to http://localhost:3000 to see the contact form in action.

## Deploying to Production

Before deploying to production, make sure you have requested production access for your Amazon SES account to send emails to any recipient.

To deploy the application to a production environment, you can use any hosting service that supports Next.js, such as [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
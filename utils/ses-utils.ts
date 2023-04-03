import AWS from 'aws-sdk';


// Set the AWS region
AWS.config.update({
  region: `${process.env.AWS_REGION}`,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

interface EmailParams {
  Source: string;
  Destination: {
    ToAddresses: string[];
  };
  Message: {
    Subject: { Data: string };
    Body: { Html: { Data: string } };
  };
}

const sendEmail = async (params: EmailParams): Promise<void> => {
  return new Promise((resolve, reject) => {
    ses.sendEmail(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export { sendEmail };

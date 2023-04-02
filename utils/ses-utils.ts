import AWS from 'aws-sdk';

const SES = new AWS.SES();

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
    SES.sendEmail(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export { sendEmail };

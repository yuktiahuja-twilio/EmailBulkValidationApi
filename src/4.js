

const client = require('@sendgrid/client');
require('dotenv').config();
client.setApiKey(process.env.SENDGRID_API_KEY);

const request = {
  url: `/v3/validations/email/jobs/01HN16FEFV9SDQQ2AYVX65VPKX`,
  method: 'GET'
}

client.request(request)
  .then(([response, body]) => {
    console.log(response.statusCode);
    console.log(response.body);
  })
  .catch(error => {
    console.error(error);
  });


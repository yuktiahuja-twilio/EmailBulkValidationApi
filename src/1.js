

const client = require('@sendgrid/client');
require('dotenv').config();
client.setApiKey(process.env.SENDGRID_API_KEY);

const data = {
	"file_type": "csv"
};

const request = {
  url: `/v3/validations/email/jobs`,
  method: 'PUT',
  body: data
}

client.request(request)
  .then(([response, body]) => {
    console.log(response.statusCode);
    console.log(response.body);
  })
  .catch(error => {
    console.error(error);
  });


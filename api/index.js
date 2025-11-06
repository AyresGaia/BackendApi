const serverless = require('serverless-http');
const app = require('../app'); // your current Express app
module.exports = serverless(app);

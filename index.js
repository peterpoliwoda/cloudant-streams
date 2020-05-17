const express = require('express');
const dbService = require('./dbService');

const app = express();


app.get('/', (req, res) => {
  dbService.getRecords(res);
});

app.listen(3000).on('listening', () => console.log('Cloudant Streams App listening on port 3000'));

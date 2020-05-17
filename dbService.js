const Cloudant = require('@cloudant/cloudant');
const config = require('./config.json');

const cloudant = Cloudant(config.uri);

module.exports = {
  getRecords(res) {
    const db = cloudant.use('query-as-stream-db');

    const querySelector = {
      selector: {
        something: {
          $eq: 'here',
        },
      },
    };

    db.findAsStream(querySelector)
      .on('error', (error) => {
        console.error('ERROR', error);
      })
      .on('end', (error) => {
        if (error) {
          console.error('ERROR on DONE');
        }
        console.log('DONE');
        res.end();
      })
      .pipe(res);
  },
};

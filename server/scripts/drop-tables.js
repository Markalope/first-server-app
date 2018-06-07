const client = require('../db-client');

client.connect()
  .then(() => {
    return client.query(`
      DROP TABLE IF EXISTS walruses;
      DROP TABLE IF EXISTS types;
    `);
  })
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
const devdata = require('./data/dev-data')
const testdata = require('./data/test-data')

const seeder = require('./seed');

const db = require('./index.js');

seeder(devdata).then(() => db.end());
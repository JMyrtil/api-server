'use strict';

require('dotenv').config();

const server = require('./src/server');
const { sequelize } = require('./src/models/');

sequelize.sync()
  .then(() => {
    server.start(3001);
    console.log('Successful Connection!');
  })
  .catch(e => console.error(e));

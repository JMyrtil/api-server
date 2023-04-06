'use strict';

require('dotenv').config();

const server = require('./src/server');
const sequelize = require('./src/models/index');

sequelize.sync()
  .then(() => {
    console.log('Successful Connection!');
    server.start();
  })
  .catch(e => console.error(e));
  
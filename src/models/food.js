'use strict';

require('dotenv').config();
const { Sequelize, } = require('sequelize');

//having 2 colons in the following line drops the sequel after use
const SQL_URL = process.env.SQL_URL || 'sqlite::memory:';

const sequelize = new Sequelize(SQL_URL);

const Food = sequelize.define('Food', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  healthy: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  tasty: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
});

module.exports = {
  sequelize,
  Food,
};

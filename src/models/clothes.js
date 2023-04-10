'use strict';

require('dotenv').config();
const { Sequelize } = require('sequelize');

//having 2 colons in the following line drops the sequel after use
const SQL_URL = process.env.SQL_URL || 'sqlite::memory:';

const sequelize = new Sequelize(SQL_URL);

const Clothes = sequelize.define('Clothes', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = {
  sequelize,
  Clothes,
};

'use strict';

require('dotenv').config();
const { DataTypes } = require('sequelize');

const Clothes = (sequelize) => sequelize.define('Clothes', {
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

module.exports = Clothes;

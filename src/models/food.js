'use strict';

require('dotenv').config();
const { DataTypes } = require('sequelize');

const Food = (sequelize) => sequelize.define('Food', {
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

module.exports = Food;

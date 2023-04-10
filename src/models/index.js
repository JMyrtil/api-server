'use strict';

require('dotenv').config();
const Sequelize = require('sequelize');
const SQL_URL = process.env.SQL_URL || 'sqlite::memory';

const food = require('./food.js');
const clothes = require('./clothes.js');
const Collection = require('./collection.js');

const sequelize = new Sequelize(SQL_URL);
const foodModel = food(sequelize);
const clothesModel = clothes(sequelize);


module.exports = {
  sequelize,
  foodCollection: new Collection(foodModel),
  clothesCollection: new Collection(clothesModel),
};

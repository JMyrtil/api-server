'use strict';

require('dotenv').config();
const { Sequelize } = require('sequelize');
const SQL_URL = process.env.SQL_URL || "sqlite:memory";

const createFood = require('./food');
const createClothes = require('./clothes');
const Collection = require('./collection');

const sequelize = new Sequelize(SQL_URL);
const foodModel = createFood(sequelize);
const clothesModel = createClothes(sequelize);

//create associations

module.exports = {
    sequelize,
    Food: new Collection(foodModel),
    Clothes: new Collection(clothesModel),
};

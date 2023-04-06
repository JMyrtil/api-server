'use strict';
//change this file to use the collection

const express = require('express');

const foodRoute = require('../models');


const router = express.Router();

router.get('/food', async (req, res, next) => {
  const food = await foodRoute.read();
  res.status(200).send(food);
});

router.post('/food', async (req, res, next) => {
  try {
    console.log(req.body);
    const newFood = await foodRoute.create(req.body);
    res.status(200).send(newFood);
  } catch (err) {
    next(err);
  }
});

router.get('/food/:id', async (req, res, next) => {
  const id = req.params.id;
  const food = await foodRoute.read(id);
  res.status(200).send(food);
});

router.put('/food/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedFood = await foodRoute.update(req.body, id);
    res.status(200).send(updatedFood);
  } catch (err) {
    next(err);
  }
});

router.delete('/food/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    await foodRoute.delete(id);
    res.status(200).send('Deleted');
  } catch (err) {
    next(err);
  }
});


module.exports = router;

'use strict';

const express = require('express');

const clothesRoute = require('../models');


const router = express.Router();

router.get('/clothes', async (req, res, next) => {
  const clothes = await clothesRoute.read();
  res.status(200).send(clothes);
});

router.post('/clothes', async (req, res, next) => {
  try {
    console.log(req.body);
    const newClothes = await clothesRoute.create(req.body);
    res.status(200).send(newClothes);
  } catch (err) {
    next(err);
  }
});

router.get('/clothes/:id', async (req, res, next) => {
  const id = req.params.id;
  const clothes = await clothesRoute.read(id);
  res.status(200).send(clothes);
});

router.put('/clothes/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedClothes = await clothesRoute.update(req.body, id);
    res.status(200).send(updatedClothes);
  } catch (err) {
    next(err);
  }
});

router.delete('/clothes/:id', async (req, res, next) => {
  try {
  
    await clothesRoute.delete(req.params.id);
    res.status(200).send('Deleted');
  } catch (err) {
    next(err);
  }
});


module.exports = router;
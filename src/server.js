'use strict';

const express = require('express');
const handleError = require('./errorhandlers/500');
const handleNotFound = require('./errorhandlers/404');
const app = express();
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');


app.use(express.json());
app.use(foodRouter);
app.use(clothesRouter);
app.use(logger);

app.get('/', (req, res, next) => {
  res.send('Touch me HARDAHH!!!');
});

app.get('/person', validator, (req, res) => {
  
  const name = {name: req.query.name} ;

  res.status(200).json(name);
});


app.use('*', handleNotFound);
app.use(handleError);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is listening on port', port);
    })
  }
}
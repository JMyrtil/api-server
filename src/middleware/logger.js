'use strict'

function logger(req, res, next) {
  console.log('HHEHEHE....Touch me');
  next();
};

module.exports = logger;

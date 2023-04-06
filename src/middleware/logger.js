'use strict'
//this file just console.log's the request.body.name and nothing else. Triggers no errors
function logger(req, res, next) {
  console.log('HHEHEHE....Touch me');
  next();
};

module.exports = logger;

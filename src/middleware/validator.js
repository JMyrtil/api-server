'use strict';

function validator(req, res, next) {

  if (!req.query.name){
    throw new Error('Why you no touch?');

  } else  {
    next();
  }

};

module.exports = validator;

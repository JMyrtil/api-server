'use strict';
// check if there is a query called name and if that name has a value. If the name 
// has no value then it triggers next('please provide a name'), which passes a 4th parameter into next. any time it has a 4th parameter it means it goes to an error handler function
function validator(req, res, next) {
  if (!req.query.name){
    next('Why you no touch?');
  } else  {
    next();
  }
};

module.exports = validator;

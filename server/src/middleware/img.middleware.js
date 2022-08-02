// const msg = require("../controllers/msg.controller");
const msg = require("../messages/general.messages");


module.exports = (req, res, next) => {
  var responseObject = {};
  console.log('Ingresó al Middleware')
  if (typeof req.body.img == "undefined") {
    console.log('undefined Img')
    // change the status according to your need, i am using 500 = internal server error just for example 
    responseObject.status = 500;
    // msg.errCreate.title = 'Debe de cargar una imagen'
    msg.imgErr
    responseObject.err = msg.errCreate;
    // return res.json(responseObject)
    return res.status(responseObject.status).json(responseObject);
  }
  console.log('todo bien next');
  next();
};
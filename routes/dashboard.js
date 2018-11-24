var express = require('express');
var router = express.Router();

const dashboardController=require('../controllers/dashboardController');
const authCheck=(req,res,next)=>{
  if(!req.user){
    // Si el usuario no esta logeado
    res.redirect('/auth/login');
  }else{
    // SI el usuario esta logeado
    next();
  }
};
router.get('/',authCheck,dashboardController.createPage);

module.exports = router;

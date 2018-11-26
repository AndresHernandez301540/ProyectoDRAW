var express = require('express');
var router = express.Router();
const indexController=require('../controllers/indexController');
const { check, body, params} = require('express-validator/check');

const authCheck=(req,res,next)=>{
  if(!req.user){
    // Si el usuario no esta logeado
    res.redirect('/auth/login');
  }else{
    // SI el usuario esta logeado
    next();
  }
};
/*
router.get('/',authCheck,indexController.createPage,(req, res)=> {
  res.render('../views/index',{usuario:req.user});
});
*/
router.get('/',authCheck,indexController.createPage);
router.get('/home',authCheck,indexController.createPage);
router.get('/profilecomplete',authCheck,indexController.completeprof);
/*
router.get('/home', authCheck,(req, res)=> {
  res.render('../views/index',{usuario:req.user});
});
*/



module.exports = router;

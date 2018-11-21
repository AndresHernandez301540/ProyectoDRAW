var express = require('express');
var router = express.Router();

const authCheck=(req,res,next)=>{
  if(!req.user){
    // Si el usuario no esta logeado
    res.redirect('/auth/login');
  }else{
    // SI el usuario esta logeado
    next();
  }
};

router.get('/',authCheck,(req, res)=> {
  res.render('../views/users/login',{usuario:req.user});
});
router.get('/home', authCheck,(req, res)=> {
  res.render('../views/index',{usuario:req.user});
});




module.exports = router;

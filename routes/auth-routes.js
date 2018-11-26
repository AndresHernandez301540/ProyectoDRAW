const router = require('express').Router();
const passport=require('passport');
const User=require('../models/user');

//login
router.get('/login',(req,res)=>{
  res.render('../views/users/login',{usuario:req.user});
});

//logout
router.get('/logout',(req,res)=>{
  req.logout();
  res.redirect('/');
});

//google
router.get('/google',passport.authenticate('google',{
  scope:['profile']
}));
//Facebook
router.get('/facebook',passport.authenticate('facebook',{
  scope:['public_profile user_birthday']
}));
//Twitter
router.get('/twitter',passport.authenticate('twitter',{
  scope:['profile']
}));

//Ruta de callback para que google se redirija
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
//  res.send(req.user);
  User.findOne({_socialId:req.user.socialId, _completeprof:'0'}).then((currentUser)=>{
    if(currentUser){
      res.redirect('/profilecomplete');
    }else{
      res.redirect('/');
    }});
});
// Ruta de callback para que facebook redirija
router.get('/facebook/callback',passport.authenticate('facebook'),(req,res)=>{
//  res.send(req.user);
    User.findOne({_socialId:req.user.socialId, _completeprof:'0'}).then((currentUser)=>{
      if(currentUser){
        res.redirect('/profilecomplete');
      }else{
        res.redirect('/');
      }});
});
// Ruta de callback para que twitter redirija
router.get('/twitter/callback',passport.authenticate('twitter'),(req,res)=>{
  User.findOne({_socialId:req.user.socialId, _completeprof:'0'}).then((currentUser)=>{
    if(currentUser){
      res.redirect('/profilecomplete');
    }else{
      res.redirect('/');
    }});
});


module.exports=router;

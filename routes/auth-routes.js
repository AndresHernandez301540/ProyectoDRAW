const router = require('express').Router();
const passport=require('passport');


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
  res.redirect('/home');
});
// Ruta de callback para que facebook redirija
router.get('/facebook/callback',passport.authenticate('facebook'),(req,res)=>{
//  res.send(req.user);
  res.redirect('/home');
});
// Ruta de callback para que twitter redirija
router.get('/twitter/callback',passport.authenticate('twitter'),(req,res)=>{
  res.redirect('/home');
});

module.exports=router;

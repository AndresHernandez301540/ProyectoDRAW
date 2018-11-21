const router=require('express').Router();

const authCheck=(req,res,next)=>{
  if(!req.user){
    // Si el usuario no esta logeado
    res.redirect('/auth/login');
  }else{
    // SI el usuario esta logeado
    next();
  }
};

router.get('/home',authCheck,(req,res)=>{
  res.render('index',{usuario:req.user});
});

module.exports=router;

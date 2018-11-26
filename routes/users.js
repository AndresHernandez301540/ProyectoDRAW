var express = require('express');
var router = express.Router();
const userController=require('../controllers/userController');
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

/* GET users listing. */
router.post('/',authCheck,userController.createUser);

router.get('/id/:id?',authCheck,userController.indexUser);
router.get('/list/:page?',authCheck,userController.listUser);
router.get('/buscar/:id',authCheck,userController.BuscarUsuario);
router.get('/obtener/:page?',authCheck,userController.getAll);
router.put('/update/:id',authCheck,userController.updateUser);
router.delete('/delete/:id',authCheck,userController.deleteUser);

module.exports = router;

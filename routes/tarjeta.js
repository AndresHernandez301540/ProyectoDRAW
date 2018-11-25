var express = require('express');
var router = express.Router();
const projectController=require('../controllers/tarjetaController');
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

router.post('/',
authCheck,tarjetaController.createTarjeta);
/* GET users listing. */
router.get('/id/:id?',authCheck,projectController.indexTarjeta);
router.get('/list/:page?',authCheck,projectController.listTarjeta);
router.get('/obtener/:page?',authCheck,projectController.getAll);
router.put('/update/:id',authCheck,projectController.updateTarjeta);

router.delete('/delete/:id',authCheck,projectController.deleteTarjeta);

module.exports = router;

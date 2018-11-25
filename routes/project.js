var express = require('express');
var router = express.Router();
const projectController=require('../controllers/projectController');
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
authCheck,projectController.createProject);
/* GET users listing. */
router.get('/id/:id?',authCheck,projectController.indexProject);
router.get('/list/:page?',authCheck,projectController.listProject);
router.get('/obtener/:page?',authCheck,projectController.getAll);
router.get('/buscar/:id',authCheck,projectController.BuscarProject);
router.put('/update/:id',authCheck,projectController.updateProject);

router.delete('/delete/:id',authCheck,projectController.deleteProject);

module.exports = router;

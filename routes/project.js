var express = require('express');
var router = express.Router();
const projectController=require('../controllers/projectController');
const storieController=require('../controllers/tarjetaController');
const dashboardController=require('../controllers/dashboardController');
const retroController=require('../controllers/retroController');
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

//Historias
router.post('/add/stories/',authCheck,storieController.createTarjeta);
router.get('/stoall/:page?',authCheck,storieController.obtenerTarjetas);
router.get('/storie/:id?',authCheck,storieController.indexTarjeta);
router.get('/burndown/:page?',authCheck,projectController.burndown);
router.put('/updatestorie/:id',authCheck,storieController.updateTarjeta);
router.put('/estado/:id',authCheck,storieController.cambiarEstado);
router.delete('/delete/:id',authCheck,storieController.deleteTarjeta);

//Retrospectivas
router.post('/add/retro/',authCheck,retroController.createRetro);
router.get('/retro/:id',authCheck,retroController.indexRetro);
router.get('/retroall/:page?',authCheck,retroController.getAll);

//Dashboard
router.get('/dashboard',authCheck,dashboardController.createPage);
router.get('/dashboard/:id',authCheck,dashboardController.indexDashboard);

//Proyecto
router.post('/',authCheck,projectController.createProject);
router.get('/id/:id?',authCheck,projectController.indexProject);
router.get('/list/:page?',authCheck,projectController.listProject);
router.get('/obtener/:page?',authCheck,projectController.getAll);
router.get('/buscar/:id',authCheck,projectController.BuscarProject);
router.put('/update/:id',authCheck,projectController.updateProject);
router.put('/updatestate/:id',authCheck,projectController.cambiarEstado);
router.delete('/delete/:id',authCheck,projectController.deleteProject);

module.exports = router;

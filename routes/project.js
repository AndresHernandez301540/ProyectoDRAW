var express = require('express');
var router = express.Router();

const projectController=require('../controllers/projectController');

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
router.get('/:id?',
authCheck,projectController.indexProject);

router.get('/',authCheck,projectController.listProject);

router.post('/:name/:duedate/:startdate/:description/:scrum/:owner/:team',
authCheck,projectController.createProject);

router.put('/:id',authCheck,projectController.updateProject);

router.delete('/:id',authCheck,projectController.deleteProject);

module.exports = router;

var express = require('express');
var router = express.Router();
const membersController=require('../controllers/membersController');
const teamsController=require('../controllers/teamsController');

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
authCheck,membersController.createMember);
/* GET users listing. */
router.get('/id/:id?',authCheck,membersController.indexMember);

router.get('/teams/:page?',authCheck,membersController.equipos);
router.post('/add/',authCheck,teamsController.createteam);


router.get('/list/:page?',authCheck,membersController.listMember);
router.get('/buscar/:id',authCheck,membersController.BuscarMiembro);
router.get('/obtener/:page?',authCheck,membersController.getAll);
router.put('/update/:id',authCheck,membersController.updateMember);
router.delete('/delete/:id',authCheck,membersController.deleteMember);

module.exports = router;

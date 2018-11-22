var express = require('express');
var router = express.Router();

const membersController=require('../controllers/membersController');
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
authCheck,membersController.indexMember);

router.get('/',authCheck,membersController.listMember);

router.post('/:name/:date/:curp/:rfc/:home/:abilities',
authCheck,membersController.createMember);

router.put('/:id',authCheck,membersController.updateMember);

router.delete('/:id',authCheck,membersController.deleteMember);

module.exports = router;

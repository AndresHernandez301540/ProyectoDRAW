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

router.post('/',
authCheck,membersController.createMember);
/* GET users listing. */
router.get('/id/:id?',
authCheck,membersController.indexMember);

router.get('/list/:page?',authCheck,membersController.listMember);


router.put('/:id',authCheck,membersController.updateMember);

router.delete('/:id',authCheck,membersController.deleteMember);

module.exports = router;

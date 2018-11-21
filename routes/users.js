var express = require('express');
var router = express.Router();
const usersController=require('../controllers/userController');
const { check, body, params} = require('express-validator/check');

const userController=require('../controllers/userController');

/* GET users listing. */
router.post('/',[
  body('fullName').not().isEmpty(),
  body('birthdayDate').not().isEmpty(),
  body('role').not().isEmpty(),
],usersController.createUser);

router.get('/:name?',userController.indexUser);
router.get('/',userController.listUser);

router.put('/:name',userController.updateUser);
router.delete('/:name',userController.deleteUser);

module.exports = router;

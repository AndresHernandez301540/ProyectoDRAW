var express = require('express');
var router = express.Router();

const userController=require('../controllers/userController');

/* GET users listing. */
router.get('/:name?',userController.indexUser);
router.get('/',userController.listUser);
router.post('/:name/:date/:role',userController.createUser);
router.put('/:name',userController.updateUser);
router.delete('/:name',userController.deleteUser);

module.exports = router;

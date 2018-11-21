var express = require('express');
var router = express.Router();
const userController=require('../controllers/loginController');

router.get('/',userController.createPage);

module.exports = router;

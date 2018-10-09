var express = require('express');
var router = express.Router();

const membersController=require('../controllers/membersController');

/* GET users listing. */
router.get('/:name?',membersController.indexMember);
router.get('/',membersController.listMember);
router.post('/:name/:date/:curp/:rfc/:home/:abilities',membersController.createMember);
router.put('/:name',membersController.updateMember);
router.delete('/:name',membersController.deleteMember);

module.exports = router;

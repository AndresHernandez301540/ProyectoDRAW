var express = require('express');
var router = express.Router();

const equipoController=require('../controllers/equipoController');

/* GET users listing. */
router.get('/:name?',equipoController.indexMember);
router.get('/',equipoController.listMember);
router.post('/:name/:date/:curp/:rfc/:home/:abilities',equipoController.createMember);
router.put('/:name',equipoController.updateMember);
router.delete('/:name',equipoController.deleteMember);

module.exports = router;

var express = require('express');
var router = express.Router();

const proyectController=require('../controllers/proyectController');

/* GET users listing. */
router.get('/:name?',proyectController.indexProyect);
router.get('/',proyectController.listProyect);
router.post('/:name',proyectController.createProyect);
router.put('/:name',proyectController.updateProyect);
router.delete('/:name',proyectController.deleteProyect);

module.exports = router;

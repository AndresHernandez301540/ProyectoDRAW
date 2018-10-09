var express = require('express');
var router = express.Router();

const projectController=require('../controllers/projectController');

/* GET users listing. */
router.get('/:name?/:duedate?/:startdate?/:description?/:scrum?/:owner?/:team?',projectController.indexProject);
router.get('/',projectController.listProject);
router.post('/:name/:duedate/:startdate/:description/:scrum/:owner/:team',projectController.createProject);
router.put('/:name',projectController.updateProject);
router.delete('/:name',projectController.deleteProject);

module.exports = router;

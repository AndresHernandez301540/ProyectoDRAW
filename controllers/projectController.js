const express = require('express');
const Project= require('../models/project');
const {validationResult}=require('express-validator/check');

function createProject(req, res, next){
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(422).json({ // El return rompe la funcion y ya no se ejecuta lo demas
        errors:errors.array()
      });
    }

    let project = new Project({
      _name:req.body.name,
      _dueDate:req.body.dueDate,
      _startDate:req.body.startDate,
      _description:req.body.description,
      _scrumMaster:req.body.scrumMaster,
      _owner:req.body.owner,
      _team:req.body.team
    });
    project.save()
        .then((obj)=>{
            res.redirect('/projects/list');
        })
        .catch((err)=>{
            res.status(500).json({
              errors:[{message:'Algo salio mal'}],
              data:[]
            });
        });
};

function indexProject(req, res, next){
  Project.findById(req.params.id)
      .then((obj)=>{
        res.render('users/projects',{usuario:req.user,projects:obj});
      })
      .catch((err)=>{
        res.status(500).json({
          errors:[{message:'Algo salio mal'}],
          data:[]
      });
    });
  };

function listProject(req, res, next){
  let page=req.params.page ? req.params.page : 1;

  const options = {
    page:page,
    limit:5,
    select :' _name _dueDate _startDate _description _scrumMaster _owner _team'
  };
  Project.paginate({},options)
  .then((objects)=>{
    res.render('users/projects',{usuario:req.user,projects:objects});
  }).catch((err)=>{
    res.status(500).json({
      errors:[{message:'Algo salio mal'}],
      data:[]
    });
  });
};

function getAll(req, res, next){
  let page=req.params.page ? req.params.page : 1;
  const options = {
    page:page,
    limit:10,
    select :'_id _name _dueDate _startDate _description _scrumMaster _owner _team'
  };
  Project.paginate({},options)
  .then((objects)=>{
    res.status(200).json({
      errors:[],
      data:objects
    });
  }).catch((err)=>{
    res.status(500).json({
      errors:[{message:'Algo salio mal'}],
      data:[]
    });
  });
};

function BuscarProject(req, res, next){
  Project.findById(req.params.id)
      .then((obj)=>{
        res.status(200).json({
          errors:[],
          data:obj
        });
     })
      .catch((err)=>{
        res.status(500).json({
          errors:[{message:'Algo salio mal'}],
          data:[]
      });
    });
};

function updateProject(req, res, next){
  Project.findById(req.params.id)
  .then((obj)=>{
    obj.name=req.body.name ? req.body.name : obj.name;
    obj.dueDate=req.body.dueDate ? req.body.dueDate : obj.dueDate;
    obj.startDate=req.body.startDate ? req.body.startDate : obj.startDate;
    obj.description=req.body.description ? req.body.description : obj.description;
    obj.scrum=req.body.scrum ? req.body.scrum : obj.scrum;
    obj.owner=req.body.owner ? req.body.owner : obj.owner;
    obj.team=req.body.team ? req.body.team : obj.team;
    obj.save()
    .then((obj)=>{
        console.log("Todo bien");
    }).catch((err)=>{
      res.status(500).json({
        errors:[{message:'Algo salio mal en la actualización'}],
        data:[]
    });

  });
  }).catch((err)=>{

  });
};

function deleteProject(req,res,next){
  Project.remove({_id: req.params.id})
  .then((obj)=>{
    res.status(200).json({
      errors:[],
      data:obj
    });
  })
  .catch((err)=>{
    res.status(500).json({
      errors:[{message:'Algo salio mal'}],
      data:[]
    });
  });
};

module.exports={
  createProject,
  indexProject,
  listProject,
  BuscarProject,
  getAll,
  updateProject,
  deleteProject
};

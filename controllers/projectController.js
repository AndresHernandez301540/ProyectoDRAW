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
      _scrumMastername:req.body.scrumMastername,
      _owner:req.body.owner,
      _ownerName:req.body.ownerName,
      _team:req.body.team,
      _teamNames:req.body.teamName
    });
    project.save()
        .then((obj)=>{
          console.log(obj)
              res.redirect('back');
        })
        .catch((err)=>{
          console.log(err);
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
    select :' _name _dueDate _startDate _description _scrumMaster _scrumMastername _owner _ownerName _team _teamNames'
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
    select :'_id _name _dueDate _startDate _description _scrumMaster _scrumMastername _owner _ownerName _team _teamNames'
  };
  Project.paginate({},options)
  .then((objects)=>{
    console.log(objects);
    console.log("asd");
    res.status(200).json({
      errors:[],
      data:objects
    });
  }).catch((err)=>{
    console.log(err);
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
    obj.scrumMaster=req.body.scrumMaster ? req.body.scrumMaster : obj.scrumMaster;
    obj.scrumMastername=req.body.scrumMastername ? req.body.scrumMastername : obj.scrumMastername;
    obj.owner=req.body.owner ? req.body.owner : obj.owner;
    obj.ownerName=req.body.ownerName ? req.body.ownerName : obj.ownerName;
    obj.team=req.body.team ? req.body.team : obj.team;
    obj.teamNames=req.body.teamNames ? req.body.teamNames : obj.teamNames;
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

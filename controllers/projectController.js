const express = require('express');

function createProject(req, res, next){
  res.send(`Nombre del proyecto ${req.params.name},
    Fecha de solicitud del proyecto ${req.params.duedate},
    Fecha de arranque del proyecto ${req.params.startdate},
    Descripción del proyecto ${req.params.description},
    Scrum Master ${req.params.scrum},
    Product owner ${req.params.owner},
    Equipo de desarrollo ${req.params.team}`);
};

function indexProject(req, res, next){
  let name = req.params.name ? req.params.name :'Sin nombre del proyecto';
  let duedate = req.params.duedate ? req.params.duedate :'Sin fecha de entrega'
  let startdate=req.params.startdate ? req.params.startdate :'Sin fecha de arranque'
  let description=req.params.description ? req.params.description :'Sin descripción'
  let scrum=req.params.scrum ? req.params.scrum :'Sin Scrum master'
  let owner=req.params.owner ? req.params.owner :'Sin product owner'
  let team=req.params.team ? req.params.team :'Sin equipo de desarrollo'
  res.render('users/projects',{name:req.params.name,duedate:req.params.duedate,startdate:req.params.startdate,
    description:req.params.description,scrum:req.params.scrum,owner:req.params.owner,team:req.params.team});
};

function listProject(req, res, next){
  res.send(`El proyecto con el nombre - ${req.params.name},
    Fecha de solicitud del proyecto - ${req.params.duedate},
    Fecha de arranque del proyecto - ${req.params.startdate},
    Descripción del proyecto - ${req.params.description},
    Scrum master -  ${req.params.scrum},
    Product owner - ${req.params.owner},
    Equipo de desarrollo -  ${req.params.team}`);
};

function updateProject(req, res, next){
  res.send(`Los datos del proyecto ${req.params.name} han sido actualizados`);
};

function deleteProject(req,res,next){
  res.send('El proyecto ha sido eliminado de manera exitosa');
};

module.exports={
  createProject,
  indexProject,
  listProject,
  updateProject,
  deleteProject
};

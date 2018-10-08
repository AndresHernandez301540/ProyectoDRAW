const express = require('express');

function createProyect(req, res, next){
  res.send(`Nombre del proyecto ${req.params.name},
    Fecha de solicitud del proyecto ${req.params.duedate},
    Fecha de arranque del proyecto ${req.params.startdate},
    Descripción del proyecto ${req.params.description},
    Scrum Master ${req.params.scrum},
    Product owner ${req.params.owner},
    Equipo de desarrollo ${req.params.team}`);
};

function indexProyect(req, res, next){
  let name = req.params.name ? req.params.name :'Sin nombre del proyecto';
  res.render('users/list',{name:req.params.name});
};

function listProyect(req, res, next){
  res.send(`El proyecto con el nombre - ${req.params.name},
    Fecha de solicitud del proyecto - ${req.params.duedate},
    Fecha de arranque del proyecto - ${req.params.startdate},
    Descripción del proyecto - ${req.params.description},
    Scrum master -  ${req.params.scrum},
    Product owner - ${req.params.owner},
    Equipo de desarrollo -  ${req.params.team}`);
};

function updateProyect(req, res, next){
  res.send(`Los datos del proyecto ${req.params.name} han sido actualizados`);
};

function deleteProyect(req,res,next){
  res.send('El proyecto ha sido eliminado de manera exitosa');
};

module.exports={
  createProyect,
  indexProyect,
  listProyect,
  updateProyect,
  deleteProyect
};

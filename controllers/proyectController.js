const express = require('express');

function createProyect(req, res, next){
  res.send(`Nombre del proyecto ${req.body.name}`);
  res.send(`Fecha de solicitud del proyecto ${req.body.duedate}`);
  res.send(`Fecha de arranque del proyecto ${req.body.startdate}`);
  res.send(`Descripción del proyecto ${req.body.description}`);
  res.send(`Scrum Master ${req.body.scrum}`);
  res.send(`Product owner ${req.body.owner}`);
  res.send(`Equipo de desarrollo ${req.body.team}`);
};

function indexProyect(req, res, next){
  let name = req.params.name ? req.params.name :'Sin nombre del proyecto';
  res.render('proyects/list',{name:req.params.name});
};

function listProyect(req, res, next){
  res.send(`El proyecto con el nombre - ${req.params.name}`);
  res.send(`Fecha de solicitud del proyecto - ${req.params.name}`);
  res.send(`Fecha de arranque del proyecto - ${req.params.name}`);
  res.send(`Descripción del proyecto - ${req.params.name}`);
  res.send(`Scrum master -  ${req.params.name}`);
  res.send(`Product owner - ${req.params.name}`);
  res.send(`Equipo de desarrollo -  ${req.params.name}`);
};

function updateProyect(req, res, next){
  res.send('Los datos del proyecto han sido actualizados');
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

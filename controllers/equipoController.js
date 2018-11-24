const express = require('express');

function createTeam(req, res, next){
  res.send(`Nombre del equipo - ${req.params.name},
    Miembro - ${req.params.member}`);
};

function indexTeam(req, res, next){
  let name = req.params.name ? req.params.name :'Sin nombre';
  res.render('users/list',{name:req.params.name});
};

function listTeam(req, res, next){
  res.send(`Nombre del equipo ${req.params.name},
    Miembro ${req.params.member}`);
};

function updateTeam(req, res, next){
  res.send(`El equipo ${req.params.name} ha sido actualizado `);
};

function deleteTeam(req,res,next){
  res.send(`El equipo ha sido eliminado`);
};

module.exports={
  createTeam,
  indexTeam,
  listTeam,
  updateTeam,
  deleteTeam
};

const express = require('express');

function createMember(req, res, next){
  res.send(`Nombre completo ${req.body.name}`);
  res.send(`Fecha de nacimiento ${req.body.date}`);
  res.send(`CURP ${req.body.curp}`);
  res.send(`RFC ${req.body.rfc}`);
  res.send(`Domicilio ${req.body.home}`);
  res.send(`Lista de habilidades ${req.body.abilities}`);
};

function indexMember(req, res, next){
  let name = req.params.name ? req.params.name :'Sin nombre';
  res.render('members/list',{name:req.params.name});
};

function listMember(req, res, next){
  res.send(`Nombre completo ${req.body.name}`);
  res.send(`Fecha de nacimiento ${req.body.date}`);
  res.send(`CURP ${req.body.curp}`);
  res.send(`RFC ${req.body.rfc}`);
  res.send(`Domicilio ${req.body.home}`);
  res.send(`Lista de habilidades ${req.body.abilities}`);
};

function updateMember(req, res, next){
  res.send(`El miembro del equipo ${req.body.name} ha sido actualizado `);
};

function deleteMember(req,res,next){
  res.send(`El miembro del equipo ${req.body.name} ha sido eliminado`);
};

module.exports={
  createMember,
  indexMember,
  listMember,
  updateMember,
  deleteMember
};

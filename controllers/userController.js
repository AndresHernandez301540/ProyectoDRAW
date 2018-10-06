const express = require('express');

function createUser(req, res, next){
  res.send(`Nombre completo ${req.body.name}`);
  res.send(`Fecha de nacimiento ${req.body.date}`);
  res.send(`Rol - ${req.body.role}`)
};

function indexUser(req, res, next){
  let name = req.params.name ? req.params.name :'Sin nombre';
  res.render('users/list',{name:req.params.name});
};

function listUser(req, res, next){
  res.send(`Nombre completo ${req.body.name}`);
  res.send(`Fecha de nacimiento ${req.body.date}`);
  res.send(`Rol - ${req.body.role}`)
};

function updateUser(req, res, next){
  res.send(`El usuario ${req.body.name} ha sido actualizado `);
};

function deleteUser(req,res,next){
  res.send(`El usuario ${req.body.name} ha sido eliminado`);
};

module.exports={
  createUser,
  indexUser,
  listUser,
  updateUser,
  deleteUser
};

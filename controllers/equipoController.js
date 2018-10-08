const express = require('express');

function createMember(req, res, next){
  res.send(`Nombre completo ${req.params.name},
    Fecha de nacimiento ${req.params.date},
    CURP ${req.params.curp},
    RFC ${req.params.rfc},
    Domicilio ${req.params.home},
    Lista de habilidades ${req.params.abilities}`);
};

function indexMember(req, res, next){
  let name = req.params.name ? req.params.name :'Sin nombre';
  res.render('users/list',{name:req.params.name});
};

function listMember(req, res, next){
  res.send(`Nombre completo ${req.params.name},
    Fecha de nacimiento ${req.params.date},
    CURP ${req.params.curp},
    RFC ${req.params.rfc},
    Domicilio ${req.params.home},
    Lista de habilidades ${req.params.abilities}`);
};

function updateMember(req, res, next){
  res.send(`El miembro ${req.params.name} del equipo  ha sido actualizado `);
};

function deleteMember(req,res,next){
  res.send(`El miembro del equipo ha sido eliminado`);
};

module.exports={
  createMember,
  indexMember,
  listMember,
  updateMember,
  deleteMember
};

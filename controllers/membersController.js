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
  let date = req.params.date ? req.params.date :'Sin fecha de nacimiento';
  let curp = req.params.curp ? req.params.curp :'Sin CURP';
  let rfc = req.params.rfc ? req.params.rfc :'Sin RFC';
  let domicilio = req.params.home ? req.params.home :'Sin domicilio';
  let abilities = req.params.abilities ? req.params.abilities :'Sin habilidades';
  res.render('users/teams',{name:req.params.name,date:req.params.date,curp:req.params.curp,
  rfc:req.params.rfc,domicilio:req.params.home,abilities:req.params.abilities});
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

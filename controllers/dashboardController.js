const express = require('express');

function createPage(req, res, next){
  res.send(`Nombre del equipo - ${req.params.name},
    Miembro - ${req.params.member}`);
};

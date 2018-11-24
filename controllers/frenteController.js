const express = require('express');
const Frente = require('../models/frente');
const {validationResult}=require('express-validator/check');

function createFrente(req, res, next){
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(422).json({ // El return rompe la funcion y ya no se ejecuta lo demas
        errors:errors.array()
      });
    }

    let frente = new Frente({
      _como:req.body.como,
      _quiero:req.body.quiero,
      _manera:req.body.manera,
      _prioridad:req.body.prioridad,
      _tamaño:req.body.tamaño
    });

  };

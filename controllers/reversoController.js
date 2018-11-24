const express = require('express');
const Reverso = require('../models/reverso');
const {validationResult}=require('express-validator/check');

function createReverso(req, res, next){
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(422).json({ // El return rompe la funcion y ya no se ejecuta lo demas
        errors:errors.array()
      });
    }

    let frente = new Frente({
      _dado:req.body.dado,
      _cuando:req.body.cuando,
      _entonces:req.body.entonces
    });

  };

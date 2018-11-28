const express = require('express');
const Retro = require('../models/retro');
const {validationResult}=require('express-validator/check');

function createTarjeta(req, res, next){
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(422).json({ // El return rompe la funcion y ya no se ejecuta lo demas
        errors:errors.array()
      });
    }

    let retro = new retro({
      _bien:req.body.bien,
      _mal:req.body.mal,
      _mejorar:req.body.mejorar
    });

    retro.save()
        .then((obj)=>{
            res.redirect('back');
        })
        .catch((err)=>{
            res.status(500).json({
              errors:[{message:'Algo salio mal'}],
              data:[]
            });
        });

  };

function indexRetro(req, res, next){
  Tarjeta.findById(req.params.id)
      .then((obj)=>{
        res.status(200).json({
          errors:[],
          data:obj
        });
     })
      .catch((err)=>{
        res.status(500).json({
          errors:[{message:'Algo salio mal'}],
          data:[]
      });
    });
};



module.exports={
  createTarjeta,
  indexTarjeta
};

const express = require('express');
const Tarjeta = require('../models/tarjeta');
const {validationResult}=require('express-validator/check');

function createTarjeta(req, res, next){
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(422).json({ // El return rompe la funcion y ya no se ejecuta lo demas
        errors:errors.array()
      });
    }

    let tarjeta = new Tarjeta({
      _nombre:req.body.nombre,
      _como:req.body.como,
      _quiero:req.body.quiero,
      _manera:req.body.manera,
      _prioridad:req.body.prioridad,
      _tamaño:req.body.tamaño,
      _unidad:req.body.unidad,

      _dado:req.body.dado,
      _cuando:req.body.cuando,
      _entonces:req.body.entonces
    });

    tarjeta.save()
        .then((obj)=>{
            res.redirect('/dashboard');
        })
        .catch((err)=>{
            res.status(500).json({
              errors:[{message:'Algo salio mal'}],
              data:[]
            });
        });

  };

function indexTarjeta(req, res, next){
    Tarjeta.findById(req.params.id)
        .then((obj)=>{
          res.render('users/dashboard',{usuario:req.user,dashboard:obj});
        })
        .catch((err)=>{
          res.status(500).json({
            errors:[{message:'Algo salio mal'}],
            data:[]
        });
      });
    };

function listTarjeta(req, res, next){
  let page=req.params.page ? req.params.page : 1;

  const options = {
    page:page,
    limit:5,
    select :' _nombre _como _quiero _manera _prioridad _tamaño _unidad _dado _cuando _entonces'
  };
  Tarjeta.paginate({},options)
  .then((objects)=>{
    res.render('users/dashboard',{usuario:req.user,projects:objects});
  }).catch((err)=>{
    res.status(500).json({
      errors:[{message:'Algo salio mal'}],
      data:[]
    });
  });
};

function obtenerTarjetas(req, res, next){
  let page=req.params.page ? req.params.page : 1;
  const options = {
    page:page,
    limit:10,
    select :'_id _nombre _como _quiero _manera _prioridad _tamaño _unidad _dado _cuando _entonces'
  };
  Tarjeta.paginate({},options)
  .then((objects)=>{
    console.log(objects);
    res.status(200).json({
      errors:[],
      data:objects
    });
  }).catch((err)=>{
    console.log(err);
    res.status(500).json({
      errors:[{message:'Algo salio mal'}],
      data:[]
    });
  });
};

function updateTarjeta(req, res, next){
  Tarjeta.findById(req.params.id)
  .then((obj)=>{
    obj.nombre=req.body.nombre ? req.body.nombre : obj.nombre;
    obj.como=req.body.como ? req.body.como : obj.como;
    obj.quiero=req.body.quiero ? req.body.quiero : obj.quiero;
    obj.manera=req.body.manera ? req.body.manera : obj.manera;
    obj.prioridad=req.body.prioridad ? req.body.prioridad : obj.prioridad;
    obj.tamaño=req.body.tamaño ? req.body.tamaño : obj.tamaño;
    obj.unidad=req.body.unidad ? req.body.unidad : obj.unidad;
    obj.dado=req.body.dado ? req.body.dado : obj.dado;
    obj.cuando=req.body.cuando ? req.body.cuando : obj.cuando;
    obj.entonces=req.body.entonces ? req.body.entonces : obj.entonces;

    obj.save()
    .then((obj)=>{
        console.log("Todo bien");
    }).catch((err)=>{
      res.status(500).json({
        errors:[{message:'Algo salio mal en la actualización'}],
        data:[]
    });

  });
  }).catch((err)=>{

  });
};

function deleteTarjeta(req,res,next){
  Tarjeta.remove({_id: req.params.id})
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
  indexTarjeta,
  listTarjeta,
  obtenerTarjetas,
  updateTarjeta,
  deleteTarjeta
};

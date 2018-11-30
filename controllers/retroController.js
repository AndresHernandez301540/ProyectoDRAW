const express = require('express');
const Retro = require('../models/retro');
const Project= require('../models/project');
const {validationResult}=require('express-validator/check');

function createRetro(req, res, next){
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(422).json({ // El return rompe la funcion y ya no se ejecuta lo demas
        errors:errors.array()
      });
    }
    let retro = new Retro({
      _projectId:req.body.projectId,
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
  Project.findById(req.params.id)
      .then((obj)=>{

        res.render('users/retrospectivas',{usuario:req.user,projects:obj});
      })
      .catch((err)=>{
        res.status(500).json({
          errors:[{message:'Algo salio mal'}],
          data:[]
      });
    });
};

function obtenerRetro(req, res, next){
  let page=req.params.page ? req.params.page : 1;
  const options = {
    page:page,
    limit:50,
    select :'_id _projectId _bien _mal _mejorar'
  };
  Retro.paginate({},options)
  .then((objects)=>{
    res.render('users/retrospectivas',{usuario:req.user,retrospectiva:objects});
  }).catch((err)=>{
    console.log(err);
    res.status(500).json({
      errors:[{message:'Algo salio mal'}],
      data:[]
    });
  });
}

function getAll(req, res, next){
  let page=req.params.page ? req.params.page : 1;
  const options = {
    page:page,
    limit:50,
    select :'_id _projectId _bien _mal _mejorar'
  };
  Retro.paginate({},options)
  .then((objects)=>{
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
}


module.exports={
  createRetro,
  obtenerRetro,
  getAll,
  indexRetro
};

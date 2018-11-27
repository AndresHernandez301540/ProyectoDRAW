const express = require('express');
const User= require('../models/user');
const {validationResult}=require('express-validator/check');

function createUser(req, res, next){
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(422).json({ // El return rompe la funcion y ya no se ejecuta lo demas
        errors:errors.array()
      });
    }

    let user = new User({
      _fullName:req.body.fullName,
      _email:req.body.email,
      _birthdayDate:req.body.birthdayDate,
      _role:req.body.role,
      _curp:req.body.curp,
      _rfc:req.body.rfc,
      _home:req.body.home,
      _abilities:req.body.abilities//+'-'+req.body.rank
    });
    user.save()
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

function indexUser(req, res, next){
  User.findById(req.params.id)
      .then((obj)=>{
        res.render('users/profile',{usuario:req.user,user:obj});
      })
      .catch((err)=>{
        res.status(500).json({
          errors:[{message:'Algo salio mal'}],
          data:[]
      });
    });
};

function listUser(req, res, next){
  let page=req.params.page ? req.params.page : 1;

  const options = {
    page:page,
    limit:1,
    select :'_id _fullName _birthdayDate _role _curp _rfc _home _abilities'
  };
  User.paginate({},options)
  .then((objects)=>{
    res.render('users/teams',{usuario:req.user,members:objects});
  }).catch((err)=>{
    res.status(500).json({
      errors:[{message:'Algo salio mal'}],
      data:[]
    });
  });
};

function getAll(req, res, next){

  let page=req.params.page ? req.params.page : 1;
  const options = {
    page:page,
    limit:10,
    select :'_id _fullName _birthdayDate _role _curp _rfc _home _abilities'
  };
  User.paginate({},options)
  .then((objects)=>{
    res.status(200).json({
      errors:[],
      data:objects
    });
  }).catch((err)=>{
    res.status(500).json({
      errors:[{message:'Algo salio mal'}],
      data:[]
    });
  });
};

function obtenernombres(req, res, next){
  let page=req.params.page ? req.params.page : 1;
  const options = {
    page:page,
    limit:10,
    select :'_id _fullName'
  };
  User.paginate({},options)
  .then((objects)=>{
    res.status(200).json({
      errors:[],
      data:objects
    });
  }).catch((err)=>{
    res.status(500).json({
      errors:[{message:'Algo salio mal'}],
      data:[]
    });
  });
};

function BuscarUsuario(req, res, next){
  User.findById(req.params.id)
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

function updateUser(req, res, next){
  if(req.user.id==req.params.id){

      User.findById(req.params.id)
      .then((obj)=>{
        obj._fullName=req.body.fullName ? req.body.fullName : obj.fullName;
        obj.birthdayDate=req.body.birthdayDate ? req.body.birthdayDate : obj.birthdayDate;
        obj.email=req.body.email ? req.body.email : obj.email;
        obj.password=req.body.password ? req.body.password : obj.password;
        obj.role=req.body.role ? req.body.role : obj.role;
        obj.curp=req.body.curp ? req.body.curp : obj.curp;
        obj.rfc=req.body.rfc ? req.body.rfc : obj.rfc;
        obj.home=req.body.home ? req.body.home : obj.home;
        obj.completeprof='1';
        obj.abilities=req.body.abilities ? req.body.abilities : obj.abilities;
        obj.save()
        .then((obj)=>{
          res.status(200).json({
            errors:[],
            data:obj
        });
        }).catch((err)=>{
          res.status(500).json({
            errors:[{message:'Algo salio mal en la actualización'}],
            data:[]
        });
      });
      }).catch((err)=>{

      });
  }else{
    res.status(500).json({
      errors:[{message:'Algo salio mal en la actualización'}],
      data:[]
  });
  }


};

function deleteUser(req,res,next){

  if(req.user.id==req.body.id){
    User.remove({_id: req.params.id})
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
  }else{
      res.status(500).json({
        errors:[{message:'Algo salio mal en la actualización'}],
        data:[]
      });
  }


};

module.exports={
  createUser,
  indexUser,
  listUser,
  getAll,
  obtenernombres,
  BuscarUsuario,
  updateUser,
  deleteUser
};

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
      _birthdayDate:req.body.birthdayDate,
      _role:req.body.role
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

function listUser(req, res, next){
  let page=req.params.page ? req.params.page : 1;

  const options = {
    page:page,
    limit:1,
    select :'_fullName _birthdayDate _role'
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

function updateUser(req, res, next){
  User.findById(req.params.id)
  .then((obj)=>{
    obj.fullName=req.body.fullName ? req.body.fullName : obj.fullName;
    obj.birthdayDate=req.body.birthdayDate ? req.body.birthdayDate : obj.birthdayDate;
    obj.role=req.body.role ? req.body.role : obj.role;
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

function deleteUser(req,res,next){
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
};

module.exports={
  createUser,
  indexUser,
  listUser,
  updateUser,
  deleteUser
};

const express = require('express');
const Member= require('../models/member');
const {validationResult}=require('express-validator/check');

function createMember(req, res, next){
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(422).json({ // El return rompe la funcion y ya no se ejecuta lo demas
        errors:errors.array()
      });
    }
    let member = new Member({
      _fullName:req.body.fullName,
      _birthdayDate:req.body.birthdayDate,
      _curp:req.body.curp,
      _rfc:req.body.rfc,
      _home:req.body.home,
      _abilities:req.body.abilities+'-'+req.body.rank
    });
    member.save()
        .then((obj)=>{
          res.redirect('/team/list');
    /*        res.status(200).json({
            errors:[],
            data:obj
          });
    */    })
        .catch((err)=>{
            res.status(500).json({
              errors:[{message:'Algo salio mal'}],
              data:[]
            });
        });
};

function indexMember(req, res, next){
  Member.findById(req.params.id)
      .then((obj)=>{
        res.render('users/profile',{usuario:req.user,member:obj});
     })
      .catch((err)=>{
        res.status(500).json({
          errors:[{message:'Algo salio mal'}],
          data:[]
      });
    });
};

function listMember(req, res, next){
  let page=req.params.page ? req.params.page : 1;
  const options = {
    page:page,
    limit:5,
    select :'_id _fullName _birthdayDate _curp _rfc _home _abilities'
  };
  Member.paginate({},options)
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
    select :'_id _fullName _birthdayDate _curp _rfc _home _abilities'
  };
  Member.paginate({},options)
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

function BuscarMiembro(req, res, next){
  Member.findById(req.params.id)
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

function updateMember(req, res, next){
  Member.findById(req.params.id)
  .then((obj)=>{
    console.log(obj);
    obj._fullName=req.body._fullName ? req.body._fullName : obj.fullName;
    obj.birthdayDate=req.body.birthdayDate ? req.body.birthdayDate : obj.birthdayDate;
    obj.curp=req.body.curp ? req.body.curp : obj.curp;
    obj.rfc=req.body.rfc ? req.body.rfc : obj.rfc;
    obj.home=req.body.home ? req.body.home : obj.home;
    obj.abilities=req.body.abilities ? req.body.abilities : obj.abilities;
    obj.save()
    .then((obj)=>{
      console.log(obj);
      res.status(200).json({
        errors:[],
        data:obj
    });
    }).catch((err)=>{
      console.log(err);
      res.status(500).json({
        errors:[{message:'Algo salio mal en la actualización'}],
        data:[]
    });
  });
  }).catch((err)=>{

  });
};



function deleteMember(req,res,next){
  Member.remove({_id: req.params.id})
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
  createMember,
  indexMember,
  listMember,
  updateMember,
  BuscarMiembro,
  getAll,
  deleteMember
};

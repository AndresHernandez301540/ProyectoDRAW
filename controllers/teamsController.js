const express = require('express');
const Team= require('../models/team');
const {validationResult}=require('express-validator/check');

function createteam(req, res, next){
  const errors=validationResult(req);
  if(!errors.isEmpty()){
    return res.status(422).json({ // El return rompe la funcion y ya no se ejecuta lo demas
      errors:errors.array()
    });
  }
  let team = new Team({
    _developmentTeam:req.body.developmentTeam,
    _memberTeam:req.body.memberTeam
  });
  team.save()
      .then((obj)=>{
        res.redirect('/team/teams');
   })
      .catch((err)=>{
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
    select :'_id _developmentTeam _memberTeam'
  };
  Team.paginate({},options)
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

module.exports={
  createteam,
  getAll
};

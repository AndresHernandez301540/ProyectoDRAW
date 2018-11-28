const express = require('express');
const Project= require('../models/project');
const {validationResult}=require('express-validator/check');

function createPage(req, res, next){
  let page=req.params.page ? req.params.page : 1;
  console.log(req.user)
  const options = {
    page:page,
    limit:5,
    select :' _name _dueDate _startDate _description _scrumMaster _owner _team'
  };
  Project.paginate({
    $or:[
      {_team:req.user.id}
    ]
  },options)
  .then((objects)=>{
    console.log(objects);
    res.render('index',{usuario:req.user,projects:objects});
  }).catch((err)=>{
    res.status(500).json({
      errors:[{message:'Algo salio mal'}],
      data:[]
    });
  });
};




function completeprof(req, res, next){
    res.render('users/profilecomplete',{usuario:req.user});
};

module.exports={
  createPage,
  completeprof
};

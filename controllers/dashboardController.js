const express = require('express');
const Project= require('../models/project');
const {validationResult}=require('express-validator/check');

function createPage(req, res, next){
  res.render('users/dashboard',{usuario:req.user});
};

function indexDashboard(req, res, next){
  Project.findById(req.params.id)
      .then((obj)=>{

        res.render('users/dashboard',{usuario:req.user,projects:obj});
      })
      .catch((err)=>{
        res.status(500).json({
          errors:[{message:'Algo salio mal'}],
          data:[]
      });
    });
  };


module.exports={
  createPage,
  indexDashboard
};

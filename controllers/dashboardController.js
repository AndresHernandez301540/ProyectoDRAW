const express = require('express');

function createPage(req, res, next){
  res.render('users/dashboard',{usuario:req.user});
};

module.exports={
  createPage
};

const express = require('express');

function createPage(req, res, next){
  res.render('users/dashboard');
};

module.exports={
  createPage
};

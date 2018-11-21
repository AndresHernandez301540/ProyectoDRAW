const express = require('express');

function createPage(req, res, next){
  res.render('users/login');
};

module.exports={
  createPage
};

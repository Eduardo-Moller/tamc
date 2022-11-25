const express = require('express');
const usuarioController = require("../controllers/usuarioController");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  email = req.body.email;
  senha = req.body.senha;
  var UserArray = [email, senha];
  user = await usuarioController.login(UserArray);
  if (typeof(user)=='object') {
    req.session.login = user;
    res.redirect('/')
  } else {
    res.redirect('/login')
  }
});

router.post("/registro", async (req, res, next) => {
  nome = req.body.nome;
  email = req.body.email;
  senha = req.body.senha;
  if(nome=="" || email=="" || senha==""){
    res.redirect('/registro')
  }
  var UserArray = [nome, email, senha];
  user = await usuarioController.registro(UserArray);
  if(typeof(user)=='object'){
    req.session.login = user;
    res.redirect('/')
  }
});

module.exports = router;

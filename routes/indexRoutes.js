var express = require('express');
const usuarioController = require("../controllers/usuarioController");
const pecasController = require("../controllers/pecasController");
var router = express.Router();

router.get('/', usuarioController.loginVerify, async (req, res, next) => {
  data = await usuarioController.getUser();
  res.render('index', data);
});

router.get('/compatibilidade', usuarioController.loginVerify, async (req, res, next) => {
  pecas = await pecasController.pecas();
  res.render('compatibilidade', pecas);
  
});

router.get('/comp', async (req, res, next) => {
  res.render('comp');
});

router.get('/componentes', usuarioController.loginVerify, function (req, res, next) {
  res.render('componentes');
}); 

router.get('/teste', function (req, res, next) {
  res.render('teste');
}); 

router.get('/perfil', usuarioController.loginVerify, function (req, res, next) {
  res.render('perfil');
});

router.get('/tutorial', usuarioController.loginVerify, function (req, res, next) {
  res.render('tutorial');
});

router.get('/usuario', usuarioController.loginVerify, async (req, res, next) => {
  configsList = await pecasController.listaConfigs(req.session.login.id);
  var data = {
    nome:req.session.login.nome,
    lista:configsList
  }
  if(req.query.id){
    await pecasController.excluir(req.query.id);
    res.redirect('/usuario')
  }
  res.render('usuario', data);
});

router.get('/login', function (req, res, next) {
  res.render('login');
});

router.get('/logout', usuarioController.logOut, function (req, res, next) {
  res.redirect('/login');
});

router.get('/registro', function (req, res, next) {
  res.render('registrar');
});

module.exports = router;

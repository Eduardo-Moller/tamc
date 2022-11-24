var express = require('express');
const pecasController = require("../controllers/pecasController");
var router = express.Router();

router.get('/imprimir', async (req, res, next) => {
    dados = await pecasController.imprimir(req.query.id)
    res.send(dados);
  });
  
module.exports = router;

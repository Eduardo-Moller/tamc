var express = require('express');
const pecasController = require("../controllers/pecasController");
var { verifica } = require('../models/pecasModel');
var router = express.Router();

router.get('/verifica', async (req, res, next) => {
    verifica = await pecasController.compatibilidade({ ...req.query }, req.session.login.id)
    const data = {
      "soquete":verifica[0],
      "placaMaeTamanhoGabinete": verifica[1],
      "FonteTamanhoGabinete": verifica[2],
      "consumo": verifica[3],
      "video": verifica[4]
    }
    res.send(data);
  });

  router.get('/save', async (req, res, next) => {
    await pecasController.saveConfig(req.query)
  });
  
module.exports = router;

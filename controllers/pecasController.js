const pecasModel = require("../models/pecasModel");
const sessionStorage = require('node-sessionstorage');
const { jsPDF } = require("jspdf");

exports.pecas = async () => {
    return await pecasModel.listaPecas();
};

exports.compatibilidade = async (data) => {
    //Pega as informaçoes das peças no model
    objPecas = await pecasModel.verifica(data);

    //Separa o objeto
    let jsoncpu = JSON.stringify(objPecas.cpu[0])
    let cpu = JSON.parse(jsoncpu)
    let jsonplacaMae = JSON.stringify(objPecas.PlacaMae[0])
    let placaMae = JSON.parse(jsonplacaMae)
    let jsonram = JSON.stringify(objPecas.MemoriaRam[0])
    let ram = JSON.parse(jsonram)
    let jsonFonte = JSON.stringify(objPecas.FonteAlimentacao[0])
    let fonte = JSON.parse(jsonFonte)
    let jsonGabinete = JSON.stringify(objPecas.Gabinete[0])
    let gabinete = JSON.parse(jsonGabinete)

    if(objPecas.DiscoSSD[0]==null){
        ssd=null;
        ssdP=0;
        ssdC=0;
    }else{
    let jsonssd = JSON.stringify(objPecas.DiscoSSD[0])
    let ssdJ = JSON.parse(jsonssd)
    ssd=ssdJ.nome;
    ssdP=ssdJ.preco;
    ssdC=ssdJ.consumo;
    }
    if(objPecas.DiscoRigido[0]==null){
        hd=null;
        hdP=0;
        hdC=0;
    }else{
    let jsonhd = JSON.stringify(objPecas.DiscoRigido[0])
    let hdJ = JSON.parse(jsonhd)
    hd=hdJ.nome;
    hdP=hdJ.preco;
    hdC=hdJ.consumo;
    }
    if(objPecas.Cooler[0]==null){
        cooler=null;
        coolerP=0;
        coolerC=0;
    }else{
    let jsoncooler = JSON.stringify(objPecas.Cooler[0])
    let coolerJ = JSON.parse(jsoncooler)
    cooler=coolerJ.nome;
    coolerP=coolerJ.preco;
    coolerC=coolerJ.consumo;
    }

    if(objPecas.PlacaVideo[0]==null){
        placaVideo=null;
        placaVideoP=0;
        placaVideoC=0;
    }else{
    let jsonvideo = JSON.stringify(objPecas.PlacaVideo[0])
    let placaVideoj = JSON.parse(jsonvideo)
    placaVideo=placaVideoj.nome;
    placaVideoP=placaVideoj.preco;
    placaVideoC=placaVideoj.consumo;
    }

    //Consumo calc
    let consumo = cpu.consumo + placaMae.consumo + ram.consumo + placaVideoC + hdC +  coolerC + ssdC;
    //Separa o tamanhos do gabinete
    var gabTamanhos = gabinete.tamanhos;
    var tamanhos = gabTamanhos.split("|");

    //Verifica a compatibilidade
    var verifica = [false, false, false, false, false];

    if (placaMae.soquete === cpu.soquete) {
        verifica[0] = true;
    }
    for (let i = 0; i < tamanhos.length; i++) {
        if (placaMae.tamanho === tamanhos[i]) {
            verifica[1] = true;
        }
    }
    for (let i = 0; i < tamanhos.length; i++) {
        if (fonte.tamanho === tamanhos[i]) {
            verifica[2] = true;
        }
    }
    if (fonte.potencia > consumo) {
        verifica[3] = true;
    }

    if (objPecas.PlacaVideo[0]!=null) {
        verifica[4] = true;
    }
    
    if (cpu.integrada=='sim') {
        verifica[4] = true;
    }

    if (verifica[0] == true && verifica[1] == true && verifica[2] == true && verifica[3] == true && verifica[4] == true) {
        id = sessionStorage.getItem('id');
        const PecasSalvas = {id: id,cpu: cpu.nome,cpuP: cpu.preco,placamae: placaMae.nome,placamaeP: placaMae.preco,ram: ram.nome,ramP: ram.preco,placavideo: placaVideo ,placavideoP: placaVideoP,discorigido: hd,discorigidoP: hdP,ssd: ssd,ssdP: ssdP,cooler: cooler,coolerP: coolerP,fonte: fonte.nome,fonteP: fonte.preco,gabinete: gabinete.nome,gabineteP: gabinete.preco}
        await pecasModel.salva(PecasSalvas);
        return verifica;  
    }else{
        return verifica;
    }
};

exports.listaConfigs = async (id) => {
    //id = sessionStorage.getItem('id');
    //nome = sessionStorage.getItem('nome');
    lista = await pecasModel.listaConfigs(id);
    //var data = {
    //    nome:nome,
    //    lista:lista
    //}
    return lista;
};

exports.excluir = async (data) => {
    await pecasModel.exclui(data);
};

exports.imprimir = async (data) => {
    return await pecasModel.listaPorID(data)
};

exports.saveConfig = async (data) => {
    switch (data.tipo) {
        case 'gamer':
            await pecasModel.gamerSave(data.id)
          break;
    
        case 'edicao':
            await pecasModel.edicaoSave(data.id)
          break;
    
        case 'estudo':
            await pecasModel.estudoSave(data.id)
          break;

        default:console.log('Error save');
      }
};

const mysql = require('./mysql')

async function listaPecas() {
    sql = `SELECT id,nome FROM cpu`;
    const dataCpu = await mysql.query(sql);
    sql = `SELECT id,nome FROM PlacaMae`;
    const dataPlacaMae = await mysql.query(sql);
    sql = `SELECT id,nome FROM MemoriaRam`;
    const dataMemoriaRam = await mysql.query(sql);
    sql = `SELECT id,nome FROM PlacaVideo`;
    const dataPlacaVideo = await mysql.query(sql);
    sql = `SELECT id,nome FROM DiscoRigido`;
    const dataDiscoRigido = await mysql.query(sql);
    sql = `SELECT id,nome FROM DiscoSSD`;
    const dataDiscoSSD = await mysql.query(sql);
    sql = `SELECT id,nome FROM Cooler`;
    const dataCooler = await mysql.query(sql);
    sql = `SELECT id,nome FROM FonteAlimentacao`;
    const dataFonteAlimentacao = await mysql.query(sql);
    sql = `SELECT id,nome FROM Gabinete`;
    const dataGabinete = await mysql.query(sql);
    const data= {
        cpu: dataCpu,
        PlacaMae: dataPlacaMae,
        MemoriaRam :dataMemoriaRam,
        PlacaVideo:dataPlacaVideo,
        DiscoRigido:dataDiscoRigido,
        DiscoSSD:dataDiscoSSD,
        Cooler:dataCooler,
        FonteAlimentacao:dataFonteAlimentacao,
        Gabinete:dataGabinete
    }
    return data;
};

async function verifica(data) {
    sql = `SELECT * FROM cpu WHERE id = '${data.cpu}'`;
    const dataCpu = await mysql.query(sql);
    sql = `SELECT * FROM PlacaMae WHERE id = '${data.placamae}'`;
    const dataPlacaMae = await mysql.query(sql);
    sql = `SELECT * FROM MemoriaRam WHERE id = '${data.ram}'`;
    const dataMemoriaRam = await mysql.query(sql);
    sql = `SELECT * FROM PlacaVideo WHERE id = '${data.placavideo}'`;
    const dataPlacaVideo = await mysql.query(sql);
    sql = `SELECT * FROM DiscoRigido WHERE id = '${data.discorigido}'`;
    const dataDiscoRigido = await mysql.query(sql);
    sql = `SELECT * FROM DiscoSSD WHERE id = '${data.ssd}'`;
    const dataDiscoSSD = await mysql.query(sql);
    sql = `SELECT * FROM Cooler WHERE id = '${data.cooler}'`;
    const dataCooler = await mysql.query(sql);
    sql = `SELECT * FROM FonteAlimentacao WHERE id = '${data.fonte}'`;
    const dataFonteAlimentacao = await mysql.query(sql);
    sql = `SELECT * FROM Gabinete WHERE id = '${data.gabinete}'`;
    const dataGabinete = await mysql.query(sql);

    const dataPecas = {
        cpu: dataCpu,
        PlacaMae: dataPlacaMae,
        MemoriaRam :dataMemoriaRam,
        PlacaVideo:dataPlacaVideo,
        DiscoRigido:dataDiscoRigido,
        DiscoSSD:dataDiscoSSD,
        Cooler:dataCooler,
        FonteAlimentacao:dataFonteAlimentacao,
        Gabinete:dataGabinete
    }
    return dataPecas;
};

async function salva(data) {
    sql = `INSERT INTO configuracoes (id, cpu, precoCpu, placamae, precoPlacamae, ram, precoRam, placavideo, precoPlacavideo, discorigido, precoDiscorigido, ssd, precoSsd, cooler, precoCooler, fonte, precoFonte, gabinete, precoGabinete) VALUES(${data.id},'${data.cpu}', '${data.cpuP}', '${data.placamae}', '${data.placamaeP}',  '${data.ram}', '${data.ramP}', '${data.placavideo}', '${data.placavideoP}', '${data.discorigido}', '${data.discorigidoP}', '${data.ssd}', '${data.ssdP}', '${data.cooler}', '${data.coolerP}', '${data.fonte}', '${data.fonteP}', '${data.gabinete}', '${data.gabineteP}')`;
    console.log(sql);
    await mysql.query(sql);
};

async function listaConfigs(data) {
    sql = `SELECT * FROM configuracoes WHERE id=${data}`;
    lista = await mysql.query(sql);
    return lista;
};

async function exclui(data){
    sql = `DELETE FROM configuracoes WHERE configuracoes.id_config=${data}`;
    await mysql.query(sql);
}

async function listaPorID(data){
    sql = `SELECT * FROM configuracoes WHERE id_config=${data}`;
    return await mysql.query(sql);
}

async function edicaoSave(data){
    sql = `INSERT INTO configuracoes (id, cpu, precoCpu, placamae, precoPlacamae, ram, precoRam, placavideo, precoPlacavideo, discorigido, precoDiscorigido, ssd, precoSsd, cooler, precoCooler, fonte, precoFonte, gabinete, precoGabinete) VALUES(${data},'Ryzen 5 4500', '499.9', 'B450M ASUS PRIME', '659.91',  '(2x16) 16GB-T-Force Vulcan 3200Mhz', '898', 'Gigabyte GTX 1660 Super OC 6GB', '1599.99', 'Hd 1TB Seagate Barracuda 7200 Rpm', '269.9', 'Ssd 1TB PNY CS900', '514.89', 'Water Cooler Rise Mode Frost', '329', 'Cooler Master G700 80 Plus Gold', '600', 'Gabinete Gamer Pichau LARK', '492.52')`;
    await mysql.query(sql);
}

async function gamerSave(data){
    sql = `INSERT INTO configuracoes (id, cpu, precoCpu, placamae, precoPlacamae, ram, precoRam, placavideo, precoPlacavideo, discorigido, precoDiscorigido, ssd, precoSsd, cooler, precoCooler, fonte, precoFonte, gabinete, precoGabinete) VALUES(${data},'Ryzen 5 4500', '499.9', 'B450M ASUS PRIME', '659.91',  '16GB-T-Force Vulcan 3200Mhz', '449', 'Gigabyte Radeon RX 6500 XT 4GB', '1299', 'Hd 1TB Seagate Barracuda 7200 Rpm', '269.9', 'Ssd 480GB WD Green', '409.99', 'Cooler Master Hyper 212 ARGB', '179.9', 'CV650 80 Plus Bronze 650W', '429.99', 'Gabinete Gamer Pichau APUS RGB', '299')`;
    await mysql.query(sql);
}

async function estudoSave(data){
    sql = `INSERT INTO configuracoes (id, cpu, precoCpu, placamae, precoPlacamae, ram, precoRam, placavideo, precoPlacavideo, discorigido, precoDiscorigido, ssd, precoSsd, cooler, precoCooler, fonte, precoFonte, gabinete, precoGabinete) VALUES(${data},'Ryzen 3 3200G', '600', 'A320M ASRock', '429.9',  '8GB-HyperX Fury 2666Mhz', '194.92', 'null', '0', 'Hd 1TB Seagate Barracuda 7200 Rpm', '269.9', 'Ssd 240GB Kingston A400', '128.99', 'null', '0', 'Redragon RGPS-400W 80 Plus', '279.9', 'Gabinete Office Alseye Haoffice', '149.9')`;
    await mysql.query(sql);
}
module.exports = {listaPecas, verifica, salva, listaConfigs, exclui, listaPorID, edicaoSave, estudoSave, gamerSave};
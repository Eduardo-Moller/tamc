const mysql = require('./mysql')
const sessionStorage = require('node-sessionstorage')
const bcrypt = require("bcrypt");

async function login(data) {
    sql = `SELECT * FROM usuarios WHERE email = '${data[0]}'`;
    var usuarios = await mysql.query(sql);
    var checkPassword;
    if (usuarios[0] != null) {
            checkPassword = await bcrypt.compare(data[1], usuarios[0].senha)
            const id = usuarios[0].id;
            const nome = usuarios[0].nome;
            sessionStorage.setItem('nome', nome);
            sessionStorage.setItem('id', id);
    }else{
        checkPassword = false;
    }
    return checkPassword;
};

async function registro(data) {
    sql = `INSERT INTO usuarios (nome, email, senha) VALUES ('${data[0]}', '${data[1]}', '${data[2]}')`;
    await mysql.query(sql);
    sql = `SELECT * FROM usuarios WHERE email = '${data[1]}'`;
    user = await mysql.query(sql);
    sessionStorage.setItem('nome', user[0].nome);
    sessionStorage.setItem('id', user[0].id);
    registrarBanco = true;
    return registrarBanco;
};

module.exports = { login, registro };
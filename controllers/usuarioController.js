const usuarioModel = require("../models/usuarioModel");
const bcrypt = require("bcrypt");
const sessionStorage = require('node-sessionstorage');

exports.get = async () => {
    return await usuarioModel.get();
};

exports.login = async (data) => {
    return usuarioModel.login(data);
};

exports.getUser = async () => {
    id = sessionStorage.getItem('id');
    nome = sessionStorage.getItem('nome');
    data = {
        id:id,
        nome:nome
    }
    return data;
};

exports.registro = async (data) => {
    const saltsenha = await bcrypt.genSalt(12)
    const hashsenha = await bcrypt.hash(data[2], saltsenha)
    data[2] = hashsenha;
    return usuarioModel.registro(data);
};

exports.loginVerify = (req, res, next) => {
    if (sessionStorage.getItem('id') === undefined) {
        res.redirect('/login');
    } else {
        next();
    }
};

exports.logOut = (req, res, next) => {
    if (sessionStorage.getItem('id') === undefined) {
        next();
    } else {
        sessionStorage.setItem('id', undefined);
        sessionStorage.setItem('nome', undefined);
        res.redirect('/login');
    }
};



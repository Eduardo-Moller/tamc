function gamer(tipo){
    var id = document.querySelector('#ident').innerHTML;
    fetch(`/compatibilidade/save?id=${id}&tipo=${tipo}`);
}

function edicao(tipo){
    var id = document.querySelector('#ident').innerHTML;
    fetch(`/compatibilidade/save?id=${id}&tipo=${tipo}`);
}

function estudo(tipo) {
    var id = document.querySelector('#ident').innerHTML;
    fetch(`/compatibilidade/save?id=${id}&tipo=${tipo}`);
}

const botao = document.getElementById("botaoAlerta");
const botao1 = document.getElementById("botaoAlerta1");
const botao2 = document.getElementById("botaoAlerta2");
botao.addEventListener("click", ()=>{ exibirEsconder()})
botao1.addEventListener("click", ()=>{ exibirEsconder()})
botao2.addEventListener("click", ()=>{ exibirEsconder()})
const alertaRaiz = document.getElementById("mensagem");

function exibirEsconder(){
    const alerta = document.createElement("div")
    alerta.classList.add("alerta-cadastro")
    alerta.innerHTML = "Salvo com sucesso!"
    alertaRaiz.appendChild(alerta);
    
    setTimeout(() => {
        alerta.classList.add("display-none")
    }, 2000)
}

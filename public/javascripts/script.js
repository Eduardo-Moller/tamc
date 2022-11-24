function enviarPecas() {
    var select = document.getElementById('CpuID');
    var valueCpu = select.options[select.selectedIndex].value;
    var select = document.getElementById('PlacaMaeID');
    var valuePlacaMae = select.options[select.selectedIndex].value;
    var select = document.getElementById('MemoriaRamID');
    var valueMemoriaRam = select.options[select.selectedIndex].value;
    var select = document.getElementById('PlacaVideoID');
    var valuePlacaVideo = select.options[select.selectedIndex].value;
    var select = document.getElementById('DiscoRigidoID');
    var valueDiscoRigido = select.options[select.selectedIndex].value;
    var select = document.getElementById('DiscoSSDID');
    var valueDiscoSSD = select.options[select.selectedIndex].value;
    var select = document.getElementById('CoolerID');
    var valueCooler = select.options[select.selectedIndex].value;
    var select = document.getElementById('FonteAlimentacaoID');
    var valueFonteAlimentacao = select.options[select.selectedIndex].value;
    var select = document.getElementById('GabineteID');
    var valueGabinete = select.options[select.selectedIndex].value;
    if (valueDiscoRigido == "") {
        valueDiscoRigido = "0";
    }
    if (valueDiscoSSD == "") {
        valueDiscoSSD = "0";
    }
    if (valueCooler == "") {
        valueCooler = "0";
    }
    if (valuePlacaVideo == "") {
        valuePlacaVideo = "0";
    }
    let erroArmazenamento = document.querySelector("#erroArmazenamento");
    let erroCamposObrigatorios = document.querySelector("#erroCamposObrigatorios");
    if (valueCpu == "" || valuePlacaMae == "" || valueMemoriaRam == "" || valuePlacaVideo == "" || valueDiscoRigido == "" || valueDiscoSSD == "" || valueCooler == "" || valueFonteAlimentacao == "" || valueGabinete == "") {
        HrefErros()
        erroCamposObrigatorios.classList.remove("display-none");
    } else {
        erroCamposObrigatorios.classList.add("display-none");
        if (valueDiscoSSD == "0" && valueDiscoRigido == "0") {
            HrefErros()
            erroArmazenamento.classList.remove("display-none");
        } else {
            erroArmazenamento.classList.add("display-none");
            fetch(`/compatibilidade/verifica?cpu=${valueCpu}&placamae=${valuePlacaMae}&ram=${valueMemoriaRam}&placavideo=${valuePlacaVideo}`
                + `&discorigido=${valueDiscoRigido}&ssd=${valueDiscoSSD}&cooler=${valueCooler}&fonte=${valueFonteAlimentacao}&gabinete=${valueGabinete}`)
                .then(response => {
                    return response.json();
                }).then(jsonBody => {
                    console.log(jsonBody);
                    let erroCpuPlaca = document.querySelector("#erroCpuPlaca");
                    let erroEnergia = document.querySelector("#erroEnergia");
                    let erroGabinetePlaca = document.querySelector("#erroGabinetePlaca");
                    let erroGabineteFonte = document.querySelector("#erroGabineteFonte");
                    let erroVideo = document.querySelector("#erroVideo");
                    
                    if (!jsonBody.soquete) {
                        HrefErros()
                        erroCpuPlaca.classList.remove("display-none");
                    } else {
                        erroCpuPlaca.classList.add("display-none");
                    }
                    if (!jsonBody.placaMaeTamanhoGabinete) {
                        HrefErros()
                        erroGabinetePlaca.classList.remove("display-none");
                    } else {
                        erroGabinetePlaca.classList.add("display-none");
                    }
                    if (!jsonBody.FonteTamanhoGabinete) {
                        HrefErros()
                        erroGabineteFonte.classList.remove("display-none");
                    } else {
                        erroGabineteFonte.classList.add("display-none");
                    }
                    if (!jsonBody.consumo) {
                        HrefErros()
                        erroEnergia.classList.remove("display-none");
                    } else {
                        erroEnergia.classList.add("display-none");
                    }
                    if (!jsonBody.video) {
                        HrefErros()
                        erroVideo.classList.remove("display-none");
                    } else {
                        erroVideo.classList.add("display-none");
                    }
                    if(jsonBody.video && jsonBody.consumo && jsonBody.FonteTamanhoGabinete && jsonBody.placaMaeTamanhoGabinete && jsonBody.soquete){
                        exibirEsconder();
                    }
                })
        }
    }
}
function exibirEsconder(){
    const alertaRaiz = document.getElementById("mensagem");
    const alerta = document.createElement("div")
    alerta.classList.add("alerta-cadastro")
    alerta.innerHTML = "Salvo com sucesso!"
    alertaRaiz.appendChild(alerta);
    setTimeout(() => {
        alerta.classList.add("display-none")
    }, 2000)
}  

function HrefErros(){
    let position = document.getElementById('erros');
    let cord = position.offsetTop;
    console.log(cord)
    scrollTo(0, cord-100);
}
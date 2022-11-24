let botao = document.querySelectorAll('#botao');

let pc;

for (var i = 0; i < botao.length; i++) {

    botao[i].addEventListener('click', a)
}



function a(e) {
    e.preventDefault()
    console.log(e.target.value);
    fetch(`/usuario/imprimir?id=${e.target.value}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            pc = data[0]
            pTotal = pc.precoCpu+pc.precoPlacamae+pc.precoRam+pc.precoFonte+pc.precoGabinete;
            console.log("data"+data)
            var doc = new jsPDF();
            doc.setFontType('bold')
            doc.text(10, 20, "Configuração salva")
            doc.setFontType('normal')
            altura = 40;
            doc.text(10, altura, "Processador: " + pc.cpu)
            doc.setFontType('bold')
            doc.text(160, altura,"Preço:R$ "+ pc.precoCpu)
            doc.setFontType('normal')
            altura+=10;
            doc.text(10, altura, "Placa mãe: " + pc.placamae)
            doc.setFontType('bold')
            doc.text(160, altura,"Preço:R$ "+ pc.precoPlacamae)
            doc.setFontType('normal')
            altura+=10;
            doc.text(10, altura, "Ram: " + pc.ram)
            doc.setFontType('bold')
            doc.text(160, altura,"Preço:R$ "+ pc.precoRam)
            doc.setFontType('normal')
            altura+=10;
            if(pc.placavideo!="null"){
            pTotal = pTotal+pc.precoPlacavideo;
            doc.text(10, altura, "Placa de vídeo: " + pc.placavideo)
            doc.setFontType('bold')
            doc.text(160, altura,"Preço:R$ "+ pc.precoPlacavideo)
            doc.setFontType('normal')
            altura+=10;
            }
            if(pc.discorigido!="null"){
                pTotal = pTotal+pc.precoDiscorigido;
                doc.text(10, altura, "HD: " + pc.discorigido)
                doc.setFontType('bold')
                doc.text(160, altura,"Preço:R$ "+ pc.precoDiscorigido)
                doc.setFontType('normal')
                altura+=10;
            }
            if(pc.ssd!="null"){
                pTotal = pTotal+pc.precoSsd;
                doc.text(10, altura, "SSD: " + pc.ssd)
                doc.setFontType('bold')
                doc.text(160, altura,"Preço:R$ "+ pc.precoSsd)
                doc.setFontType('normal')
                altura+=10;
            }
            if(pc.cooler!="null"){
                pTotal = pTotal+pc.precoCooler;
                doc.text(10, altura, "COOLER: " + pc.cooler)
                doc.setFontType('bold')
                doc.text(160, altura,"Preço:R$ "+ pc.precoCooler)
                doc.setFontType('normal')
                altura+=10;
            }
            doc.text(10, altura, "Fonte: " + pc.fonte)
            doc.setFontType('bold')
            doc.text(160, altura,"Preço:R$ "+ pc.precoFonte)
            doc.setFontType('normal')
            altura+=10;
            doc.text(10, altura, "Gabinete: " + pc.gabinete)
            doc.setFontType('bold')
            doc.text(160, altura,"Preço:R$ "+ pc.precoGabinete)
            doc.setFontType('normal')
            altura+=10;

            doc.text(10, altura, "O preço total do computador sera de R$: "+Math.round(pTotal))
            doc.output('dataurlnewwindow');
        })
}





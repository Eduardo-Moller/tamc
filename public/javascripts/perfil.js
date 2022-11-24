pagina = localStorage.getItem('view')
titulo = document.querySelector('#NomoComponente');
texto = document.querySelector('#texto');
img = document.querySelector('#largura');
lista1 = document.querySelector('#lista1');
lista2 = document.querySelector('#lista2');
lista3 = document.querySelector('#lista3');
lista4 = document.querySelector('#lista4');
lista5 = document.querySelector('#lista5');
lista6 = document.querySelector('#lista6');
tituloLista = document.querySelector('#tituloLista');

switch (pagina) {
    case 'cpu':
        img.src='/images/pro.jpg';
        titulo.innerHTML="CPU";
        tituloLista.innerHTML="Abaixo temos uma lista com os principais soquetes";
        texto.innerHTML="O processador é o componente de hardware responsável por processar dados e transformar em informação. Ele se conecta com a placa mãe por meio de um soquete. Sempre é bom lembrar de verficar se o soquete do processador é compativel com o da placa, para evitar conflitos, ele é uma peça ao qual você deve priorizar em uma configuração focada em gravação e edição de video ou até para jogar  ";
        lista1.innerHTML="Processadores de 9º geração intel tem um soquete LGA-1151";
        lista2.innerHTML="Processadores de 10º geração intel tem um soquete LGA-1200";
        lista3.innerHTML="Processadores de 11º geração intel tem um soquete LGA-1200";
        lista4.innerHTML="Processadores de 12º geração intel tem um soquete LGA-1700";
        lista5.innerHTML="Processadores de 1º a 6º geração amd tem um soquete AM4";
        lista6.innerHTML="Processadores de 7º geração amd tem um soquete AM5";
      break;

    case 'placamae':
        img.src='/images/mae.png';
        titulo.innerHTML="Placa-Mãe";
        texto.innerHTML="As placas-mãe têm como sua principal função ligar e conectar todas as peças de computador, como a memória ram, disco rígido, placa de vídeo e entre outras peças, ela geralmente é instalada na lateral de gabinete. Quando você for escolher uma placa mãe deve se atentar a algumas informações como o soquete de processador e a tecnologia suportada de memória.";
        tituloLista.innerHTML="Abaixo listamos algumas placas mães e seus respectivos soquetes";
        lista1.innerHTML="H410, H510 e B560 apresentam um soquete LGA-1200";
        lista2.innerHTML="H610, B660 e Z690 apresentam um soquete LGA-1700";
        lista3.innerHTML="A320, A520, B550 e X-670 apresentam um soquete AM4";
      break;

    case 'ram':
        img.src='/images/Memoria.jpg';
        titulo.innerHTML="Memória ram";
        texto.innerHTML="A memória ram é representada pela sigla ram, ao qual vem da língua inglesa significando “memória de acesso aleatório”, esta memória basicamente armazena dados temporariamente, ela é muito mais rápida que uma memória de um disco rígido convencional, mas não conseguimos armazenar dados de forma direta nela, os dados lá armazenados são apenas armazenados pelo próprio computador, estas memórias possuem uma frequência que determina a sua velocidade e uma quantidade de gigabytes que determina a sua capacidade.";
        tituloLista.innerHTML="Principais tecnologias de memória ram";
        lista1.innerHTML="DDR";
        lista2.innerHTML="DDR2";
        lista3.innerHTML="DDR3";
        lista4.innerHTML="DDR4";
        lista5.innerHTML="DDR5";
      break;

    case 'video':
        img.src='/images/placav.jpg';
        titulo.innerHTML="Placa de Vídeo";
        texto.innerHTML="A placa de vídeo ou GPU como é conhecida internacionalmente é a peça responsável por desenhar tudo que você está vendo na tela de seu monitor, ela é uma peça ao qual pode ser opcional para o funcionamento de seu computador, tendo em vista em que alguns processadores atuais contém uma tecnologia de renderização gráfica, mas ela é estritamente necessária em casos  de executar tarefas ao quais necessitam de uma renderização gráfica um pouco mais elevada em seguida listamos algumas atividades em que é de grande importância o seu computador:";
        lista1.innerHTML="Modelagem de objetos 3d";
        lista2.innerHTML="Renderização e edição de vídeo";
        lista3.innerHTML="Jogos digitais";
        lista4.innerHTML="Ultilização de resoluções de alta definição";
      break;

    case 'hd':
        img.src='/images/hdd.png';
        titulo.innerHTML="Disco Rígido";
        texto.innerHTML="O disco rígido é um dispositivo de armazenamento, ao qual serve para armazenar todos os dados de usuário e de sistema, é ele que guarda para você os seus arquivos, aplicativos fotos e vídeos, estes discos são divididos pela sua capacidade de armazenamento, alguns possuem 1 ou até 10 terabytes de armazenamento, uma boa média de armazenamento para um usuário comum é de 1 TB (Terabyte) de dados, mas se você for editar vídeos que têm um grande tamanho de arquivo, talvez será necessário 2 ou até 3 terabytes. ";
      break;

    case 'ssd':
        img.src='/images/ssds.png';
        titulo.innerHTML="SSD";
        texto.innerHTML="O SSD é um componente de armazenamento, sua sigla vem de “unidade em estado sólido”, ele é um concorrente direto do disco rígido, ele normalmente têm uma menor capacidade, mas apresenta uma grande melhoria na questão da velocidade de leitura e gravação de dados.";
      break;

    case 'cooler':
        img.src='/images/coolerR.png';
        titulo.innerHTML="Cooler";
        texto.innerHTML="O cooler têm como sua principal função resfriar o processador, seu funcionamento é baseado em um sistema de dissipação de calor através de um ferro de alta condutividade térmica, enquanto um micro ventilador, ou até a água entra em contato com esses dissipador para resfriá lo, assim resfriando um pouco o processador.";
        tituloLista.innerHTML="Alguns tipos de cooler:";
        lista1.innerHTML="Air Cooler";
        lista2.innerHTML="Water Cooler";
        lista3.innerHTML="Heat pipe Cooler";
      break;

    case 'fonte':
        img.src='/images/fontee.png';
        titulo.innerHTML="Fonte";
        texto.innerHTML="A fonte de alimentação ou como é conhecida internacionalmente PSU que vem de uma sigla em inglês, que significa  “Unidade de Alimentação de Energia”, ela é o componente responsável por converter a energia presente na tomada para a energia em que as peças de computador suportam, ela alimenta energeticamente todos os componentes, as fontes também garantem uma certa segurança ao hardware em casos de pico de energia, assim evitando que outros componentes sejam queimados por picos energéticos vindos de raios ou outras situações de picos energéticos, é sempre importante antes de montar sua configuração ter uma base de quanta energia cada componente escolhido por você consome, para que acabe por escolher uma fonte ao qual suporta fornecer essa quantidade de energia.";
      break;

    case 'gabinete':
        img.src='/images/gabi.png';
        titulo.innerHTML="Gabinete";
        texto.innerHTML="O gabinete é basicamente o componente responsável por comportar todas as peças em seu interior, trazendo uma maior segurança a elas, em batidas e organizando sua estruturas, um bom gabinete deve ter um bom sistema de circulação de ar, pois se não os componentes pode esquentar, o que pode acabar ocasionando lentidão, ao comprar nosso gabinete devemos ter já escolhido a fonte de alimentação e placa mãe do computador, pois existem diversos tamanhos de gabinetes atualmente no mercado, a lista a seguir mostra alguns desses tamanhos em ordem de maior ao menor:";
        lista1.innerHTML="E-ATX";
        lista2.innerHTML="ATX";
        lista3.innerHTML="Micro-ATX";
        lista4.innerHTML="Mini-ITX";
      break;
    
    default:
      img.src='/images/pro.jpg';
      titulo.innerHTML="CPU";
      texto.innerHTML="O processador é responsável por realizar todas as tarefas de conexão e interação entre as peças, ele é basicamente o cérebro de nosso computador, é uma peça com muita importância para o computador, então é uma peça ao qual deve ser prezada por uma boa qualidade. Para meios de funcionamento o processador conta com alguns núcleos, aos quais são responsáveis por executarem as tarefas.";
  }

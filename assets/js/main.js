function relogio() {   //CRIAR UMA FUNCAO RELOGIO PARA TIRAR TODAS AS SUAS EXECUCOES DO ESCOPO GLOBAL
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000)      //   PORQUE NO JS SAO MS, ENTAO PARA OBTER SEGUNDOS = X1000
        return data.toLocaleTimeString('pt-BR', {   // FORMATAR NO PADRAO BR
            hour12: false,                          // TIRAR O AM/PM
            timeZone: 'GMT'                         // COLOCAR NO FUSO DA INGLATERRA, PARA SER 00:00 DO DIA 0
        });
    }

    //  ATRAVES DE CLASSES BUSCAR OS ELEMENTOS DO HTML
    const relogio = document.querySelector('.relogio');
    //const iniciar = document.querySelector('.iniciar'); NAO SERA NECESSARIO SELECIONAR AQUI, POIS O "e.target"
    //const pausar = document.querySelector('.pausar');   JA IRA SELECIONAR AS CLASSES AUTOMATICAMENTE AO SEREM
    //const zerar = document.querySelector('.zerar');     CLICADAS!
    let segundos = 0;                               // CRIAR VARIAVEL 0(ONDE IRA COMECAR A CONTAGEM DO RELOGIO)
    let timer;                                      // CRIAR VARIAVEL TIMER

    function iniciaRelogio() {                      // CRIAR FUNCAO PARA INICIAR O RELOGIO
        timer = setInterval(function () {      //CRIAR O INICIO DA CONTAGEM DO INTEVALO E ASSIM ATUALIZAR A VARIAVEL TIMER
            segundos++;                             // INCREMENTO DE SEGUNDOS
            relogio.innerHTML = criaHoraDosSegundos(segundos); // ESCREVER E MUDAR O HTML
        }, 1000);                                   // INTERVALOS DE 1 SEGUNDO
    }

    /* iniciar.addEventListener('click', function (event) {
        relogio.classList.remove('pausado');       // ENQUANTO ESTIVER INICIADO, REMOVER A CLASSE PAUSADO(COR VERMELHA)
        clearInterval(timer);                      // PARAR O INTERVAL TIMER
        iniciaRelogio();                           // INICIAR A CONTAGEM
    });
    
    pausar.addEventListener('click', function (event) {
        relogio.classList.add('pausado');           // ENQUANTO ESTIVER PAUSADO, ADICIONAR A CLASSE PAUSADO(COR VERMELHA)
        clearInterval(timer);                       // PARAR O INTERVAL TIMER
    });
    
    zerar.addEventListener('click', function (event) {
        relogio.classList.remove('pausado');        // ENQUANTO ESTIVER ZERADO, REMOVER A CLASSE PAUSADO(COR VERMELHA)
        clearInterval(timer);                       // PARAR O INTERVAL TIMER
        relogio.innerHTML = '00:00:00';             // ESCREVER E MUDAR O HTML
        segundos = 0;                               // PARA EVITAR QUE APOS ZERAR, O INICIAR INICIE DE ONDE PAROU
    });
    
    DESSE MODO ACIMA ESTAMOS CRIANDOS VARIOS EVENTOS ESCUTADORES DE CLICK PARA DIFERENTES FUNCOES, SE TIVESSE MUITO MAIS FUNCOES, TODOS ESSES EVENTOS CRIARIAM PROBLEMAS PERFORMATICOS NO PROGRAMA, COMO LENTIDAO, ETC... ENTAO A MELHOR SOLUCAO SERIA CRIAR APENAS UM EVENT LISTENER E COM O "e.target" (QUE INDICA O LOCAL QUE FOI CLICADO) EXECUTAR AS FUNCOES!
    */

    document.addEventListener('click', function (e) {               //APENAS UM EVENTO ESCUTADOR
        const elementos = e.target;

        if (elementos.classList.contains('iniciar')) {       // SE ELEMENTOS(LUGAR CLICADO) CONTER A CLASSE INICIAR, EXECUTAR:
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }

        if (elementos.classList.contains('pausar')) {      // SE ELEMENTOS(LUGAR CLICADO) CONTER A CLASSE PAUSAR, EXECUTAR:
            relogio.classList.add('pausado');
            clearInterval(timer);
        }

        if (elementos.classList.contains('zerar')) {      // SE ELEMENTOS(LUGAR CLICADO) CONTER A CLASSE ZERAR, EXECUTAR:
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    });
}
relogio(); // CHAMAR A FUNCAO NO ESCOPO GLOBAL FORA DO SEU ESCOPO!
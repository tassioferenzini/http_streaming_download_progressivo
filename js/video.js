function play() {
    var video1 = document.getElementById("Video1");
    var video2 = document.getElementById("Video2");
    var button = document.getElementById("play");
    if (video1.paused) {
        video1.play();
        video2.play();
        button.textContent = "||";
    } else {
        video1.pause();
        video2.pause();
        button.textContent = ">";
    }
//video1.addEventListener('timeupdate', function(e) {
//  document.getElementById('timeDisplay').innerHTML = Math.floor(e.target.currentTime);
//}, true);
}

function mudo() {
    var video1 = document.getElementById("Video1");
    var video2 = document.getElementById("Video2");
    if (video1.muted) {
        video1.muted = false;
    } else {
        video2.muted = true;
    }
}

function inverter1() {
    var video1 = document.getElementById("Video1");
    var video2 = document.getElementById("Video2");
    video1.style.position = "absolute";
    video1.style.top = "40px";
    video1.style.left = "60px";
    video1.style.width = "300px";
    video1.style.border = "1px solid red";
    video1.style.zIndex = "100";
    video1.muted = true;
    video2.style.position = "absolute";
    video2.style.top = "40px";
    video2.style.left = "10px";
    video2.style.width = "1000px";
    video2.style.border = "0px solid red";
    video2.style.zIndex = "99";
    video2.muted = false;
}

function inverter2() {
    var video2 = document.getElementById("Video1");
    var video1 = document.getElementById("Video2");
    video1.style.position = "absolute";
    video1.style.top = "40px";
    video1.style.left = "60px";
    video1.style.width = "300px";
    video1.style.border = "1px solid red";
    video1.style.zIndex = "100";
    video1.muted = true;
    video2.style.position = "absolute";
    video2.style.top = "40px";
    video2.style.left = "10px";
    video2.style.width = "1000px";
    video2.style.border = "0px solid red";
    video2.style.zIndex = "99";
    video2.muted = false;
}


//chama todas as funçõe da classe
function carregar() {
    tempo_carreg_pag();
    latencia_rede();
    time_connect();
    time_redirect();
    time_request();
    time_resolv_dns();
    tempo_rederizacao();
    time_load();
    //window.setInterval(latencia_rede, 1000);
}


var start = new Date().getTime();
//latencia total da rede
function latencia_rede() {
    var latenciarede = performance.timing.responseEnd - performance.timing.fetchStart;
    //var now = new Date().getTime();
    //var latenciarede = now - start;
    document.getElementById('inf1').innerHTML = "Tempo de latencia total da rede: " + latenciarede + " ms";
    ;
}

//tempo total de resposta de uma requisição feita para o ervidor
function time_request() {
    var time_request = performance.timing.responseEnd - performance.timing.requestStart;
    document.getElementById('inf2').innerHTML = "Tempo total da requisição ao servidor: " + time_request + " ms";
}


//tempo total de resposta de uma reedirecionamento
function time_redirect() {
    var time_redirect = performance.timing.redirectEnd - performance.timing.redirectStart;
    document.getElementById('inf3').innerHTML = "Tempo total de redirecionamento: " + time_redirect + " ms";
}


//tempo total de conexão
function time_connect() {
    var time_connect = performance.timing.connectEnd - performance.timing.connectStart;
    document.getElementById('inf4').innerHTML = "Tempo total da conexão: " + time_connect + " ms";
}

//tempo total de resolução DNS
function time_resolv_dns() {
    var time_dns = performance.timing.domainLookupEnd - performance.timing.domainLookupStart;
    document.getElementById('inf5').innerHTML = "Tempo total da resolução DNS: " + time_dns + " ms";
}

//tempo total de renderização
function tempo_rederizacao() {
    var time_const = performance.timing.domInteractive - performance.timing.domLoading;
    document.getElementById('inf6').innerHTML = "Tempo da renderização da DOM: " + time_const + " ms";
}

//tempo total de carregamento da pagina
function tempo_carreg_pag() {
    var time_pag = performance.timing.domComplete - performance.timing.domLoading;
    document.getElementById('inf7').innerHTML = "Tempo de carregamento da pagina incluindo arquivos externos: " + time_pag + " ms";
}

//tempo total de carregamento da pagina
function time_load() {
    var time_load = (performance.timing.loadEventEnd - performance.timing.loadEventStart);
    //document.getElementById('inf8').innerHTML = "Tempo de carregamento de scripts: " + time_load + "  ms";
}

//Tempo de carregamento da página a partir do momento que a página é retornada do servidor
function tempo_carreg_pag() {
    var temp_carreg_pag = (performance.timing.loadEventEnd - performance.timing.navigationStart);
//document.getElementById('inf9').innerHTML = "Tempo de carregamento da pagina perceido pelo usuario: " + temp_carreg_pag + " ms";
}


let vencedor = document.getElementById("vencedor");
let botaoChecar = document.querySelector("#botaoVerificar");
let botaoLimpar = document.querySelector("#limparJogo");

botaoLimpar.onclick = function (){
    document.querySelector("#jogador1").value = "";
    document.querySelector("#jogador2").value = "";
    vencedor.textContent = "Vencedor: ";
}

botaoChecar.onclick = function(){
    let jogador1 = document.querySelector("#jogador1").value;
    let jogador2 = document.querySelector("#jogador2").value;
    let jog1 = "";
    let jog2 = "";
    jog1 = jogador1;
    jog1 = jog1.toLowerCase();
    jog2 = jogador2;
    jog2 = jog2.toLowerCase();
    let resultados = ["pedra","papel", "tesoura"];

    if(resultados.indexOf(jog1) == -1 || resultados.indexOf(jog2) == -1){
        vencedor.textContent = "Jogo encerrado";
    } else if (jog1==jog2){
        vencedor.textContent = "Jogo empatado!"; 
    } else if (
        (jog1 === 'pedra' && jog2 === 'tesoura') ||
        (jog1 === 'papel' && jog2 === 'pedra') ||
        (jog1 === 'tesoura' && jog2 === 'papel')
    ) {        
        vencedor.textContent = "Jogador 1 VENCE!"; 
    } else {
        vencedor.textContent = "Jogador 2 VENCE!"; 
    }

}


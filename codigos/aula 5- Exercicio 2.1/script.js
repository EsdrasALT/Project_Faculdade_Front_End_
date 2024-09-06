let botaoEnviar = document.querySelector("#botaoEnviar");
let botaoGerar = document.querySelector("#botaoGerar");
let botaoLimpar = document.querySelector("#botaoLimpar");

function limparCampo(){
    document.querySelector("#nomeEmpregado").value = "";
    document.querySelector("#numeroPeças").value = "";
}

botaoLimpar.onclick = limparCampo;

botaoEnviar.onclick = function () {
    let nomeDigitado = document.querySelector("#nomeEmpregado").value;
    let nomeFuncionario = nomeDigitado.trim();

    let qtdeDigitado = document.querySelector("#numeroPeças").value;
    let quantidadePecas = Number(qtdeDigitado);

    if (nomeFuncionario.length == 0  || quantidadePecas == 0){
        alert("Os campos não podem ser vazios! ");
        limparCampo();
        return;
    }   

    if (quantidadePecas <= 0){
        alert("A quantidade de peças não pode ser 0! ");
        limparCampo();
        return;
    }

    let salario = 0.0;

    if(quantidadePecas <= 200){
        salario = quantidadePecas * 2.0;
        alert("salario ate 200 peças: " + salario);
    } else if (quantidadePecas <= 400){
        salario = quantidadePecas * 2.3;
        alert("salario ate 400 peças: " + salario);
    } else {
        salario = quantidadePecas * 2.5;
        alert("salario para mais de 400 peças: " + salario);
    }

    alert("tudo certo por aqui!");

}

botaoGerar.onclick = function () {

}
let botaoEnviar = document.querySelector("#botaoEnviar");
let botaoGerar = document.querySelector("#botaoGerar");
let botaoLimpar = document.querySelector("#botaoLimpar");

function limparCampo(){
    document.querySelector("#nomeEmpregado").value = "";
    document.querySelector("#numeroPeças").value = "";
}

botaoLimpar.onclick = limparCampo;

function validarDados(nome,qtde){

    if (nome.length == 0  || qtde == 0){
        alert("Os campos não podem ser vazios! ");
        limparCampo();
        return -1;
    }   

    if (qtde <= 0){
        alert("A quantidade de peças não pode ser 0! ");
        limparCampo();
        return -1;
    }

    let salario = 0.0;

    if(qtde <= 200){
        salario = qtde * 2.0;
        // alert("salario ate 200 peças: " + salario);
    } else if (qtde <= 400){
        salario = qtde * 2.3;
        // alert("salario ate 400 peças: " + salario);
    } else {
        salario = qtde * 2.5;
        // alert("salario para mais de 400 peças: " + salario);
    }

    return salario;
}

botaoEnviar.onclick = function(){
        
    let nomeDigitado = document.querySelector("#nomeEmpregado").value;
    let nomeFuncionario = nomeDigitado.trim();

    let qtdeDigitado = document.querySelector("#numeroPeças").value;
    let quantidadePecas = Number(qtdeDigitado);

    let validado = validarDados(nomeFuncionario,quantidadePecas);

    if(validado == -1){
        return;
    }
    

}

function imprimirRelatorio(contador){

    document.getElementById("relatorioBodyNome").innerHTML = nomeFuncionario;
    document.getElementById("relatorioBodySalario").innerHTML = validado;
}
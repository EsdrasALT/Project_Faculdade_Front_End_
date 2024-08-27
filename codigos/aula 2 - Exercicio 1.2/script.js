// let botaoEnviar = document.querySelector("#botaoEnviar");
let usuarioGerado = document.getElementById("#usuarioGerado");
let senhaGerada = document.getElementById("#senhaGerada");
let botaoGerarSenha = document.querySelector("#botaoGerarSenha");
let botaoLimparSenha = document.querySelector("#botaoLimparSenha");

function limparSenha(){
    document.querySelector("#nome").value = "";
    usuarioGerado.textContent = "Usuario:";
    senhaGerada.textContent = "Senha:";
}

botaoLimparSenha.onclick = limparSenha;

botaoGerarSenha.onclick = function(){
    
    let nomeDigitado = document.querySelector("#nome").value;
    let nomeStr = "";
    nomeStr = nomeDigitado.trim(); //.trim() procura e remove espaços no começo e fim
    let nomeTamanho = nomeStr.length;

    //- tenha o tamanho mínimo de 15 caracteres; 
    if (nomeTamanho < 15){
        alert("Minimo 15 caracteres");
        limparSenha();
        return;
    }
    
    if (nomeStr.indexOf("  ") != -1){
        alert("Não deve haver mais de 1 espaço entre os nomes");
        limparSenha();
        return;
    }

    let index = 0;
    let letras = [];

    index = nomeStr.indexOf(" "); // Gerador de SenhaGerador de Senha == 7
    letras[0] = nomeStr.slice(0,1)
    letras[1] = nomeStr.slice(index+1,index+2);
    alert(letras[0]);
    alert(letras[1]);




    
    
    
    
    document.getElementById("usuarioGerado").textContent = nomeMaisculo;
}
let botaoGerarSenha = document.querySelector("#botaoGerarSenha");
let botaoLimparSenha = document.querySelector("#botaoLimparSenha");

function limparSenha(){
    document.querySelector("#nome").value = "";
    document.getElementById("usuarioGerado").textContent = "Usuario: ";
    document.getElementById("senhaGerada").textContent = "Senha:";
}

botaoLimparSenha.onclick = limparSenha;

botaoGerarSenha.onclick = function(){
    
    let nomeDigitado = document.querySelector("#nome").value;
    let nomeStr = "";
    nomeStr = nomeDigitado.trim(); //.trim() procura e remove espaços no começo e fim

    let login = "";
    let senha = "";
   ;

    //- tenha o tamanho mínimo de 15 caracteres; 
    if (nomeStr.length < 15){
        alert("Minimo 15 caracteres");
        limparSenha();
        return;
    }
    
    if (nomeStr.indexOf("  ") != -1){
        alert("Não deve haver mais de 1 espaço entre os nomes");
        limparSenha();
        return;
    }

    let temSobrenome = false;
    // Verifica se há pelo menos um sobrenome
    for (let i = 0; i < nomeStr.length; i++) {
        if (nomeStr[i] === " ") {
            temSobrenome = true;
            break; 
        }
    }

    if (!temSobrenome) {
        alert("Deve haver pelo menos um sobrenome.");
    }

    let novaPalavra = true
    // Gera o login pegando a primeira letra de cada nome
    for (let i = 0; i < nomeStr.length; i++) {
        if (nomeDigitado[i] !== " " && novaPalavra) {
            login += nomeDigitado[i].toUpperCase();
            novaPalavra = false; 
        } else if (nomeDigitado[i] === " ") {
            novaPalavra = true;
        }
    }

    for (let i =0;i<login.length;i++){
        let codigoAscii = login.charCodeAt(i);
        senha += codigoAscii.toString()[0];
    }    

    document.getElementById("usuarioGerado").textContent = "Usuario: " + login;
    document.getElementById("senhaGerada").textContent = "Senha: " + senha;
}
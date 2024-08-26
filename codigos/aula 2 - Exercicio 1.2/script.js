// let botaoEnviar = document.querySelector("#botaoEnviar");
let usuarioGerado = document.getElementById("#usuarioGerado");
let senhaGerada = document.getElementById("#senhaGerada");
let botaoGerarSenha = document.querySelector("#botaoGerarSenha");
let botaoLimparSenha = document.querySelector("#botaoLimparSenha");

botaoLimparSenha.onclick = function botaoLimparSenha(){
    alert("funcao botaoLimparSenha()");
    document.querySelector("#nome").value = "";
    usuarioGerado.textContent = "Usuario:";
    senhaGerada.textContent = "Senha:";
}

// function limparSenha() {
//     alert("funcao limparSenha()");
//     botaoLimparSenha();
//     //chamada para a função não ocorre
// }

// botaoEnviar.onclick = function (){

// }

function validarNome() {   
    
    let nomeDigitado = document.querySelector("#nome").value;
    let nomeStr = "";
    nomeStr = nomeDigitado;    
    let nomeTamanho = nomeStr.length;

    //- tenha o tamanho mínimo de 15 caracteres; 
    if (nomeTamanho < 15){
        alert("Minimo 15 caracteres");
        limparSenha();
    }

    //- não deve existir caracteres espaço antes do primeiro nome; 
    if (nomeStr.indexOf(" ") == 0){
        alert("Não pode conter espaço no inicio do nome!");
        limparSenha();
    } 

    //-deve existir apenas 1 espaço entre o nome e sobrenomes; 
    if (nomeStr.indexOf("  ") != -1){
        alert("Não deve haver mais de 1 espaço entre os nomes");
        limparSenha();
    }



    if (true) {
        let indexPrimeiroNome = nomeStr.indexOf(" "); // Procurar o espaço
        if (indexPrimeiroNome !== -1) { // Verifica se há um espaço
            let primeiroNome = nomeStr.slice(0, indexPrimeiroNome); // Cortar a string do index 0 até o espaço
            alert("O primeiro nome é: " + primeiroNome);
            
            let segundoNomeTemp = nomeStr.slice(indexPrimeiroNome + 1); 
            let indexSegundoNome = segundoNomeTemp.indexOf(" ");
            
            if (indexSegundoNome !== -1) { // Verificar se há um espaço
                let segundoNome = segundoNomeTemp.slice(0, indexSegundoNome); // Corta a string do index 0 ate o espaço
                alert("O sobrenome é: " + segundoNome);
            } else {
                alert("Sobrenome não encontrado ou único nome fornecido.");
            }
        } else {
            alert("Nome completo não fornecido.");
        }
    }





    // alert("Nome recebido: " + nomeStr);
    // nomeStr = nomeStr.toLocaleUpperCase();
    // alert("Nome modificado: " + nomeStr);

    return nomeStr;

}

botaoGerarSenha.onclick = function(){
    let nome = validarNome();

    do {
        for (let i; i<tamanhoNome;i++){

        }

    } while (true);
    
    
    
    
    document.getElementById("usuarioGerado").textContent = nomeMaisculo;
}
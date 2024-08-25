// let botaoEnviar = document.querySelector("#botaoEnviar");
let usuarioGerado = document.getElementById("#usuarioGerado");
let senhaGerada = document.getElementById("#senhaGerada");
let botaoGerarSenha = document.querySelector("#botaoGerarSenha");
let botaoLimparSenha = document.querySelector("#botaoLimparSenha");

botaoLimparSenha.onclick = function (){
    document.querySelector("#nome").value = "";
    usuarioGerado.textContent = "Usuario:";
    senhaGerada.textContent = "Senha:";
}

// botaoEnviar.onclick = function (){

// }



function validarNome() { 
    let name = document.querySelector("#nome").value;
    let tamanhoNome = name;

    if(tamanhoNome < 15){
        alert("Nome deve ter 15 caracteres");
        exit(1);
    }

    

    return name;
}

botaoGerarSenha.onclick = function(){
    let nome = validarNome();    
    let nomeMaisculo = nome.toUpperCase();
    let tamanhoNome = nomeMaisculo.length();

    do {
        for (let i; i<tamanhoNome;i++){

        }

    } while (true);
    
    
    
    
    document.getElementById("usuarioGerado").textContent = nomeMaisculo;
}
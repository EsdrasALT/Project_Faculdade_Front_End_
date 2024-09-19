let botaoEnviarDados = document.querySelector("#botaoEnviarDados");
let botaoLimparCampos = document.querySelector("#botaoLimparCampos");

function limparSenha(){
    console.log("funcao limpar");
    document.getElementById("nomeEmpregado").textContent = "";
    document.getElementById("numeroPecas").textContent = "";
}

botaoLimparCampos.onclick = limparSenha;

botaoEnviarDados.onclick = function(){

}
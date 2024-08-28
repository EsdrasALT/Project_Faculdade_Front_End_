let botaoVerificarCPF = document.querySelector("#botaoVerificarCPF");
let botaoLimparCPF = document.querySelector("#botaoLimparCPF");

function limparCPF(){
    document.querySelector("#CPF").value = "";
    document.getElementById("CPF_Digitado").textContent = "CPF digitado: ";
}

botaoLimparCPF.onclick = limparCPF;

// function validarCaracteres(char){
//     return /^\d$/.test(char);
// }

botaoVerificarCPF.onclick = function(){
    let CPF_Digitado = document.querySelector("#CPF").value;

    if (CPF_Digitado.length < 11){
        alert("Numeros faltando, CPF deve haver 11 caracteres");
        limparCPF();
        return;
    } else if (CPF_Digitado.length >= 12){
        alert("Numero a mais, CPF deve haver 11 caracteres");
        limparCPF();
        return;
    }

    for(let i=0; i<CPF_Digitado.length;i++){
        if(CPF_Digitado.charCodeAt(i) < 48 || CPF_Digitado.charCodeAt(i) > 57){
            alert("Não podem haver letras");
        } 
    }

    let soma = 0;
    let cont = 1;
    for(let i=1; i<=9;i++){        
        soma += (cont * CPF_Digitado[i]);

        alert(cont + "+" + CPF_Digitado[i] + "=" + soma);

        cont++;
    }





}

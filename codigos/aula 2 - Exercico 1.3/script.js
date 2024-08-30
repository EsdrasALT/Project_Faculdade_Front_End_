let botaoVerificarCPF = document.querySelector("#botaoVerificarCPF");
let botaoLimparCPF = document.querySelector("#botaoLimparCPF");

function limparCPF(){
    document.querySelector("#CPF").value = "";
    document.getElementById("CPF_Digitado").textContent = "CPF digitado: ";
}

botaoLimparCPF.onclick = limparCPF;

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
            return;
        } 
    }

    let CPF = 0;
    CPF = CPF_Digitado;
    let cont=1;
    let decimoDigito=0;
    for(let i=0; i<10;i++){        
        decimoDigito += (cont * CPF[i]);
        cont++;
    }

    let primeiroDigitoVerificador = decimoDigito % 11;

    if(primeiroDigitoVerificador == 10){
        primeiroDigitoVerificador = 0;
    }

    let concat_CPF = Number(String(CPF) + String(primeiroDigitoVerificador));
    alert(concat_CPF.toString().length + " - " + concat_CPF);

    let ultimoDigito=0;
    for(let i=0;i<=10;i++){
        ultimoDigito += (i * CPF[i]);
    }





}

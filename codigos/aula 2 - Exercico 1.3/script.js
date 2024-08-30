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
            limparCPF();
            return;
        } 
    }

    let CPF = 0;
    CPF = CPF_Digitado;
    let cont=1;
    let decimoDigito=0;
    for(let i=0; i<9;i++){        
        decimoDigito += (cont * CPF[i]);
        cont++;
    }

    alert("Multiplicação cont * cpf = " + decimoDigito);
    let primeiroDigitoVerificador = decimoDigito % 11;
    alert("Resto da divisão por 11" + primeiroDigitoVerificador);

    if(primeiroDigitoVerificador == 10){
        primeiroDigitoVerificador = 0;
    }

    alert("CPF digitado posição XXX.XXX.XXX.N: " + CPF[9]);
    alert("CPF gerado: " + primeiroDigitoVerificador);

    if(CPF[9] != primeiroDigitoVerificador){
        alert("CPF Incorreto - O digito N do CPF não confere (XXX.XXX.XXX.N)")
        limparCPF();
        return;
    }

    alert("verificar ultimo digito");
    let ultimoDigito=0;
    for(let i=0;i<10;i++){
        ultimoDigito += (i * CPF[i]);
        alert(i + " * " + CPF[i] + " = " + ultimoDigito);
    }

    // alert("Multiplicação cont * cpf = " + decimoDigito);
    // alert("Resto da divisão por 11" + primeiroDigitoVerificador);
    // alert("CPF digitado posição XXX.XXX.XXX.N: " + CPF[9]);
    // alert("CPF gerado: " + primeiroDigitoVerificador);

    let segundoDigitoVerificador = ultimoDigito % 11;

    if(segundoDigitoVerificador == 10){
        segundoDigitoVerificador = 0;
    }

    if(CPF[10] != segundoDigitoVerificador){
        alert("CPF Incorreto - O digito N do CPF não confere (XXX.XXX.XXX.XN)")
        limparCPF();
        return;
    }
    
    //14538220620
    //145.382.206-20






}

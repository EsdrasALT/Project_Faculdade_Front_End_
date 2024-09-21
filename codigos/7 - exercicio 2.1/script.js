let dados = {
    nome: [],
    salario: []
}

let botaoEnviarDados = document.getElementById("botaoEnviarDados");
let botaoExibirRelatorio = document.getElementById("botaoExibirRelatorio"); 
let relatorio = document.getElementById("relatorio");
let totalSalarios = 0;
let numEmpregados = 0;

botaoEnviarDados.onclick = function(){
    let nomeEmpregado = document.querySelector("#nomeEmpregado").value;
    let numeroPecas = document.querySelector("#numeroPecas").value;
    let salario = 0;
    valido = false;
    if (nomeEmpregado == '' || numeroPecas == ''){
        relatorio.innerHTML = "<h4> Digitação obrigatória do Nome e Num. Pecas </h4>";
    } else if (numeroPecas <= 0){
        relatorio.innerHTML = "<h4> Num. Pecas deve ser maior que zero </h4>";
    } else {
        valido = true;
        relatorio.innerHTML = "";
    }

    if(valido){
        dados.nome.push(nomeEmpregado);
        salario = calcularSalario(numeroPecas);
        dados.salario.push(salario);
        totalSalarios += Number(salario);
        numEmpregados++;
        document.querySelector("#nomeEmpregado").value = "";
        document.querySelector("#numeroPecas").value = "";
        document.querySelector("#nomeEmpregado").focus();
    }
}

function calcularSalario(pecas){
    let salario = 0;
    if (pecas <= 200){
        salario = 2 * pecas;
    } else if (pecas <= 400){
        salario = 2.30 * pecas;
    } else {
        salario = 2.50 * pecas;
    }
    return salario.toFixed(2); // toFixed(2) faz o número ter apenas 2 casa decimais
}

let lista = document.createElement("ul");
botaoExibirRelatorio.onclick = function() {
    // título do relatório
    relatorio.innerHTML = "<h4>  Nome &nbsp &nbsp &nbsp Salario </h4>";

    for (let x = 0 ; x < dados.nome.length ; x++){   
        let linha = document.createElement("li");
        linha.innerHTML = dados.nome[x] + " &nbsp &nbsp &nbsp " + dados.salario[x] ;
        document.body.append(linha);
    }

    let totalSal= document.createElement("h4");
    totalSal.innerHTML = "Total de Salários: " + totalSalarios.toFixed(2)
    document.body.append(totalSal);
    
    let mediaSal = document.createElement("h4");
    mediaSal.innerHTML = "Media de Salários: " + (totalSalarios / numEmpregados).toFixed(2);
    document.body.append(mediaSal);
}


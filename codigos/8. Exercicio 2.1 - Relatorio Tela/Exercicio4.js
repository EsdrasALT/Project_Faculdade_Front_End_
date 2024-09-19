let dados = { 
    nome: [],
    salario: []
}
let botaoIncluir = document.getElementById("incluir");
let botaoExibirRelatorio = document.getElementById("exibir-relatorio");
let relatorio = document.getElementById("relatorio");
let totalSalarios = 0;
let numEmpregados = 0;

botaoIncluir.onclick = function() {
    let nome = document.querySelector("#nome").value;
    let numPecas = document.querySelector("#numPecas").value;
    let salario = 0;
    valido = false;
    if (nome == '' || numPecas == ''){
        relatorio.innerHTML = "<h4> Digitação obrigatória do Nome e Num. Pecas </h4>";
    } else if (numPecas <= 0){
        relatorio.innerHTML = "<h4> Num. Pecas deve ser maior que zero </h4>";
    } else {
        valido = true;
        relatorio.innerHTML = "";
    }

    if (valido){
        dados.nome.push(nome);
        salario = calcularSalario(numPecas);
        dados.salario.push(salario);
        console.log(totalSalarios, ' ', salario);
        totalSalarios += Number(salario);
        numEmpregados ++;
        document.querySelector("#nome").value = "";
        document.querySelector("#numPecas").value = "";
        document.querySelector("#nome").focus();
        console.log(dados);
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

    // inseir linhas do relatório na lista desordenada
    for (let x = 0 ; x < dados.nome.length ; x++){   
        let linha = document.createElement("li");
        linha.innerHTML = dados.nome[x] + " &nbsp &nbsp &nbsp " + dados.salario[x] ;
        document.body.append(linha);
    }

    // inserir total de salarios no relatorio
    let totalSal= document.createElement("h4");
    totalSal.innerHTML = "Total de Salários: " + totalSalarios.toFixed(2)
    document.body.append(totalSal);
    // inserir media de salarios no relatorio
    let mediaSal = document.createElement("h4");
    mediaSal.innerHTML = "Media de Salários: " + (totalSalarios / numEmpregados).toFixed(2);
    document.body.append(mediaSal);
}

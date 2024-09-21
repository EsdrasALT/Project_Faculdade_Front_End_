let dados = {
    nome: [],
    dataIncio: [],
    dataFim: [],
    tipoQuarto: []
}

let vetCidades = ['BELO HORIZONTE', 'SÃO PAULO', 'RIO DE JANEIRO', 'SALVADOR' ,'CURITIBA'];
let botaoCalcular = document.getElementById("botaoCalcular");
let relatorio = document.getElementById("relatorio");
let totalContas = 0;
let numeroDeHospedes = 0;

botaoCalcular.onclick = function(){
    let nome = document.querySelector("#nome").value;
    let dataControleDiaEntrada = document.querySelector('input[type="date"]')
    let diaEntrada = dataControleDiaEntrada.value;
    let dataControleDiaSaida = document.querySelector('input[type="date"]')
    let diaSaida = dataControleDiaSaida.value;
    let tipoControleTipoQuarto = document.querySelector('#tipoQuarto');
    let tipoQuarto = tipoControleTipoQuarto.value;

    

}
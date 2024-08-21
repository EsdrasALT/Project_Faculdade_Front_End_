document.getElementById('gameForm').addEventListener('submit', function(event) {
event.preventDefault();  // Evita o recarregamento da página

const jogada1 = document.getElementById('jogador1').value.toLowerCase();
const jogada2 = document.getElementById('jogador2').value.toLowerCase();
const resultadoDiv = document.getElementById('resultado');

const jogadasValidas = ['pedra', 'papel', 'tesoura'];

// Verifica se ambas as jogadas são válidas
if (!jogadasValidas.includes(jogada1) || !jogadasValidas.includes(jogada2)) {
    resultadoDiv.textContent = 'Vencedor: Jogo terminado. Jogada inválida detectada.';
    document.getElementById('gameForm').reset();  // Limpa o formulário
    return;
}

let vencedor;

if (jogada1 === jogada2) {
    vencedor = 'Empate!';
} else if (
    (jogada1 === 'pedra' && jogada2 === 'tesoura') ||
    (jogada1 === 'papel' && jogada2 === 'pedra') ||
    (jogada1 === 'tesoura' && jogada2 === 'papel')
) {
    vencedor = 'Jogador 1';
} else {
    vencedor = 'Jogador 2';
}

resultadoDiv.textContent = `Vencedor: ${vencedor}`;
document.getElementById('gameForm').reset();  // Limpa o formulário para a próxima jogada
});

let nomeDigitado = "Jose Maria Alves dos Santos"; // Exemplo de nome digitado
let temSobrenome = false; 
let login = "";
let senha = "";
let novaPalavra = true; 

// Verifica o tamanho do nome
if (nomeDigitado.length < 15) {
    alert("O nome deve ter no mínimo 15 caracteres.");
}

// Verifica se há pelo menos um sobrenome
for (let i = 0; i < nomeDigitado.length; i++) {
    if (nomeDigitado[i] === " ") {
        temSobrenome = true;
        break; 
    }
}

if (!temSobrenome) {
    alert("Deve haver pelo menos um sobrenome.");
}

// Gera o login pegando a primeira letra de cada nome
for (let i = 0; i < nomeDigitado.length; i++) {
    if (nomeDigitado[i] !== " " && novaPalavra) {
        login += nomeDigitado[i].toUpperCase();
        novaPalavra = false; 
    } else if (nomeDigitado[i] === " ") {
        novaPalavra = true;
    }
}

console.log("Login gerado: " + login); 

// Gera a senha a partir do login usando o código ASCII
for (let i = 0; i < login.length; i++) {
    let codigoAscii = login.charCodeAt(i);
    senha += codigoAscii.toString()[0];
}

console.log("Senha gerada: " + senha); 

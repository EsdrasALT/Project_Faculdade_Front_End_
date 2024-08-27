document.getElementById("gerar").onclick = function() {
    const nomeDigitado = document.getElementById("nome").value.trim();

    if (nomeDigitado.length < 15) {
        alert("O nome deve ter no mínimo 15 caracteres.");
        limparCampos();
        return;
    }

    if (nomeDigitado.indexOf(" ") === 0) {
        alert("O nome não pode começar com um espaço.");
        limparCampos();
        return;
    }

    const nomes = nomeDigitado.split(" ");
    
    if (nomes.length < 2) {
        alert("É necessário ao menos um nome e um sobrenome.");
        limparCampos();
        return;
    }

    if (nomeDigitado.includes("  ")) {
        alert("Não deve haver mais de um espaço entre os nomes.");
        limparCampos();
        return;
    }

    // Gerando Login
    let login = "";
    nomes.forEach(nome => {
        login += nome[0].toUpperCase();
    });

    // Gerando Senha
    let senha = "";
    for (let i = 0; i < login.length; i++) {
        senha += login.charCodeAt(i).toString()[0];
    }

    // Exibindo Login e Senha
    document.getElementById("login").textContent = "Login gerado: " + login;
    document.getElementById("senha").textContent = "Senha gerada: " + senha;
};

document.getElementById("limpar").onclick = function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("login").textContent = "";
    document.getElementById("senha").textContent = "";
};

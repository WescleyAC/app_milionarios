function gerar() {
    const numerosInput = document.getElementById("numeros").value;
    const tamanho = parseInt(document.getElementById("tamanho").value, 10);

    if (!numerosInput || isNaN(tamanho) || tamanho <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const numeros = numerosInput.split(",").map(num => parseInt(num.trim(), 10));
    if (tamanho > numeros.length) {
        alert("O tamanho do bloco não pode ser maior que a quantidade de números.");
        return;
    }

    const combinacoes = gerarCombinacoes(numeros, tamanho);
    exibirResultado(combinacoes);
}

function gerarCombinacoes(array, tamanhoBloco, inicio = 0, resultado = [], atual = []) {
    if (atual.length === tamanhoBloco) {
        resultado.push([...atual]);
        return;
    }

    for (let i = inicio; i < array.length; i++) {
        atual.push(array[i]);
        gerarCombinacoes(array, tamanhoBloco, i + 1, resultado, atual);
        atual.pop();
    }
    return resultado;
}

function exibirResultado(combinacoes) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<strong>Combinações Geradas:</strong><br>" + 
        combinacoes.map(c => `[${c.join(", ")}]`).join("<br>");
}
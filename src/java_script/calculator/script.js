function calcularDesconto() {
    let valor = document.getElementById('valor').value;
    let desconto = document.getElementById('desconto').value;

    let valorDesconto = (Number(valor) * Number(desconto)) / 100;
    let valorFinal = Number(valor) - valorDesconto;

    console.log("O valor com desconto é R$ " + valorFinal.toFixed(2));

    document.getElementById('resultado').textContent = "O valor com desconto é R$ " + valorFinal.toFixed(2);
}



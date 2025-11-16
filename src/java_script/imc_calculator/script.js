function calculateIMC() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    
    if (!weight || !height || weight <= 0 || height <= 0) {
        document.getElementById("result").textContent = "Por favor, insira valores válidos!";
        document.getElementById("classification").textContent = "";
        // Remove classe de classificação
        let containerResult = document.getElementById("containerResult");
        containerResult.className = "result";
        return;
    }
    
    if (height > 3) {
        document.getElementById("result").textContent = "Altura deve estar em metros (ex: 1.75)";
        document.getElementById("classification").textContent = "";
        // Remove classe de classificação
        const containerResult = document.getElementById("containerResult");
        containerResult.className = "result";
        return;
    }
    
    // Cálculo do IMC
    const imc = weight / (height * height);
    let classification;
    let classeCSS;
    
    // Classificação do IMC com classes CSS correspondentes
    if (imc < 18.5) {
        classification = "Abaixo do peso";
        classeCSS = "baixo-peso";
    } else if (imc >= 18.5 && imc < 25) {
        classification = "Peso normal";
        classeCSS = "normal";
    } else if (imc >= 25 && imc < 30) {
        classification = "Sobrepeso";
        classeCSS = "sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classification = "Obesidade Grau I";
        classeCSS = "obesidade";
    } else if (imc >= 35 && imc < 40) {
        classification = "Obesidade Grau II";
        classeCSS = "obesidade";
    } else {
        classification = "Obesidade Grau III (ou Grave)";
        classeCSS = "obesidade";
    }
    
    // Aplica classe CSS no Resultado
    let containerResult = document.getElementById("containerResult");
    containerResult.className = `result ${classeCSS}`;
    
    // Usei o innerHTML para permitir HTML no retorno
    document.getElementById("result").innerHTML = `Seu IMC é: <strong>${imc.toFixed(2)}</strong>`;
    document.getElementById("classification").innerHTML = `Classificação: <strong>${classification}</strong>`;
}

// Função para limpar resultados
function clearResult() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").textContent = "Seu resultado do IMC aparecerá aqui.";
    document.getElementById("classification").textContent = "Sua classificação do IMC aparecerá aqui.";
    
    // Remove a classe de classificação
    let containerResult = document.getElementById("containerResult");
    containerResult.className = "result";
}
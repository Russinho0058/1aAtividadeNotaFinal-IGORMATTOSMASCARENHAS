document.getElementById('imcForm').addEventListenner('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const imc = weight / (height * height);

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Seu IMC é: ${imc.toFixed(2)}`;
});
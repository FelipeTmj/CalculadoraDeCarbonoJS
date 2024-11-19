function calcularCarbono() {
    const fatorGasolina = 2.31; // kg CO₂ por litro
    const fatorEletricidade = 0.092; // kg CO₂ por kWh
    const fatorVoos = 0.15; // kg CO₂ por km
    const fatorGas = 2.98; // kg CO₂ por kg de GLP
    const fatoresTransporte = {
        carro: 0.2,
        moto: 0.12,
        onibus: 0.05
    };

    const gasolina = parseFloat(document.getElementById("gasolina").value) || 0;
    const eletricidade = parseFloat(document.getElementById("eletricidade").value) || 0;
    const voos = parseFloat(document.getElementById("voos").value) || 0;
    const gas = parseFloat(document.getElementById("gas").value) || 0;
    const transporte = parseFloat(document.getElementById("transporte").value) || 0;
    const tipoTransporte = document.getElementById("tipoTransporte").value;

    const emissaoGasolina = gasolina * fatorGasolina;
    const emissaoEletricidade = eletricidade * fatorEletricidade;
    const emissaoVoos = voos * fatorVoos;
    const emissaoGas = gas * fatorGas;
    const emissaoTransporte = transporte * fatoresTransporte[tipoTransporte];

    const totalEmissoes = emissaoGasolina + emissaoEletricidade + emissaoVoos + emissaoGas + emissaoTransporte;

    const resultado = document.getElementById("resultado");
    resultado.textContent = `Total de emissões: ${totalEmissoes.toFixed(2)} kg de CO₂`;
}

function toggleFields() {
    const category = document.getElementById("category").value;
    const inputs = document.getElementById("inputs");

    if (category === "company") {
        inputs.style.display = "block";
    } else {
        inputs.style.display = "block";
    }
}
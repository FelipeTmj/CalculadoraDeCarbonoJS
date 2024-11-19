function calculateCompensation() {
    const carbonInput = document.getElementById('carbonInput').value;
    const carbonEmitted = parseFloat(carbonInput);

    if (isNaN(carbonEmitted) || carbonEmitted <= 0) {
        alert("Por favor, insira um valor válido de emissões de CO₂.");
        return;
    }

    // Dados para cálculos de compensação
    const treeAbsorption = 0.02; // 1 árvore absorve 0.02 toneladas de CO₂ por ano
    const plasticRecycling = 0.0015; // 1 kg de plástico reciclado evita 0.0015 toneladas de CO₂
    const renewableEnergy = 0.002; // 1 kWh de energia renovável evita 0.002 toneladas de CO₂

    // Cálculos
    const treesNeeded = Math.ceil(carbonEmitted / treeAbsorption);
    const plasticToRecycle = Math.ceil(carbonEmitted / plasticRecycling);
    const kWhRenewable = Math.ceil(carbonEmitted / renewableEnergy);

    // Exibir sugestões
    const suggestionsList = document.getElementById('suggestions');
    suggestionsList.innerHTML = `
        <li>🌳 Plante aproximadamente ${treesNeeded} árvores para compensar suas emissões.</li>
        <li>♻️ Recicle cerca de ${plasticToRecycle} kg de plástico.</li>
        <li>🔋 Utilize ${kWhRenewable} kWh de energia renovável.</li>
    `;
}
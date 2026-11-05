const prompt = require("prompt-sync")();

function acidente(carlos) {
    console.log("\n==========================================");
    console.log("📍 LOCAL: LOCAL DO ACIDENTE (acidente.js)");
    console.log("Acordas no meio dos destroços do avião. A selva é densa.");
    console.log("==========================================");
    console.log("1 - Vasculhar os destroços em busca de suprimentos");
    console.log("2 - Seguir direto para o som do rio");

    let escolha = prompt("> ");

    if (escolha === "1") {
        console.log("\nVasculhas os destroços e encontras ração de emergência!");
        if (!carlos.inventario.includes("racao")) {
            carlos.inventario.push("racao");
            console.log("Item 'racao' adicionado ao inventário.");
        }
        return "rio";
    } else if (escolha === "2") {
        console.log("\nDecides não perder tempo e segues o som da água.");
        return "rio";
    }

    console.log("Opção inválida! Digita 1 ou 2.");
    return "acidente";
}

module.exports = acidente;
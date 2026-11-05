const prompt = require("prompt-sync")();

function acidente(carlos) {
    console.log("\n==========================================");
    console.log("📍 LOCAL: LOCAL DO ACIDENTE");
    console.log("Durante fortes turbulências, o avião em que Carlos está cai na floresta.");
    console.log("Carlos acorda atordoado em meio aos destroços fumegantes.");
    console.log("==========================================");
    
    console.log("\n1 - Vasculhar os destroços em busca de suprimentos (-10 Fome, ganha ração)");
    console.log("2 - Seguir em frente imediatamente para buscar ajuda");
    
    const escolha = prompt("O que você deseja fazer? ");
    
    if (escolha === "1") {
        console.log("\nEncontras uma ração militar, mas o esforço deixa-te faminto!");
        // REMOVER a linha: carlos.fome -= 10; 
        
        if (!carlos.inventario.includes("racao militar")) {
            carlos.inventario.push("racao militar");
            console.log("Item 'racao militar' adicionado ao inventário.");
        }
        return "rio"; 
    }
    else if (escolha === "2") {
        console.log("\nDecides não perder tempo e segues a trilha na floresta.");
        return "rio"; 
    } 
    else {
        console.log("\nOpção inválida! O pânico toma conta e tentas reorganizar-te.");
        return "acidente"; 
    }
}

module.exports = acidente;
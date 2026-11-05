const prompt = require("prompt-sync")();

function caverna(carlos) {
    console.log("\n==========================================");
    console.log("📍 LOCAL: CAVERNA ESCURA (caverna.js)");
    console.log("Entras numa caverna para te abrigares do sol.");
    console.log("==========================================");

    if (carlos.inventario.includes("isqueiro")) {
        console.log("🔥 Tens o isqueiro! Acendes uma chama e caminhas em segurança.");
    } else {
        console.log("⚠️ Sem luz! Tropeças nas pedras no escuro (-20 Vida).");
        carlos.vida -= 20;
        if (carlos.vida < 0) carlos.vida = 0;
    }

    console.log("\n1 - Explorar a saída do outro lado da caverna");
    console.log("2 - Descansar um pouco nas pedras");

    let escolha = prompt("> ");

    if (escolha === "1") {
        console.log("\nAvanças em direção à luz da saída.");
        return "tribo";
    } else if (escolha === "2") {
        console.log("\nDescansas alguns minutos antes de sair.");
        return "tribo";
    }

    console.log("Opção inválida! Digita 1 ou 2.");
    return "caverna";
}

module.exports = caverna;
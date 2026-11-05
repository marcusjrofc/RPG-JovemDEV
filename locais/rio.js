const prompt = require("prompt-sync")();

function rio(carlos) {
    console.log("\n==========================================");
    console.log("📍 LOCAL: MARGEM DO RIO");
    console.log("Carlos caminha pela floresta e chega à margem de um rio calmo.");
    console.log("A água parece limpa e há peixes nadando perto da superfície.");
    console.log("==========================================");

    const temCopo = carlos.inventario.includes("copo de aluminio");

    console.log("\nEscolha sua ação:");
    if (temCopo) {
        console.log("1 - Usar o copo de alumínio para beber água limpa (Sacia a sede)");
    } else {
        console.log("[Trancado] Precisas de um copo de alumínio para beber água com segurança.");
    }
    console.log("2 - Tentar pescar com as mãos (-15 Fome, ganha peixe cru)");
    console.log("3 - Ignorar o rio e continuar seguindo viagem");

    const escolha = prompt("O que você deseja fazer? ");

    if (escolha === "1" && temCopo) {
        console.log("\nUsas o copo de alumínio para beber água. A tua sede foi totalmente saciada!");
        carlos.sede = 115; // Compensação de -15 do passarTurno
        return "caverna";
    } 
    else if (escolha === "2") {
        console.log("\nGastas energia a tentar pegar os peixes com as mãos. Pegas um pequeno peixe!");
        carlos.fome -= 15;
        if (carlos.fome < 0) carlos.fome = 0;
        
        if (!carlos.inventario.includes("peixe cru")) {
            carlos.inventario.push("peixe cru");
            console.log("Item 'peixe cru' adicionado ao inventário.");
        }
        return "caverna";
    } 
    else if (escolha === "3") {
        console.log("\nDecides não arriscar perder tempo no rio e segues em frente.");
        return "caverna";
    } 
    else {
        console.log("\nOpção inválida ou ação trancada! Ficas pensativo na beira do rio.");
        return "rio";
    }
}

module.exports = rio;
const prompt = require("prompt-sync")({ sigint: true });
const { adicionarItem, verificarItem } = require("../estado/personagem");

function rio(carlos) {
    console.log("\n==========================================");
    console.log("📍 LOCAL: MARGEM DO RIO");
    console.log("Carlos caminha pela floresta e chega à margem de um rio calmo.");
    console.log("A água parece limpa e há peixes nadando perto da superfície.");
    console.log("==========================================");

    const temCopo = verificarItem(carlos, "copo de aluminio");

    console.log("\nEscolha sua ação:");
    if (temCopo) {
        console.log("1 - Usar o copo de alumínio para beber água limpa (Sacia a Sede)");
    } else {
        console.log("[Trancado] Precisas de um copo de alumínio para beber água com segurança.");
    }
    console.log("2 - Tentar pescar com as mãos (-5 Fome extra pela pesca, ganha peixe cru)");
    console.log("3 - Ignorar o rio e continuar seguindo viagem");

    // Repete a pergunta até a pessoa digitar uma opção válida
    while (true) {
        const escolha = prompt("O que você deseja fazer? ").trim();

        if (escolha === "1" && temCopo) {
            console.log("\n🥤 Usas o copo de alumínio: Sede restaurada ao máximo!");
            carlos.sede = 100;
            return "caverna";
        }

        if (escolha === "2") {
            console.log("\n🎣 Gastas energia ao tentar pescar (-5 Fome adicional). Pegas um pequeno peixe!");
            carlos.fome = Math.max(0, carlos.fome - 5);

            if (!verificarItem(carlos, "peixe cru")) {
                adicionarItem(carlos, "peixe cru");
            }
            return "caverna";
        }

        if (escolha === "3") {
            console.log("\nDecides não arriscar perder tempo no rio e segues em frente.");
            return "caverna";
        }

        console.log("\nOpção inválida ou ação trancada! Ficas pensativo na beira do rio.");
    }
}

module.exports = rio;
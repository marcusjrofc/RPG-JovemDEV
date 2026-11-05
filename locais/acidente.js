const prompt = require("prompt-sync")({ sigint: true });
const { adicionarItem, verificarItem, ITENS } = require("../estado/personagem");

function acidente(carlos) {
    console.log("\n==========================================");
    console.log("📍 LOCAL: LOCAL DO ACIDENTE");
    console.log("Durante fortes turbulências, o avião em que Carlos está cai na floresta.");
    console.log("Carlos acorda atordoado em meio aos destroços fumegantes.");
    console.log("==========================================");

    console.log("\n1 - Vasculhar os destroços em busca de suprimentos (ganha ração)");
    console.log("2 - Seguir em frente imediatamente para buscar ajuda");

    while (true) {
        const input = prompt("O que você deseja fazer? ");
        const escolha = input ? input.trim() : ""; // Tratamento anti-crash (null.trim)

        if (escolha === "1") {
            console.log("\nEncontras uma ração militar entre os destroços!");

            if (!verificarItem(carlos, ITENS.RACAO)) {
                adicionarItem(carlos, ITENS.RACAO);
            }
            return "rio";
        }

        if (escolha === "2") {
            console.log("\nDecides não perder tempo e segues a trilha na floresta.");
            return "rio";
        }

        console.log("\nOpção inválida! O pânico toma conta e tentas reorganizar-te.");
    }
}

module.exports = acidente;
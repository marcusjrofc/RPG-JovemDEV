const prompt = require("prompt-sync")({ sigint: true });

function tribo(carlos) {
    console.log("\n==========================================");
    console.log("📍 LOCAL: TRIBO INDÍGENA");
    console.log("Ao sair da caverna, encontras uma aldeia indígena numa clareira.");
    console.log("==========================================");

    console.log("\nEscolha sua ação:");
    console.log("1 - Aproximar-te e pedir ajuda aos nativos (Sacia a Fome totalmente e Cura)");
    console.log("2 - Contornar a aldeia silenciosamente e seguir a trilha");

    while (true) {
        const input = prompt("> ");
        const escolha = input ? input.trim() : "";

        if (escolha === "1") {
            console.log("\n🍲 Os nativos acolhem-te com um banquete: Fome restaurada ao máximo!");
            carlos.fome = 110; 
            
            // CURA DO VENENO
            if (carlos.veneno) {
                console.log("🌿 O xamã da tribo aplica raízes curativas nas tuas feridas: VENENO CURADO!");
                carlos.veneno = false;
            }

            return "cidade";
        }

        if (escolha === "2") {
            console.log("\nContornas a aldeia sem ser visto e segues a trilha principal.");
            return "cidade";
        }

        console.log("\nOpção inválida! Ficas indeciso na entrada da aldeia.");
    }
}

module.exports = tribo;
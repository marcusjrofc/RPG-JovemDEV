const prompt = require("prompt-sync")();

function tribo(carlos) {
    console.log("\n==========================================");
    console.log("📍 LOCAL: TRIBO INDÍGENA");
    console.log("Ao sair da caverna, encontras uma aldeia indígena numa clareira.");
    console.log("==========================================");

    console.log("\nEscolha sua ação:");
    console.log("1 - Aproximar-te e pedir ajuda aos nativos (+30 Fome)");
    console.log("2 - Contornar a aldeia silenciosamente e seguir a trilha");

    let escolha = prompt("> ");

    if (escolha === "1") {
        console.log("\nOs nativos acolhem-te, oferecem comida e mostram o caminho para a cidade!");
        carlos.fome += 30;
        if (carlos.fome > 100) carlos.fome = 100;
        return "cidade";
    } else if (escolha === "2") {
        console.log("\nContornas a aldeia sem ser visto e segues a trilha principal.");
        return "cidade";
    }

    console.log("\nOpção inválida! Ficas indeciso na entrada da aldeia.");
    return "tribo";
}

module.exports = tribo;
const prompt = require("prompt-sync")();

function tribo(carlos) {
    console.log("\n==========================================");
    console.log("📍 LOCAL: TRIBO INDÍGENA (tribo.js)");
    console.log("Ao sair da caverna, encontras uma aldeia indígena.");
    console.log("==========================================");
    console.log("1 - Aproximar-te e pedir ajuda aos nativos");
    console.log("2 - Contornar a aldeia silenciosamente e seguir o caminho");

    let escolha = prompt("> ");

    if (escolha === "1") {
        console.log("\nOs nativos acolhem-te, oferecem comida e mostram o caminho para a cidade!");
        carlos.fome += 30;
        if (carlos.fome > 100) carlos.fome = 100;
        return "cidade";
    } else if (escolha === "2") {
        console.log("\nContornas a aldeia sem ser visto e segues a trilha.");
        return "cidade";
    }

    console.log("Opção inválida! Digita 1 ou 2.");
    return "tribo";
}

module.exports = tribo;
const prompt = require("prompt-sync")();

function rio(carlos) {
    console.log("\n==========================================");
    console.log("📍 LOCAL: MARGEM DO RIO (rio.js)");
    console.log("Chegas à margem de um grande rio de águas limpas.");
    console.log("==========================================");
    console.log("1 - Usar o copo de alumínio para beber água limpa");
    console.log("2 - Seguir a margem em direção à caverna sem beber");

    let escolha = prompt("> ");

    if (escolha === "1") {
        if (carlos.inventario.includes("copo de aluminio")) {
            console.log("\nUsas o copo de alumínio para beber água limpa!");
            carlos.sede += 40;
            if (carlos.sede > 100) carlos.sede = 100;
            console.log("Recuperaste +40 de Sede!");
        } else {
            console.log("\nBebes água com as mãos, mas não recuperas tanta sede.");
            carlos.sede += 20;
            if (carlos.sede > 100) carlos.sede = 100;
        }
        return "caverna";
    } else if (escolha === "2") {
        console.log("\nContinuas a caminhada em direção à caverna.");
        return "caverna";
    }

    console.log("Opção inválida! Digita 1 ou 2.");
    return "rio";
}

module.exports = rio;
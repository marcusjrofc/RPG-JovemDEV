const { adicionarItem, ITENS } = require('../estado/personagem.js');

function rio(personagem, prompt) {
    console.log("\n==========================================");
    console.log("📍 LOCAL: MARGEM DO RIO");
    console.log("Carlos caminha pela floresta e chega à margem de um rio calmo.");
    console.log("A água parece limpa e há peixes nadando perto da superfície.");
    console.log("==========================================");
    
    console.log("\nEscolha sua ação:");
    console.log("1 - Usar o copo de alumínio para beber água limpa (Sacia a Sede)");
    console.log("2 - Tentar pescar com as mãos (-5 Fome extra pela pesca, ganha peixe cru)");
    console.log("3 - Explorar as margens do rio em busca de destroços do avião (ganha machadinha)");

    let escolha = prompt("O que você deseja fazer? ");

    // Loop de validação do Input (Impede que o jogo quebre)
    while (escolha !== "1" && escolha !== "2" && escolha !== "3") {
        console.log("❌ Opção inválida. Escolhe 1, 2 ou 3.");
        escolha = prompt("O que você deseja fazer? ");
    }

    if (escolha === "1") {
        personagem.sede = 100;
        console.log("\n🥤 Usas o copo de alumínio: Sede restaurada ao máximo!");
    } else if (escolha === "2") {
        personagem.fome = Math.max(0, personagem.fome - 5);
        adicionarItem(personagem, ITENS.PEIXE);
        console.log("\n🐟 Conseguiste pegar um peixe cru! (-5 Fome pelo esforço)");
    } else if (escolha === "3") {
        adicionarItem(personagem, ITENS.MACHADO);
        console.log("\n🪓 Encontraste uma machadinha presa num tronco!");
    }

    return "caverna"; // Retorna o próximo destino
}

module.exports = rio;
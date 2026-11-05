/**
 * @file cidade.js
 * @description Cenário final de vitória do jogo.
 * @author Gustavo
 */

function cidade(carlos) {
    console.log("\n==========================================");
    console.log("🏆 VITÓRIA! Encontraste a cidade e foste salvo!");
    console.log(`Carlos sobreviveu com ${carlos.vida} de vida restante.`);
    console.log(`Itens restantes no inventário: ${carlos.inventario.join(", ")}`);
    console.log("==========================================");
    
    return "fim"; // Retorna "fim" para encerrar a máquina de estados no jogo.js
}

module.exports = cidade;
/**
 * @file jogo.js
 * @description Loop principal do jogo e integração dos módulos.
 * @author Gustavo
 */

const { carlos } = require("./estado/personagem");
const { passarTurno, gerarEventoAleatorio } = require("./mecanicas/eventos");

// Cada local é uma função que recebe o personagem e devolve o nome do próximo local
const locais = {
    acidente: require("./locais/acidente"),
    rio: require("./locais/rio"),
    caverna: require("./locais/caverna"),
    tribo: require("./locais/tribo"),
    cidade: require("./locais/cidade"),
};

let localAtual = "acidente";

console.log("\n=== SOBREVIVÊNCIA NA AMAZÔNIA: A JORNADA DE CARLOS ===");
// Exibe os atributos no início do jogo
console.log(`📊 Status Inicial -> Vida: ${carlos.vida} | Fome: ${carlos.fome} | Sede: ${carlos.sede}\n`);

while (localAtual !== "fim") {
    if (carlos.vida <= 0) {
        console.log("\n💀 GAME OVER: Carlos sucumbiu aos perigos da Amazônia.");
        break;
    }

    const local = locais[localAtual];

    if (!local) {
        console.log("Local inválido ou não encontrado. Encerrando...");
        break;
    }

    localAtual = local(carlos);

    // O tempo só passa quando Carlos realmente vai a algum lugar
    // (a cidade devolve "fim" e encerra o jogo sem novo turno).
    if (localAtual !== "fim") {
        gerarEventoAleatorio(carlos);
        passarTurno(carlos);
    }
}

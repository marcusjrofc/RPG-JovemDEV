const { carlos } = require("./estado/personagem");
const { passarTurno, gerarEventoAleatorio } = require("./mecanicas/eventos");

const locais = {
    acidente: require("./locais/acidente"),
    rio: require("./locais/rio"),
    caverna: require("./locais/caverna"),
    tribo: require("./locais/tribo"),
    cidade: require("./locais/cidade"),
};

let localAtual = "acidente";

console.log("\n=== SOBREVIVÊNCIA NA AMAZÔNIA: A JORNADA DE CARLOS ===");
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

    // ... (resto do teu código dentro do while)

    localAtual = local(carlos);

    // Bloqueia eventos fantasmas se Carlos morreu durante a fase
    if (carlos.vida <= 0) {
        console.log("\n💀 GAME OVER: Carlos sucumbiu aos perigos da Amazônia.");
        break;
    }

    // ⚠️ CORREÇÃO DA ZONA SEGURA: Se ele já chegou à cidade ou ao fim, não sofre ataques!
    if (localAtual !== "fim" && localAtual !== "cidade") {
        gerarEventoAleatorio(carlos);
        passarTurno(carlos);
    }
}
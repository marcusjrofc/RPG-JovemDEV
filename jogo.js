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

    localAtual = local(carlos);

    // Bloqueia eventos fantasmas se Carlos morreu durante a fase (ex: tropeçou na caverna)
    if (carlos.vida <= 0) {
        console.log("\n💀 GAME OVER: Carlos sucumbiu aos perigos da Amazônia.");
        break;
    }

    if (localAtual !== "fim") {
        gerarEventoAleatorio(carlos);
        passarTurno(carlos);
    }
}
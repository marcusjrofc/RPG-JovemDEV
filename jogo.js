/**
 * @file jogo.js
 * @description Loop principal do jogo e integração dos módulos.
 * @author Gustavo
 */

const { carlos } = require("./estado/personagem");
const { passarTurno, gerarEventoAleatorio } = require("./mecanicas/eventos");

// Importação das funções de local
const acidente = require("./locais/acidente");
const rio = require("./locais/rio");
const caverna = require("./locais/caverna");
const tribo = require("./locais/tribo");
const cidade = require("./locais/cidade");

let localAtual = "acidente";
let jogando = true;

console.log("\n=== SOBREVIVÊNCIA NA AMAZÔNIA: A JORNADA DE CARLOS ===");
// Exibe os atributos no início do jogo
console.log(`📊 Status Inicial -> Vida: ${carlos.vida} | Fome: ${carlos.fome} | Sede: ${carlos.sede}\n`);

while (jogando) {
    if (carlos.vida <= 0) {
        console.log("\n💀 GAME OVER: Carlos sucumbiu aos perigos da Amazônia.");
        jogando = false;
        break;
    }

    switch (localAtual) {
        case "acidente":
            localAtual = acidente(carlos);
            gerarEventoAleatorio(carlos);
            passarTurno(carlos);
            break;

        case "rio":
            localAtual = rio(carlos);
            gerarEventoAleatorio(carlos);
            passarTurno(carlos);
            break;

        case "caverna":
            localAtual = caverna(carlos);
            gerarEventoAleatorio(carlos);
            passarTurno(carlos);
            break;

        case "tribo":
            localAtual = tribo(carlos);
            gerarEventoAleatorio(carlos);
            passarTurno(carlos);
            break;

        case "cidade":
            cidade(carlos);
            jogando = false;
            break;

        case "fim":
            jogando = false;
            break;

        default:
            console.log("Local inválido ou não encontrado. Encerrando...");
            jogando = false;
            break;
    }
}
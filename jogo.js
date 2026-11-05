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

while (jogando) {
    // 1. Checagem de Morte
    if (carlos.vida <= 0) {
        console.log("\n💀 GAME OVER: Carlos sucumbiu aos perigos da Amazônia.");
        jogando = false;
        break;
    }

    // 2. Máquina de Estados (Navegação de Locais)
    switch (localAtual) {
        case "acidente":
            localAtual = acidente(carlos);
            passarTurno(carlos);
            gerarEventoAleatorio(carlos);
            break;

        case "rio":
            localAtual = rio(carlos);
            passarTurno(carlos);
            gerarEventoAleatorio(carlos);
            break;

        case "caverna":
            localAtual = caverna(carlos);
            passarTurno(carlos);
            gerarEventoAleatorio(carlos);
            break;

        case "tribo":
            localAtual = tribo(carlos);
            passarTurno(carlos);
            gerarEventoAleatorio(carlos);
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
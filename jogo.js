const prompt = require('prompt-sync')();
const { carlos } = require('./estado/personagem.js');
const { gerarEventoAleatorio, passarTurno } = require('./mecanicas/eventos.js');

// Importação das tuas fases (Ajusta os caminhos se necessário)
const acidente = require('./locais/acidente.js');
const rio = require('./locais/rio.js');
const caverna = require('./locais/caverna.js');
const tribo = require('./locais/tribo.js');
const cidade = require('./locais/cidade.js');

function iniciarJogo() {
    console.log("=== SOBREVIVÊNCIA NA AMAZÔNIA: A JORNADA DE CARLOS ===");
    console.log(`📊 Status Inicial -> Vida: ${carlos.vida} | Fome: ${carlos.fome} | Sede: ${carlos.sede}\n`);

    let localAtual = "acidente"; 

    while (true) {
        // Executa o local atual e recebe a próxima fase
        if (localAtual === "acidente") {
            localAtual = acidente(carlos, prompt);
        } else if (localAtual === "rio") {
            localAtual = rio(carlos, prompt);
        } else if (localAtual === "caverna") {
            localAtual = caverna(carlos, prompt);
        } else if (localAtual === "tribo") {
            localAtual = tribo(carlos, prompt);
        } else if (localAtual === "cidade") {
            cidade(carlos, prompt);
            break; // O jogo acaba com vitória na cidade
        } else if (localAtual === "fim") {
            break;
        }

        // 1. GAME OVER IMEDIATO: Se morreu durante as escolhas da fase
        if (carlos.vida <= 0) {
            console.log("\n💀 GAME OVER: Carlos sucumbiu aos perigos da Amazônia.");
            break;
        }

        // 2. ZONA SEGURA: Se o destino for a cidade, não rola dados nem passa turno!
        if (localAtual === "cidade" || localAtual === "fim") {
            continue; 
        }

        // 3. Rola os eventos (Onça, Mosquitos)
        gerarEventoAleatorio(carlos);
        
        // 4. Verifica se a Onça o matou
        if (carlos.vida <= 0) {
            console.log("\n💀 GAME OVER: Carlos sucumbiu aos perigos da Amazônia.");
            break;
        }

        // 5. Passa o turno (fome, sede, veneno)
        passarTurno(carlos);
        
        // 6. Verifica se morreu de fome/sede ou veneno no fim do turno
        if (carlos.vida <= 0) {
            console.log("\n💀 GAME OVER: Carlos sucumbiu aos perigos da Amazônia.");
            break;
        }
    }
}

iniciarJogo();
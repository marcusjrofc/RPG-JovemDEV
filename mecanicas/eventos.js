const { ITENS, verificarItem } = require('../estado/personagem.js');

function passarTurno(personagem) {
  console.log("\n--- Um tempo se passa na selva... ---");
  
  // Math.max garante que a fome e sede não baixam de 0
  personagem.fome = Math.max(0, personagem.fome - 10);
  personagem.sede = Math.max(0, personagem.sede - 15);
  console.log("🚶 Desgaste da caminhada: -10 Fome | -15 Sede");
  
  if (personagem.veneno) {
    personagem.vida = Math.max(0, personagem.vida - 5);
    console.log("☠️ Efeito do veneno: Perdeu -5 de Vida.");
  }
  
  // Verifica se está a morrer de fome ou sede
  if (personagem.fome === 0 || personagem.sede === 0) {
    personagem.vida = Math.max(0, personagem.vida - 20);
    console.log("⚠️ Estás a morrer de fome/sede! (-20 Vida)");
  }

  console.log(`Status -> Vida: ${personagem.vida} | Fome: ${personagem.fome} | Sede: ${personagem.sede}`);
}

function gerarEventoAleatorio(personagem) {
  const dado = Math.floor(Math.random() * 10) + 1;
  
  if (dado <= 3) {
    console.log("\n🦟 [EVENTO] Uma nuvem de mosquitos te ataca!");
    if (!personagem.veneno) {
      personagem.veneno = true;
      console.log("Contraíste uma febre e agora estás ENVENENADO (-5 Vida por turno).");
    }
  } else if (dado <= 6) {
    console.log("\n🐆 [EVENTO] Uma Onça-Pintada surge faminta dos arbustos!");
    if (verificarItem(personagem, ITENS.MACHADO)) {
      console.log("Usaste a machadinha para espantar a onça, mas sofreste arranhões (-15 Vida).");
      personagem.vida = Math.max(0, personagem.vida - 15);
    } else {
      console.log("Sem armas! Tentaste correr e a onça feriu-te gravemente (-35 Vida).");
      personagem.vida = Math.max(0, personagem.vida - 35);
    }
  } else {
    console.log("\n🌿 O silêncio da Amazônia te cerca. Por enquanto, tudo calmo.");
  }
}

module.exports = { passarTurno, gerarEventoAleatorio };
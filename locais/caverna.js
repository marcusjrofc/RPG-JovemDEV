const prompt = require("prompt-sync")({ sigint: true });
const { verificarItem, removerItem, ITENS } = require("../estado/personagem");

function caverna(carlos) {
  console.log("\n==========================================");
  console.log("📍 LOCAL: CAVERNA ESCURA");
  console.log("Entras numa caverna húmida para te abrigares do sol e cortar caminho.");
  console.log("==========================================");

  if (verificarItem(carlos, ITENS.ISQUEIRO)) {
    console.log("🔥 Tens o isqueiro! Acendes uma chama e caminhas em segurança.");
  } else {
    console.log("⚠️ Sem luz! Tropeças nas pedras no escuro (-20 Vida).");
    carlos.vida = Math.max(0, carlos.vida - 20);
  }

  console.log("\nEscolha sua ação:");
  console.log("1 - Explorar a saída do outro lado da caverna");
  console.log("2 - Descansar um pouco nas pedras antes de sair");

  while (true) {
    const input = prompt("> ");
    const escolha = input ? input.trim() : "";

    if (escolha === "1") {
      console.log("\nAvanças em direção à luz da saída.");
      return "tribo";
    }

    if (escolha === "2") {
      console.log("\nDescansas alguns minutos nas pedras e segues para a saída.");

      if (verificarItem(carlos, ITENS.RACAO)) {
        console.log("🍖 Aproveitas o descanso para comer a Ração Militar! (+40 Fome)");
        carlos.fome = Math.min(110, carlos.fome + 50); // Teto em 110 (+10 turno)
        removerItem(carlos, ITENS.RACAO);
      } else if (verificarItem(carlos, ITENS.PEIXE)) {
        console.log("🐟 Aproveitas para comer o Peixe Cru recolhido no rio! (+25 Fome)");
        carlos.fome = Math.min(110, carlos.fome + 35); // Teto em 110 (+10 turno)
        removerItem(carlos, ITENS.PEIXE);
      }

      return "tribo";
    }

    console.log("\nOpção inválida! O eco da caverna confunde-te.");
  }
}

module.exports = caverna;
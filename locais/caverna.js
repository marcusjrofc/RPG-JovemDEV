const prompt = require("prompt-sync")({ sigint: true });
const { verificarItem, removerItem } = require("../estado/personagem");

function caverna(carlos) {
  console.log("\n==========================================");
  console.log("📍 LOCAL: CAVERNA ESCURA");
  console.log(
    "Entras numa caverna húmida para te abrigares do sol e cortar caminho.",
  );
  console.log("==========================================");

  // Verificação da posse do isqueiro no inventário (acontece uma única vez)
  if (verificarItem(carlos, "isqueiro")) {
    console.log(
      "🔥 Tens o isqueiro! Acendes uma chama e caminhas em segurança.",
    );
  } else {
    console.log("⚠️ Sem luz! Tropeças nas pedras no escuro (-20 Vida).");
    carlos.vida = Math.max(0, carlos.vida - 20);
  }

  console.log("\nEscolha sua ação:");
  console.log("1 - Explorar a saída do outro lado da caverna");
  console.log("2 - Descansar um pouco nas pedras antes de sair");

  // Repete a pergunta até a pessoa digitar uma opção válida
  while (true) {
    const escolha = prompt("> ").trim();

    if (escolha === "1") {
      console.log("\nAvanças em direção à luz da saída.");
      return "tribo";
    }

    if (escolha === "2") {
      console.log("\nDescansas alguns minutos nas pedras e segues para a saída.");

      // Mecânica de consumo de comida no descanso
      if (verificarItem(carlos, "racao militar")) {
        console.log(
          "🍖 Aproveitas o descanso para comer a Ração Militar! (+40 Fome)",
        );
        carlos.fome = Math.min(100, carlos.fome + 40);
        removerItem(carlos, "racao militar");
      } else if (verificarItem(carlos, "peixe cru")) {
        console.log(
          "🐟 Aproveitas para comer o Peixe Cru recolhido no rio! (+25 Fome)",
        );
        carlos.fome = Math.min(100, carlos.fome + 25);
        removerItem(carlos, "peixe cru");
      }

      return "tribo";
    }

    console.log("\nOpção inválida! O eco da caverna confunde-te.");
  }
}

module.exports = caverna;
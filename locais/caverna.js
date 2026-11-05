const prompt = require("prompt-sync")();

function caverna(carlos) {
  console.log("\n==========================================");
  console.log("📍 LOCAL: CAVERNA ESCURA");
  console.log(
    "Entras numa caverna húmida para te abrigares do sol e cortar caminho.",
  );
  console.log("==========================================");

  // Verificação da posse do isqueiro no inventário
  if (carlos.inventario.includes("isqueiro")) {
    console.log(
      "🔥 Tens o isqueiro! Acendes uma chama e caminhas em segurança.",
    );
  } else {
    console.log("⚠️ Sem luz! Tropeças nas pedras no escuro (-20 Vida).");
    carlos.vida -= 20;
    if (carlos.vida < 0) carlos.vida = 0;
  }

  console.log("\nEscolha sua ação:");
  console.log("1 - Explorar a saída do outro lado da caverna");
  console.log("2 - Descansar um pouco nas pedras antes de sair");

  let escolha = prompt("> ");

  if (escolha === "1") {
    console.log("\nAvanças em direção à luz da saída.");
    return "tribo";
  } else if (escolha === "2") {
    console.log("\nDescansas alguns minutos nas pedras e segues para a saída.");

    // Mecânica de consumo de comida no descanso
    if (carlos.inventario.includes("racao militar")) {
      console.log(
        "🍖 Aproveitas o descanso para comer a Ração Militar! (+40 Fome)",
      );
      carlos.fome += 50; // Tem de ser 50 para compensar os 10 do turno
      if (carlos.fome > 110) carlos.fome = 110; // Teto em 110

      const idx = carlos.inventario.indexOf("racao militar");
      carlos.inventario.splice(idx, 1);
    } else if (carlos.inventario.includes("peixe cru")) {
      console.log(
        "🐟 Aproveitas para comer o Peixe Cru recolhido no rio! (+25 Fome)",
      );
      carlos.fome += 35; // Tem de ser 35 para compensar os 10 do turno
      if (carlos.fome > 110) carlos.fome = 110; // Teto em 110

      const idx = carlos.inventario.indexOf("peixe cru");
      carlos.inventario.splice(idx, 1);
    }

    return "tribo";
  }

  console.log("\nOpção inválida! O eco da caverna confunde-te.");
  return "caverna";
}

module.exports = caverna;

function passarTurno(carlos) {
  console.log("\n--- Um tempo se passa na selva... ---");
  console.log("🚶 Desgaste da caminhada: -10 Fome | -15 Sede");

  carlos.fome -= 10;
  carlos.sede -= 15;

  if (carlos.fome < 0) carlos.fome = 0;
  if (carlos.sede < 0) carlos.sede = 0;

  if (carlos.fome === 0) {
    carlos.vida -= 10;
    console.log("⚠️ Fome crítica (0): Perdeu -10 de Vida por desnutrição.");
  }

  if (carlos.sede === 0) {
    carlos.vida -= 15;
    console.log("⚠️ Sede crítica (0): Perdeu -15 de Vida por desidratação.");
  }

  if (carlos.veneno) {
    carlos.vida -= 5;
    console.log("☠️ Efeito do veneno: Perdeu -5 de Vida.");
  }

  if (carlos.vida < 0) carlos.vida = 0;

  console.log(
    `Status -> Vida: ${carlos.vida} | Fome: ${carlos.fome} | Sede: ${carlos.sede}`,
  );
}

function gerarEventoAleatorio(carlos) {
  let dado = Math.floor(Math.random() * 10);

  if (dado <= 3) {
    console.log(
      "🌿 O silêncio da Amazônia te cerca. Por enquanto, tudo calmo.",
    );
  } else if (dado <= 6) {
    console.log("\n🐆 [EVENTO] Uma Onça-Pintada surge faminta dos arbustos!");

    if (carlos.inventario.includes("machadinha")) {
      console.log(
        "Usaste a machadinha para espantar a onça, mas sofreste arranhões (-20 Vida).",
      );
      carlos.vida -= 20;
    } else {
      console.log(
        "Sem armas! Tentaste correr e a onça feriu-te gravemente (-50 Vida).",
      );
      carlos.vida -= 50;
    }
  } else if (dado <= 8) {
    console.log("\n🦟 [EVENTO] Uma nuvem de mosquitos te ataca!");
    carlos.veneno = true;
    console.log(
      "Contraíste uma febre e agora estás ENVENENADO (-5 Vida por turno).",
    );
  } else {
    console.log("\n🌧️ [EVENTO] Começou a chover forte!");
    // Verifica se já está hidratado (100 ou 115 por causa do rio)
    if (carlos.sede >= 100) {
      console.log(
        "Como já estás totalmente hidratado (100%), apenas te molhas na chuva.",
      );
    } else {
      // Adicionamos 45 (+30 do bônus real + 15 de compensação do turno)
      carlos.sede += 45;

      // O teto temporário é 115, pois o turno vai tirar 15 logo a seguir, deixando no máximo 100
      if (carlos.sede > 115) carlos.sede = 115;

      console.log("Aproveitaste para beber água da chuva (+30 Sede).");
    }
  }

  if (carlos.vida < 0) carlos.vida = 0;
}

module.exports = {
  passarTurno,
  gerarEventoAleatorio,
};

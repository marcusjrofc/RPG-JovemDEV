function passarTurno(carlos) {
  console.log("\n--- Um tempo se passa na selva... ---");

  carlos.fome -= 10;
  carlos.sede -= 15;

  if (carlos.fome < 0) carlos.fome = 0;
  if (carlos.sede < 0) carlos.sede = 0;

  if (carlos.fome === 0) {
    carlos.vida -= 10;
    console.log("Você está faminto! Perdeu 10 de vida.");
  }

  if (carlos.sede === 0) {
    carlos.vida -= 15;
    console.log("Você está desidratado! Perdeu 15 de vida.");
  }

  if (carlos.veneno) {
    carlos.vida -= 5;
    console.log("O veneno está agindo... Perdeu 5 de vida.");
  }

  if (carlos.vida < 0) carlos.vida = 0;

  console.log(
    `Status -> Vida: ${carlos.vida} | Fome: ${carlos.fome} | Sede: ${carlos.sede}`,
  );
}

function gerarEventoAleatorio(carlos) {
  let dado = Math.floor(Math.random() * 10);

  if (dado <= 3) {
    console.log("O silêncio da Amazônia te cerca. Por enquanto, tudo calmo.");
  } else if (dado <= 6) {
    console.log("\n [EVENTO] Uma Onça-Pintada surge faminta dos arbustos!");

    if (carlos.inventario.includes("machadinha")) {
      console.log(
        "Você usou a machadinha para espantar a onça! Mas tomou uns arranhões.",
      );
      carlos.vida -= 20;
    } else {
      console.log("Sem armas! Você tentou correr e a onça te machucou feio!");
      carlos.vida -= 50;
    }
  } else if (dado <= 8) {
    console.log("\n [EVENTO] Uma nuvem de mosquitos te ataca!");
    carlos.veneno = true;
    console.log("Você contraiu uma febre e agora está ENVENENADO.");
  } else {
    console.log("\n [EVENTO] Começou a chover forte!");
    carlos.sede += 30;
    if (carlos.sede > 100) carlos.sede = 100;
    console.log("Você aproveitou para beber água da chuva (+30 Sede).");
  }

  if (carlos.vida < 0) carlos.vida = 0;
}

module.exports = {
  passarTurno,
  gerarEventoAleatorio,
};

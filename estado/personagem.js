const ITENS = {
  COPO: 'copo de aluminio',
  MACHADO: 'machadinha',
  MOCHILA: 'mochila',
  ISQUEIRO: 'isqueiro',
  ROUPAS: 'roupas',
  RACAO: 'racao militar',
  PEIXE: 'peixe cru'
};

const carlos = {
  nome: 'Carlos',
  vida: 100, // Vida cheia para aguentar 1 ataque da onça
  fome: 40,  // Balanceamento: Obriga a comer
  sede: 45,  // Balanceamento: Obriga a beber
  veneno: false,
  inventario: [ITENS.COPO, ITENS.MOCHILA, ITENS.ROUPAS]
};

function adicionarItem(personagem, item) {
  personagem.inventario.push(item);
  console.log(`Item '${item}' adicionado.`);
}

function removerItem(personagem, item) {
  const index = personagem.inventario.indexOf(item);
  if (index !== -1) {
    personagem.inventario.splice(index, 1);
    console.log(`Item '${item}' removido.`);
    return true;
  }
  console.log(`Item '${item}' não encontrado.`);
  return false;
}

function verificarItem(personagem, item) {
  return personagem.inventario.includes(item);
}

module.exports = { ITENS, carlos, adicionarItem, removerItem, verificarItem };
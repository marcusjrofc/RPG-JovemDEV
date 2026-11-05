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
  vida: 100,
  fome: 100,
  sede: 100,
  veneno: false,
  inventario: [ITENS.COPO, ITENS.MACHADO, ITENS.MOCHILA, ITENS.ISQUEIRO, ITENS.ROUPAS]
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

module.exports = {
  carlos,
  ITENS,
  adicionarItem,
  removerItem,
  verificarItem
};
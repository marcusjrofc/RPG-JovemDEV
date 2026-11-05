const carlos = {
  nome: 'Carlos',
  vida: 100,
  fome: 100,
  sede: 100,
  veneno: false,
  inventario: ['copo de aluminio', 'machadinha', 'mochila', 'isqueiro', 'roupas']
};

// Todas as funções recebem o personagem, assim os locais e eventos
// usam sempre o mesmo caminho para mexer no inventário.
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
  adicionarItem,
  removerItem,
  verificarItem
};
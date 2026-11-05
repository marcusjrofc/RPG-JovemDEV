const carlos = {
  nome: 'Carlos',
  vida: 100,
  fome: 100,
  sede: 100,
  veneno: false,
  inventario: ['copo de alumínio', 'machadinha', 'mochila', 'isqueiro', 'roupas']
};

function adicionarItem(item) {
  carlos.inventario.push(item);
  console.log(`Item '${item}' adicionado.`);
}

function removerItem(item) {
  let index = carlos.inventario.indexOf(item);
  
  if (index !== -1) {
    carlos.inventario.splice(index, 1);
    console.log(`Item '${item}' removido.`);
    return true;
  }
  
  console.log(`Item '${item}' não encontrado.`);
  return false;
}

function verificarItem(item) {
  return carlos.inventario.includes(item);
}

module.exports = {
  carlos,
  adicionarItem,
  removerItem,
  verificarItem
};
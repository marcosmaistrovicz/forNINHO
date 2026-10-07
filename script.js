// =========================
// INGREDIENTES
// =========================
const ingredientes = [
  ["farinha", "Farinha de trigo"],
  ["acucar", "Açúcar"],
  ["ovos", "Ovos"],
  ["leite", "Leite"],
  ["margarina", "Margarina"],
  ["fermento-biologico", "Fermento biológico seco"],
  ["fermento-quimico", "Fermento químico em pó"],
  ["sal", "Sal"],
  ["oleo", "Óleo"],
  ["leite-condensado", "Leite condensado"],
  ["creme-de-leite", "Creme de leite"],
  ["coco", "Coco ralado"],
  ["chocolate", "Chocolate em pó"],
  ["granulado", "Chocolate granulado"],
  ["goiabada", "Goiabada"],
  ["mucarela", "Queijo muçarela"],
  ["canela", "Canela em pó"],
  ["baunilha", "Baunilha"],
  ["amido", "Amido de milho"],
  ["acucar-confeiteiro", "Açúcar de confeiteiro"]
];

// Quando a lista original dizia apenas "fermento":
// - pães, sonhos e roscas usam fermento biológico;
// - bolos e cupcakes usam fermento químico.
const receitas = [
  ["Sonho de padaria", ["farinha", "ovos", "leite", "acucar", "margarina", "fermento-biologico", "oleo"]],
  ["Sonho de chocolate", ["farinha", "leite", "acucar", "ovos", "chocolate", "leite-condensado"]],
  ["Sonho de goiabada", ["farinha", "ovos", "leite", "acucar", "goiabada"]],
  ["Pão de leite", ["farinha", "leite", "acucar", "ovos", "margarina", "fermento-biologico"]],
  ["Pão doce tradicional", ["farinha", "leite", "ovos", "acucar", "margarina", "fermento-biologico"]],
  ["Pão doce com coco", ["farinha", "leite", "acucar", "ovos", "coco", "margarina"]],
  ["Pão doce com goiabada", ["farinha", "acucar", "leite", "ovos", "goiabada"]],
  ["Pão de coco", ["farinha", "leite", "acucar", "coco", "ovos", "fermento-biologico"]],
  ["Pão de chocolate", ["farinha", "leite", "acucar", "chocolate", "ovos", "fermento-biologico"]],
  ["Pão de queijo doce", ["farinha", "leite", "ovos", "acucar", "mucarela"]],
  ["Cuca de goiabada", ["farinha", "acucar", "ovos", "margarina", "leite", "goiabada"]],
  ["Cuca de coco", ["farinha", "acucar", "ovos", "margarina", "leite", "coco"]],
  ["Cuca de chocolate", ["farinha", "acucar", "ovos", "margarina", "leite", "chocolate"]],
  ["Bolo simples", ["farinha", "acucar", "ovos", "leite", "margarina", "fermento-quimico"]],
  ["Bolo de chocolate", ["farinha", "acucar", "ovos", "leite", "chocolate", "margarina"]],
  ["Bolo de coco", ["farinha", "acucar", "ovos", "leite", "coco", "margarina"]],
  ["Bolo de goiabada", ["farinha", "acucar", "ovos", "leite", "goiabada"]],
  ["Bolo de canela", ["farinha", "acucar", "ovos", "leite", "canela", "margarina"]],
  ["Bolo de baunilha", ["farinha", "acucar", "ovos", "leite", "baunilha"]],
  ["Bolo mesclado", ["farinha", "acucar", "ovos", "leite", "chocolate"]],
  ["Cupcake de chocolate", ["farinha", "acucar", "ovos", "leite", "chocolate", "fermento-quimico"]],
  ["Cupcake de baunilha", ["farinha", "acucar", "ovos", "leite", "baunilha"]],
  ["Muffin de chocolate", ["farinha", "acucar", "ovos", "leite", "chocolate", "oleo"]],
  ["Muffin de coco", ["farinha", "acucar", "ovos", "leite", "coco", "oleo"]],
  ["Rosca doce", ["farinha", "leite", "acucar", "ovos", "margarina", "fermento-biologico"]],
  ["Rosca de coco", ["farinha", "leite", "acucar", "ovos", "coco", "fermento-biologico"]],
  ["Rosca de chocolate", ["farinha", "leite", "acucar", "ovos", "chocolate", "fermento-biologico"]],
  ["Rosca de goiabada", ["farinha", "leite", "acucar", "ovos", "goiabada", "fermento-biologico"]],
  ["Rosca de canela", ["farinha", "leite", "acucar", "ovos", "canela", "margarina"]],
  ["Enroladinho de goiabada", ["farinha", "ovos", "acucar", "margarina", "goiabada"]],
  ["Enroladinho de coco", ["farinha", "acucar", "ovos", "margarina", "coco"]],
  ["Enroladinho de chocolate", ["farinha", "acucar", "ovos", "margarina", "chocolate"]],
  ["Biscoito de coco", ["farinha", "acucar", "ovos", "margarina", "coco"]],
  ["Biscoito amanteigado", ["farinha", "acucar", "ovos", "margarina"]],
  ["Biscoito de chocolate", ["farinha", "acucar", "ovos", "margarina", "chocolate"]],
  ["Biscoito de canela", ["farinha", "acucar", "ovos", "margarina", "canela"]],
  ["Biscoito de goiabada", ["farinha", "acucar", "ovos", "margarina", "goiabada"]],
  ["Bolacha de baunilha", ["farinha", "acucar", "ovos", "margarina", "baunilha"]],
  ["Palmiers doces", ["farinha", "acucar", "margarina"]],
  ["Pastelzinho de goiabada", ["farinha", "margarina", "acucar", "ovos", "goiabada"]],
  ["Pastelzinho de chocolate", ["farinha", "margarina", "acucar", "chocolate"]],
  ["Queijadinha", ["ovos", "acucar", "coco", "leite-condensado", "mucarela"]],
  ["Cocada de forno", ["coco", "acucar", "ovos", "leite-condensado"]],
  ["Brigadeiro", ["leite-condensado", "creme-de-leite", "chocolate"]],
  ["Brigadeiro de coco", ["leite-condensado", "creme-de-leite", "coco"]],
  ["Beijinho", ["leite-condensado", "coco", "acucar"]],
  ["Pudim de leite condensado", ["leite-condensado", "leite", "ovos", "acucar"]],
  ["Torta de goiabada", ["farinha", "ovos", "acucar", "margarina", "goiabada"]],
  ["Torta de chocolate", ["farinha", "ovos", "acucar", "margarina", "chocolate", "creme-de-leite"]],
  ["Torta de coco", ["farinha", "ovos", "acucar", "margarina", "coco", "leite-condensado"]]
];

const listaIngredientes = document.getElementById("lista-ingredientes");
const listaReceitas = document.getElementById("lista-receitas");

// Cria os checkboxes na página.
ingredientes.forEach(([id, nome]) => {
  const item = document.createElement("label");
  item.className = "item-ingrediente";

  item.innerHTML = `
    <input type="checkbox" value="${id}">
    <span class="bolinha"></span>
    <span>${nome}</span>
  `;

  listaIngredientes.appendChild(item);
});

function mostrarReceitas() {
  const selecionados = new Set(
    [...document.querySelectorAll(".item-ingrediente input:checked")]
      .map(checkbox => checkbox.value)
  );

  if (selecionados.size === 0) {
    listaReceitas.innerHTML = '<p class="mensagem">Selecione os ingredientes para ver as receitas possíveis.</p>';
    return;
  }

  // A receita aparece quando TODOS os ingredientes dela estiverem marcados.
  const possiveis = receitas.filter(([nome, ingredientesDaReceita]) =>
    ingredientesDaReceita.every(ingrediente => selecionados.has(ingrediente))
  );

  if (possiveis.length === 0) {
    listaReceitas.innerHTML = '<p class="mensagem">Ainda não há uma receita completa com os ingredientes selecionados.</p>';
    return;
  }

  const ul = document.createElement("ul");
  ul.className = "lista-resultado";

  possiveis.forEach(([nome]) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${nome}</strong>`;
    ul.appendChild(li);
  });

  listaReceitas.replaceChildren(ul);
}

// Atualiza automaticamente ao clicar nas bolinhas.
listaIngredientes.addEventListener("change", mostrarReceitas);


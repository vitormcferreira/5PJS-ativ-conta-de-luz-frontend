export function formataDinheiro(num) {
  const valor = Number(num).toFixed(2).replace('.', ',');
  return `R$ ${valor}`;
}

/**
 * Formata uma string de data ISO em pt-BR
 */
export function formataData(data) {
  return new Date(data).toLocaleDateString('pt-BR');
}

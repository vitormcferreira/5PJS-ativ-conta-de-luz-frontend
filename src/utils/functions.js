export function formataDinheiro(num) {
  const valor = Number(num).toFixed(2).replace('.', ',');
  return `R$ ${valor}`;
}

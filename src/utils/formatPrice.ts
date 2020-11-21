const formatPrice = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(value / 100)
    .replace(/^(\D+)/, 'R$ ');

export default formatPrice;

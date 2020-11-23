const unformatPrice = (value: string): string => {
  return Number(value) ? value : value.trim().split('R$')[1].replace(',', '');
};

export default unformatPrice;

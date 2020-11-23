const formatWeight = (value: number): string => {
  console.log(value);
  return String(value) ? String(Intl.NumberFormat().format(value)) : '';
};

export default formatWeight;

const formatWeight = (value: number): string =>
  Intl.NumberFormat().format(value);

export default formatWeight;

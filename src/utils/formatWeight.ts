const formatWeight = (value: number): string => {
  return String(value) ? String(Intl.NumberFormat().format(value)) : '';
};

export default formatWeight;

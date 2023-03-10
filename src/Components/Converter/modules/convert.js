export default function convert(rate, amount) {
  const convert = rate * amount;
  let fixedValue = 0;
  if (convert % 1 !== 0) fixedValue = 4;
  return convert.toFixed(fixedValue);
}

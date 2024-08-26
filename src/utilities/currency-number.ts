let counter = 0;

const currencyNumber = (
  value: number = ++counter, // Bu har safar chaqirilganda qiymatni oshirib boradi
  options?: Intl.NumberFormatOptions
) => {
  value = Math.abs(value);

  if (
    typeof Intl === "object" &&
    Intl &&
    typeof Intl.NumberFormat === "function"
  ) {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      maximumFractionDigits: 0,
      ...options,
    }).format(value);
  }

  return value.toString();
};
export { currencyNumber };

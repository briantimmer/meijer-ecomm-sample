import numbro from "numbro";

/**
 * Formats a number into currency
 * @param {number} val Number to be formatted as currency
 */
export const formatAsCurrency = (val) => {
  if (!val) {
    return numbro(0).format("$0,0.00");
  }
  return numbro(val).format("$0,0.00");
};

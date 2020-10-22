import numbro from "numbro";

export const formatAsCurrency = (val) => {
  if (!val) {
    return numbro(0).format("$0,0.00");
  }
  return numbro(val).format("$0,0.00");
};
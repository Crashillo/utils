export const truncate = (str = "", max = 100) =>
  str.length > max
    ? str.substring(0, str.substring(0, max + 1).search(/\s+\S*$/))
    : str;

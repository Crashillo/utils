/* trim a large string, as of N-th char, keeping complete words */
export const truncate = (str = "", max = 100, ellipsis = "\u2026") =>
  str.length > max
    ? str.substring(0, str.substring(0, max + 1).search(/\s+\S*$/)) + ellipsis
    : str;

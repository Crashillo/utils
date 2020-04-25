/**
 * Divides an array based on a boolean clause.
 * It returns a tuple of arrays [passElements, failElements]
 *
 * @param {Array} arr Initial array
 * @param {Function} condition Boolean function to split the array based on its result
 */
export const partition = (arr = [], condition = () => {}) => arr.reduce(([pass, fail], elem) => (condition(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]]), [[], []]);

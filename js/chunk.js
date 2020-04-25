/**
 * Split an array in the different number of chunks provided.
 * Returns an array whose elements are the array elements grouped in the chunk size provided
 * @param {Array} arr array element
 * @param {Number} size number of element for each chunk
 */
export const chunk = (arr = [], size = 1) => {
  const results = [];
  while (arr.length) {
    results.push(arr.splice(0, size));
  }
  return results;
};

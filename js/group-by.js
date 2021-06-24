/**
 * Returns an object whose keys are the different groups, i.e. the different values of the groupBy property
 * @param {Array} xs array element
 * @param {String|Function} key property, or callback function, to be grouped by.
 */
export default function groupBy(data, key) {
  return data.reduce((acc, x) => {
    const cat = key instanceof Function ? key(x) : x[key];
    (acc[cat] = acc[cat] || []).push(x);
    return acc;
  }, {})
};

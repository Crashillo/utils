/**
 * Get the minimum and maximum values of a numeric array
 * @param {Array} data Numeric array
 * @returns {Array} [min, max] 
 */
export const minMax = data => data.reduce(([ min, max ], item) => ([!min || item < min ? item : min, !max || item > max ? item : max ]), [ null, null ])

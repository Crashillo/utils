/**
 * Creates an alphanumeric random string
 *
 * @param {Number} len Length of the seed
 */
export const seed = (len = 24) => [...Array(len)].map(() => Math.random().toString(36)[2]).join('');

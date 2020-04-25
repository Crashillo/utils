/**
 * Creates an alphanumeric random string
 */
export const seed = () => [...Array(30)].map(() => Math.random().toString(36)[2]).join('');
/**
 * Serialize an object returning an string as key0=value0&key1=value1...
 * @param {*} params {key, value} object
 */
export const serialize = params => Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
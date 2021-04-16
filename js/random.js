/**
 * Creates a random integer generator. Called it twice `random()()` to get a random integer between 0 and 100
 * @param {Integer} min minimum value
 * @param {Integer} max maximum value
 * @returns A random integer between both limits
 */
function random(min, max) {
  return () => {
    const to = max ?? (min || 100)
    const from = !max ? 0 : min ?? 0
    const arr = Array.from({ length: Math.floor(to - from) + 1 }, (_, i) => from + i)
    return arr[Math.floor(Math.random() * arr.length)]
  }
}

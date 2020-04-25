/**
 * Rounds a number to the closest human-friendly number 
 * 
 * @param {Number} number
 */
export const nice = (number = 0) => {
	const digits = Math.abs(Math.trunc(number)).toString().length - 1
	let base = Math.pow(10, digits) / 20

	while (base < 1) {
		base *= 10
	}

	return Math.ceil(number / base) * base
}

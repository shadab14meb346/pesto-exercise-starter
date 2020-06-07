/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */
function permutateWithoutRepetitions(permutationOptions) {
	let permutationOptionsClone = permutationOptions.slice(0);
	if (permutationOptions.length === 1) return Array(permutationOptions);
	if (permutationOptions.length === 2) {
		return Array(permutationOptions, permutationOptions.slice(0).reverse());
	}
	let result = [];
	for (let i = 0; i < permutationOptionsClone.length; i++) {
		let clone = permutationOptionsClone.slice(0);
		let commonElement = clone.splice(i, 1);
		let commonElementSetPermutation = permutateWithoutRepetitions(
			clone
		).map(elem => elem.concat(commonElement));
		commonElementSetPermutation.forEach(element => result.push(element));
	}
	return result;
}

export { permutateWithoutRepetitions };

// generate a random pixel
export function getRandomPixel(rows, columns) {
	return {
		row: Math.floor(Math.random() * rows),
		column: Math.floor(Math.random() * columns),
	};
}

// generate a random pixel
const ceilWidth = 25;
export function getRandomPixel(rows, columns) {
	return {
		row: Math.floor(Math.random() * rows) * ceilWidth,
		column: Math.floor(Math.random() * columns) * ceilWidth,
	};
}

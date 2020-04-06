import React from "react";
import "./Food.css";
import { getRandomPixel } from "../../utils/utils";
function Food({ food }) {
	const randomPixel = getRandomPixel(10, 10);
	return (
		<div
			className='is-food'
			style={{
				width: "50px",
				height: "50px",
				position: "absolute",
				left: `${food.row * 50}px`,
				top: `${food.column * 50}px`,
			}}></div>
	);
}

export default Food;

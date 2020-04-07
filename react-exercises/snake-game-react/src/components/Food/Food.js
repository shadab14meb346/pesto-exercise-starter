import React from "react";
import "./Food.css";
const ceilWidth = 25;
function Food({ food }) {
	return (
		<div
			className='is-food'
			style={{
				width: `${ceilWidth}px`,
				height: `${ceilWidth}px`,
				position: "absolute",
				left: `${food.row}px`,
				top: `${food.column}px`,
			}}></div>
	);
}

export default Food;

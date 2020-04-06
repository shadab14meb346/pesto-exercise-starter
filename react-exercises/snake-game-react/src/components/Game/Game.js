import React, { useState, useEffect } from "react";
import Snake from "../Snake/Snake";
import Food from "../Food/Food";
import GameOver from "../GameOver/GameOver";
import { getRandomPixel } from "../../utils/utils";
import "./Game.css";

function Game() {
	const [speed, setSpeed] = useState(300);
	const [currentDirection, setCurrentDirection] = useState("down");
	const [score, setScore] = useState(0);
	const [die, setDie] = useState(false);
	const rows = 10;
	const columns = 10;
	const [food, setFood] = useState(getRandomPixel(rows, columns));
	const pixels = [];
	for (let row = 0; row < rows; row++) {
		for (let column = 0; column < columns; column++) {
			pixels.push({
				row,
				column,
			});
		}
	}

	const pixelItems = pixels.map((pixel) => {
		const { row, column } = pixel;
		const key = row.toString() + "-" + column.toString();
		return <div key={key} className='pixel'></div>;
	});

	return (
		<div className='Game'>
			{pixelItems}
			<Food food={food} />
			<Snake
				currentDirection={currentDirection}
				setCurrentDirection={setCurrentDirection}
				food={food}
				setFood={setFood}
				speed={speed}
				setScore={setScore}
			/>
			{/* <div>{died() ? <GameOver /> : null}/></div> */}
			<div>
				<h1>Score:{score}</h1>
			</div>
		</div>
	);
}

export default Game;

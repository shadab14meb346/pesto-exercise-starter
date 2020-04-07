import React, { useState } from "react";
import Snake from "../Snake/Snake";
import Food from "../Food/Food";
import Landing from "../Landing/Landing";
import { getRandomPixel } from "../../utils/utils";
import "./Game.css";

function Game() {
	const [start, setStart] = useState(false);
	const [speed, setSpeed] = useState(0);
	const [currentDirection, setCurrentDirection] = useState("down");
	const [score, setScore] = useState(0);
	const rows = 20;
	const columns = 20;
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
		return <div key={key}></div>;
	});
	return start ? (
		<div>
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
					score={score}
					setStart={setStart}
				/>
			</div>
			<div>{start ? <h1>Score : {score}</h1> : null}</div>
		</div>
	) : (
		<Landing
			speed={speed}
			setSpeed={setSpeed}
			setStart={setStart}
			setScore={setScore}
		/>
	);
}

export default Game;

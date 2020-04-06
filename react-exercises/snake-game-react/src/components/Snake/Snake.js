import React, { useState, useEffect, useRef } from "react";
import { getRandomPixel } from "../../utils/utils";
import "./Snake.css";
// Tick function
function gameTick(currentDirection, snake, setSnake, food, setFood, setScore) {
	const snakeHead = snake[snake.length - 1];
	let { row, column } = snakeHead;

	if (
		snakeHead.row / 50 === food.row &&
		snakeHead.column / 50 === food.column
	) {
		// Snake ate the food, time to show set new food
		const newHead = { row: food.row * 50, column: food.column * 50 };
		setSnake((prevState) => {
			prevState.push(newHead);
			return prevState;
		});
		setFood(getRandomPixel(10, 10));
		// increase the score
		setScore((prevState) => {
			return prevState + 1;
		});
	}
	// Snake moves head
	switch (currentDirection) {
		case "left":
			row = row - 50;
			break;
		case "up":
			column = column - 50;
			break;
		case "down":
			column = column + 50;
			break;
		case "right":
			row = row + 50;
			break;
		default:
			break;
	}
	let newHead = { row, column };
	setSnake((prevState) => {
		const removedTailSnake = prevState.slice(1);
		return [...removedTailSnake, newHead];
	});
}

// function
function Snake({
	currentDirection,
	setCurrentDirection,
	food,
	setFood,
	speed,
	setScore,
}) {
	const body1 = { row: 5 * 50, column: 0 * 50 };
	const body2 = { row: 5 * 50, column: 1 * 50 };
	const body3 = { row: 5 * 50, column: 2 * 50 };
	const body4 = { row: 5 * 50, column: 3 * 50 };
	const [snake, setSnake] = useState([body1, body2, body3, body4]);
	// function that handles key Press
	function handleKeyPress(e) {
		switch (e.keyCode) {
			case 37:
				console.log("left");
				setCurrentDirection("left");
				break;
			case 38:
				console.log("up");
				setCurrentDirection("up");
				break;
			case 39:
				console.log("right");
				setCurrentDirection("right");
				break;
			case 40:
				console.log("down");
				setCurrentDirection("down");
				break;
			default:
				break;
		}
	}
	useEffect(() => {
		document.body.addEventListener("keydown", handleKeyPress);
		return () => document.body.removeEventListener("keydown", handleKeyPress);
	}, []);

	useEffect(() => {
		const inter = setInterval(() => {
			gameTick(currentDirection, snake, setSnake, food, setFood, setScore);
		}, speed);
		return () => clearInterval(inter);
	}, [currentDirection, snake, food]);

	return snake.map((element) => {
		return (
			<div
				style={{
					width: "50px",
					height: "50px",
					position: "absolute",
					left: `${element.row}px`,
					top: `${element.column}px`,
				}}
				className='snake'></div>
		);
	});
}

export default Snake;

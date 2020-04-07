import React, { useState, useEffect } from "react";
import { getRandomPixel } from "../../utils/utils";
import GameOver from "../GameOver/GameOver";
import "./Snake.css";
const rowNumber = 20;
const columnNumber = 20;
const ceilWidth = 25;

function resetGame(setSnake, setCurrentDirection, setScore) {
	const body1 = { row: 5 * ceilWidth, column: 0 * ceilWidth };
	const body2 = { row: 5 * ceilWidth, column: 1 * ceilWidth };
	const body3 = { row: 5 * ceilWidth, column: 2 * ceilWidth };
	const body4 = { row: 5 * ceilWidth, column: 3 * ceilWidth };
	setSnake([body1, body2, body3, body4]);
	setCurrentDirection("down");
}
function gameTick(
	currentDirection,
	setCurrentDirection,
	snake,
	setSnake,
	food,
	setFood,
	setScore,
	setDie,
	die,
) {
	if (die) {
		resetGame(setSnake, setCurrentDirection);
	}
	const snakeHead = snake[snake.length - 1];
	let { row, column } = snakeHead;

	if (snakeHead.row === food.row && snakeHead.column === food.column) {
		// Snake ate the food, time to show set new food
		const newHead = {
			row: food.row,
			column: food.column,
		};
		setSnake((prevState) => {
			prevState.push(newHead);
			return prevState;
		});
		setFood(getRandomPixel(rowNumber, columnNumber));
		// increase the score
		setScore((prevState) => {
			return prevState + 1;
		});
	}
	// Snake moves head
	switch (currentDirection) {
		case "left":
			row = row - ceilWidth;
			break;
		case "up":
			column = column - ceilWidth;
			break;
		case "down":
			column = column + ceilWidth;
			break;
		case "right":
			row = row + ceilWidth;
			break;
		default:
			break;
	}
	let newHead = { row, column };
	if (boundaryCollision(newHead)) {
		setDie(true);
	}
	if (selfCollision(newHead, snake)) {
		setDie(true);
	}
	setSnake((prevState) => {
		const removedTailSnake = prevState.slice(1);
		return [...removedTailSnake, newHead];
	});
}

function boundaryCollision(head) {
	const { row, column } = head;
	const rowWidth = rowNumber * ceilWidth;
	const columnHeight = columnNumber * ceilWidth;
	if (row < 0 || column < 0 || row >= rowWidth || column >= columnHeight) {
		return true;
	}
	return false;
}

function selfCollision(head, snake) {
	const { row, column } = head;
	for (const part of snake) {
		if (part.row === row && part.column === column) {
			return true;
		}
	}
	return false;
}

function Snake({
	currentDirection,
	setCurrentDirection,
	food,
	setFood,
	speed,
	setScore,
	score,
	setStart,
}) {
	const body1 = { row: 5 * ceilWidth, column: 0 * ceilWidth };
	const body2 = { row: 5 * ceilWidth, column: 1 * ceilWidth };
	const body3 = { row: 5 * ceilWidth, column: 2 * ceilWidth };
	const body4 = { row: 5 * ceilWidth, column: 3 * ceilWidth };
	const [snake, setSnake] = useState([body1, body2, body3, body4]);
	const [die, setDie] = useState(false);
	function handleKeyPress(e) {
		switch (e.keyCode) {
			case 37:
				setCurrentDirection("left");
				break;
			case 38:
				setCurrentDirection("up");
				break;
			case 39:
				setCurrentDirection("right");
				break;
			case 40:
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
			gameTick(
				currentDirection,
				setCurrentDirection,
				snake,
				setSnake,
				food,
				setFood,
				setScore,
				setDie,
				die,
			);
		}, speed);
		return () => clearInterval(inter);
	}, [currentDirection, snake, food]);
	return die ? (
		<GameOver score={score} setStart={setStart} />
	) : (
		snake.map((element) => {
			return (
				<div
					style={{
						width: `${ceilWidth}px`,
						height: `${ceilWidth}px`,
						position: "absolute",
						left: `${element.row}px`,
						top: `${element.column}px`,
					}}
					className='snake'></div>
			);
		})
	);
}

export default Snake;

import React from "react";
import "./GameOver.css";
export default function GameOver({ score, setStart }) {
	function handleClick() {
		setStart(false);
	}
	return (
		<div className='game-over'>
			<h1 className='heading'>Game Over</h1>
			<h1 className='sub-heading'>Score</h1>
			<h2 className='score'>{score}</h2>
			<button className='restart' onClick={handleClick}>
				Start
			</button>
		</div>
	);
}

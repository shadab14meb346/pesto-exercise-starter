import React from "react";
import "./Landing.css";
const easyTimeIntervalInMS = 300;
const mediumTimeIntervalInMS = 200;
const hardTimeIntervalInMS = 100;
function Landing({ setSpeed, setStart, setScore }) {
	function handleClick(e) {
		const { name } = e.target;
		if (name === "easy") {
			setSpeed(easyTimeIntervalInMS);
		}
		if (name === "medium") {
			setSpeed(mediumTimeIntervalInMS);
		}
		if (name === "hard") {
			setSpeed(hardTimeIntervalInMS);
		}
		setStart(true);
		setScore(0);
	}
	return (
		<div className='main'>
			<h1 className='heading'>Snake</h1>
			<h2>CHOOSE LEVEL:</h2>
			<div className='button-container'>
				<button name='easy' onClick={handleClick}>
					Easy
				</button>
				<button name='medium' onClick={handleClick}>
					Medium
				</button>
				<button name='hard' onClick={handleClick}>
					Hard
				</button>
			</div>
		</div>
	);
}

export default Landing;

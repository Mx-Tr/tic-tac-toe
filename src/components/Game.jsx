import GameText from "./GameText";
import Field from "./Field";
import {useState} from "react";
import Button from "./Button/Button";


function results(arr) {

	if (
		arr[0] && (arr[0] === arr[4] && arr[4] === arr[8]) ||
		arr[0] && (arr[0] === arr[1] && arr[1] === arr[2]) ||
		arr[0] && (arr[0] === arr[3] && arr[3] === arr[6]) ||
		arr[1] && (arr[1] === arr[4] && arr[4] === arr[7]) ||
		arr[2] && (arr[2] === arr[4] && arr[4] === arr[6]) ||
		arr[2] && (arr[2] === arr[5] && arr[5] === arr[8]) ||
		arr[3] && (arr[3] === arr[4] && arr[4] === arr[5]) ||
		arr[6] && (arr[6] === arr[7] && arr[7] === arr[8])

	) {
		gameIsOn = false
		console.log(arr)
	}
	else if (!(arr.find((item) => item === null) === null)) {
		isDraw = true
	}
}
let isDraw = false
let gameIsOn = true


export default function Game() {
	const [cellValue, setCellValue] = useState('cross')
	const [fieldArray, setFieldArray] = useState(new Array(9).fill(null))

	function restartGame() {
		setFieldArray(new Array(9).fill(null))
		setCellValue('cross')
		gameIsOn = true
	}


	results(fieldArray)

	return (
		<div className="gameComp">

			<GameText
				cellValue={cellValue}
				gameIsOn={gameIsOn}
				isDraw={isDraw}
			/>

			<Field
				fieldArray={fieldArray}
				cellValue={cellValue}
				setCellValue={setCellValue}
				gameIsOn={gameIsOn}

			/>

			<Button
				onClick={restartGame}
			>
				Рестарт
			</Button>
		</div>
	);
};
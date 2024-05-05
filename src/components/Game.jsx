import GameText from "./GameText";
import Field from "./Field";
import {useState} from "react";

const fieldArray = new Array(9).fill(null);

function results() {

	if (
		fieldArray[0] && (fieldArray[0] === fieldArray[4] && fieldArray[4] === fieldArray[8]) ||
		fieldArray[0] && (fieldArray[0] === fieldArray[1] && fieldArray[1] === fieldArray[2]) ||
		fieldArray[0] && (fieldArray[0] === fieldArray[3] && fieldArray[3] === fieldArray[6]) ||
		fieldArray[1] && (fieldArray[1] === fieldArray[4] && fieldArray[4] === fieldArray[7]) ||
		fieldArray[2] && (fieldArray[2] === fieldArray[4] && fieldArray[4] === fieldArray[6]) ||
		fieldArray[2] && (fieldArray[2] === fieldArray[5] && fieldArray[5] === fieldArray[8]) ||
		fieldArray[3] && (fieldArray[3] === fieldArray[4] && fieldArray[4] === fieldArray[5]) ||
		fieldArray[6] && (fieldArray[6] === fieldArray[7] && fieldArray[7] === fieldArray[8])

	) {
		console.log('winner')
	}
}


export default function Game() {
	const [cellValue, setCellValue] = useState('cross')

	console.log(fieldArray)

	return (
    <div className="gameComp">

			<Field
				fieldArray={fieldArray}
				cellValue={cellValue}
				setCellValue={setCellValue}
			/>
    </div>
  );
};
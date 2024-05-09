import Cell from "./Cell";

export default function Field({fieldArray,cellValue, setCellValue, gameIsOn}) {

	return (
		<div className={"field"} style={{marginBottom: "1rem"}}>
			{fieldArray.map((cell, index) => {
				return <Cell
					key={index}
					index={index}
					cellValue={cellValue}
					setCellValue={setCellValue}
					fieldArray={fieldArray}
					gameIsOn={gameIsOn}
				/>

			})}
		</div>
	)
}
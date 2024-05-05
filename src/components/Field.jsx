import Cell from "./Cell";

export default function Field({fieldArray,cellValue, setCellValue}) {

	console.log(fieldArray);


	return (
		<div className={"field"}>
			{fieldArray.map((cell, index) => {
				return <Cell
					key={index}
					index={index}
					cellValue={cellValue}
					setCellValue={setCellValue}
					fieldArray={fieldArray}/>
			})}
		</div>
	)
}
import Cell from "./Cell";

export default function Field() {
	const fieldArray = new Array(9).fill(null);

	return (
		<div className={"field"}>
			{fieldArray.map((cell, index) =>
				<Cell key={index} />
			)}
		</div>
	)
}
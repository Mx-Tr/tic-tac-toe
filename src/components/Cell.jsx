export default function Cell({index, fieldArray, cellValue, setCellValue}) {


	return (
		<div
			className={fieldArray[index] ? `cell ${fieldArray[index]}` : `cell`}
			onClick={() => {
				if (fieldArray[index] === null) {

					fieldArray[index] = cellValue
					setCellValue(cellValue === "zero" ? "cross" : "zero")

				}

			}}
		>

		</div>
	)
}
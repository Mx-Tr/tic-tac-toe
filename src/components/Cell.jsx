
let queue = "zero";


export default function Cell({index, fieldArray, cellValue, setCellValue}) {


	return (
		<div
			className={fieldArray[index] ? `cell ${fieldArray[index]}` : `cell`}
			onClick={() => {
				if (fieldArray[index] === null) {

					setCellValue(queue)
					queue = queue === "zero" ? "cross" : "zero"
					fieldArray[index] = queue
				}

			}}
		>

		</div>
	)
}
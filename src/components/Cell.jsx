import {useState} from "react";

let queue = "zero";

export default function Cell({value}) {
	const [cellValue, setCellValue] = useState('')

	return (
		<div
			className={`cell ${cellValue}`}
			onClick={() => {
				queue = (queue === "cross") ? "zero" : "cross"
				setCellValue(queue)
			}}
		>

		</div>
	)
}
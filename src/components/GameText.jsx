export default function GameText({cellValue, gameIsOn, isDraw}) {
	return (
		<h1 className={"gameText"}>
			{isDraw ? "Ничья" : gameIsOn ? `Ход: ${cellValue === 'cross' ? 'X' : 'O'}` : `Победа: ${cellValue === 'cross' ? 'O' : 'X'}`}
		</h1>
	)
}
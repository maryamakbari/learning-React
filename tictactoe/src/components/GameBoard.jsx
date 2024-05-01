
export default function GameBoard({onSelectSquare, board}){ // I also delete {activePlayerSymbol} prop

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //        const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; // for saving previous shape of GameBoard
    //        updatedBoard[rowIndex][colIndex]= activePlayerSymbol;
    //        return updatedBoard;
    //     });
    //     onSelectSquare();
   // }
    
    return(
        <ol id="game-board">
            {board.map((row, rowIndex) => 
            (<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => // playerSymbol = col.
                    (<li key={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                    </li>))}
                </ol>
            </li>))}
        </ol>
    );
}
import {useState} from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/log.jsx';
import { WINNING_COMBINATIONS } from './components/winning-combinations.jsx';
import GameOver from './components/GameOver.jsx';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns){ //we can create a helper function outside of the component function because this helper function will not need any access to the state or any other data related to the component.
  let currentPlayer = 'X';
      if (gameTurns.length> 0 && gameTurns[0].player ==='X'){
        currentPlayer = 'O';
      }
  return currentPlayer;
}

function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map( array => [...array])]; // we move this part from GameBoard.jsx // part 92
  for (const turn of gameTurns){
      const {square, player} = turn;
      const {row, col}= square;
      gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players){
  let winner;
  for (const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
      ){
         winner = players[firstSquareSymbol];
      };
  };
  return winner;
}

function App() {
  //const [activePlayer, setActivePlayer] = useState('X');
  
  const [players, setPlayers] = useState(PLAYERS); //part 93

  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;  // part 91

  function handleSelectSquare(rowIndex, colIndex){
    //setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns ((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [{square : {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns];
      return updatedTurns;
    });
  }

  function handleRestart(){
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName){ //part 93
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol] : newName, //we dynamically set a property with this square bracket syntax here,so that's standard JavaScript, not React specific.
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName= {handlePlayerNameChange}/>
          <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} onChangeName= {handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}

         <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App




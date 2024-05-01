import { useState, useRef} from 'react';

export default function Player() {
  const [enteredName, setEnteredName] = useState(null);
  const playerName = useRef();

  function handleName(){
    setEnteredName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleName}>Set Name</button>
      </p>
    </section>
  );
}

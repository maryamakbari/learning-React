import {useState} from 'react';

export default function Player({initialName, symbol, isActive, onChangeName}){
    let [isEditing, setIsEditing] = useState(false);
    let [playerName, setPlayerName] = useState(initialName);
    
    function handleEditClick(){ 
        setIsEditing(editing => !editing);

        if (isEditing){  //part 93
            onChangeName(symbol, playerName);
        }    
        
    }

    function handleChangeName(event){
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className='player-name'>{playerName}</span>;
    if (isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChangeName} />
    }

    return(
        <li className={isActive ? 'active' : undefined}>
           <span className='player'>
               {editablePlayerName}
               <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit' }</button>
        </li>
    );
}



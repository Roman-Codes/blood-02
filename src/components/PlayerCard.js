import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import characterList from '../data/character-list';
import RolePicker from './RolePicker';


const PlayerCard = ({ number }) => {
    const [playerName, setPlayerName] = useState('');
    const [playerRole, setPlayerRole] = useState('');

    const handleName = event => {
        if (event.charCode === 13){
            setPlayerName(event.target.value);
        }
    }


    return(
        <div className="PlayerCard" id={playerRole}>
            <label htmlFor="name">Name:</label>
            <div>{playerName === '' ? <input name="name" onKeyPress={handleName} /> : <div>{playerName}</div> }</div>
            {playerRole.length ? <div>{`I am ${playerRole}`}</div> : <RolePicker setPlayerRole={setPlayerRole}/>}
        </div>

    )
}

export default PlayerCard;
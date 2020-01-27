import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import RolePicker from './RolePicker';

const Card = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    padding:15px;
    margin: 5px;
`

const PlayerCard = ({ number }) => {
    const [playerName, setPlayerName] = useState('');
    const [playerRole, setPlayerRole] = useState('');

    const handleName = event => {
        if (event.charCode === 13){
            setPlayerName(event.target.value);
        }
    }


    return(
        <Card className="PlayerCard" id={playerRole}>
            <label htmlFor="name">Name:</label>
            <div>{playerName === '' ? <input name="name" onKeyPress={handleName} /> : <div>{playerName}</div> }</div>
            {playerRole.length ? <div>{`I am ${playerRole}`}</div> : <RolePicker setPlayerRole={setPlayerRole}/>}
        </Card>

    )
}

export default PlayerCard;
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import PlayerCard from './PlayerCard';


const PlayerZone = ({ numberOfPlayers }) => {
    const [number, setNumber] = useState(null);

    useEffect(()=>{
        setNumber(numberOfPlayers);
    }, [numberOfPlayers])

    const renderCards = () => {
        const arr = [...Array(number)].map((_, i) => i);
        console.log(arr);

        return arr.map( (player, index) =>{
            return <PlayerCard number={index} />
        })
    }


    return(
        <div className="PlayerZone">
            <h3>Zis be PlayerZone</h3>
            <br/>
            <div className="playercards" style={{ display: 'flex' }}>
                {numberOfPlayers ? renderCards() : <span>Select number of players plz</span>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { numberOfPlayers: state.numberOfPlayers };
}

export default connect(mapStateToProps)(PlayerZone);
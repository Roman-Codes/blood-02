import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import PlayerCard from './PlayerCard';

const Zone = styled.div`
    display: flex;
    flex-wrap: wrap;
`

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
        <Zone className="PlayerZone">
            {numberOfPlayers ? renderCards() : <span>Select number of players plz</span>}
        </Zone>
    )
}

const mapStateToProps = (state) => {
    return { numberOfPlayers: state.numberOfPlayers };
}

export default connect(mapStateToProps)(PlayerZone);
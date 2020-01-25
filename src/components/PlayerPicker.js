import React from 'react';
import { connect } from 'react-redux';
import { selectNumberOfPlayers } from '../actions';

import PlayerCard from './PlayerCard';


const PlayerPicker = ({ selectNumberOfPlayers }) => {

    const renderPicker = () => {
        const picker = [];
        for (let i = 5; i <= 15; i++){
            picker.push(i);
        }

        const mappedPicker = picker.map( option => {
            return <option value={option}>{option}</option>
        })

        return mappedPicker;
    }

    const handleChange = event => {
        const numberOfPlayers = event.target.value;
        selectNumberOfPlayers(numberOfPlayers);
    }

    return(
        <div className="PlayerPicker">
            <label htmlFor="player-picker">Pick Number Of Players</label>
            <select onChange={handleChange} name="player-picker" id="player-picker">
                {renderPicker()};
            </select>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return { numberOfPlayers: state.numberOfPlayers };
}

export default connect(mapStateToProps, { selectNumberOfPlayers })(PlayerPicker);
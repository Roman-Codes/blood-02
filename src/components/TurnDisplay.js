import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { advanceTurn } from '../actions';

const TurnDisplay = ({ advanceTurn, turn }) => {
    return(
        <div className="TurnDisplay">
            <h3>I am turn display</h3>
            <div>It is Turn #{turn.number}</div>
            <div>It is {turn.daytime ? <span> 🌞 </span>: <span>🌒</span> }</div>
            <button onClick={advanceTurn}>Next</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        turn: state.turn
    }
}

export default connect(mapStateToProps, { advanceTurn })(TurnDisplay)
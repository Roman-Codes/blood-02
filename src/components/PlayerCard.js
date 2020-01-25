import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


const PlayerCard = ({ number }) => {
    return(
        <div className="PlayerCard">
            <h2>I am a player #{number}</h2>
        </div>
    )
}

export default PlayerCard;
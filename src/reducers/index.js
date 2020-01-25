import { combineReducers } from 'redux';

const selectedCharacterReducer = (selectedCharacter = null, action) => {
    if (action.type === 'CHARACTER_SELECTED'){
        return action.payload;
    }

    return selectedCharacter;
}

const numberOfPlayersReducer = (numberOfPlayers = null, action) => {
    if (action.type === 'NUMBER_OF_PLAYERS_SELECTED'){
        return parseInt(action.payload);
    }

    return numberOfPlayers;
}

export default combineReducers({
    character: selectedCharacterReducer,
    numberOfPlayers: numberOfPlayersReducer,
})
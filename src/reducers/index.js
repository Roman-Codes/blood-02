import { combineReducers } from 'redux';

import roles from '../data/character-list';

const allRoles = roles.map(role => role.name);

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

const rolesReducer = (roles = allRoles, action) => {
    switch(action.type){
        case 'ROLE_PICKED' :{
            console.log('role picked');
            return roles.filter(role => role !== action.payload);
        }

        case 'ROLE_REMOVED' :{
            return [...roles, action.payload]
        }

        default:
            return roles
    }
}

const turnObj = {
    number: 1,
    daytime: true
}

const turnReducer = (turn = turnObj, action) => {
    const nextDay = (obj) =>{
        obj.daytime = true;
        obj.number++;
    }

    if (action.type === 'TURN_ADVANCED'){
        const cloneObject = {...turn};
        if (cloneObject.daytime){
            cloneObject.daytime = false;
            return cloneObject
        }

        nextDay(cloneObject);
        return cloneObject;
    }

    return turn;
}

export default combineReducers({
    character: selectedCharacterReducer,
    numberOfPlayers: numberOfPlayersReducer,
    roles: rolesReducer,
    turn: turnReducer
})
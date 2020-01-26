export const selectCharacter = (character) => {
    // Return an action

    return{
        type: 'CHARACTER_SELECTED',
        payload: character
    };
}

export const selectNumberOfPlayers = (number) => {
    // Return an action

    return{
        type: 'NUMBER_OF_PLAYERS_SELECTED',
        payload: number
    };
}

export const pickRole = (role) => {
    // Return an action

    return{
        type: 'ROLE_PICKED',
        payload: role
    };
}

export const removeRole = (role) => {
    // Return an action

    return{
        type: 'ROLE_REMOVED',
        payload: role
    };
}
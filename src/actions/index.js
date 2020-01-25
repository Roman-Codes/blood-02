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
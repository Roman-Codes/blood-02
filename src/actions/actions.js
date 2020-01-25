export const selectCharacter = (character) => {
    // Return an action
    return{
        type: 'CHARACTER_SELECTED',
        payload: character
    };
}
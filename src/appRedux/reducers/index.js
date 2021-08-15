import { combineReducers } from 'redux'
import { ADD_TO_TEAM, REMOVE_FROM_TEAM } from "../actions"
const initialState = {
    myPokemonLists: JSON.parse(localStorage.getItem('mypokemon')) ? JSON.parse(localStorage.getItem('mypokemon')) : [],
}


export const FindPokemonAlreadyExist = (myPokemonLists, id) => myPokemonLists?.find(item => item.id === id)
let currentList
const teamReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_TEAM:
            currentList = [...state.myPokemonLists, action.payload]
            localStorage.setItem('mypokemon', JSON.stringify(currentList));
            return {
                ...state, myPokemonLists: currentList
            }
        case REMOVE_FROM_TEAM:
            currentList = state.myPokemonLists?.filter(item => item.id !== action.payload.id)
            localStorage.setItem('mypokemon', JSON.stringify(currentList));
            return {
                ...state,
                myPokemonLists: currentList
            }

        default:
            return state;
    }
}

const createRootReducer = () => combineReducers({
    cart: teamReducer
});

export default createRootReducer

import { DECREMENT, INCREMENT } from "./ActionsType";

//set initialState
const initialState = {
    value: 5
}

//create reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + action.payload
            }
        case DECREMENT:
            return {
                ...state,
                value: state.value - action.payload
            }

        default:
            return state;
    }
}

export default counterReducer;
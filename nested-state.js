import { createStore } from "redux";
import produce from "immer";
const intitialState = {
    name: 'Huy',
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA'
    }
}

// create action types
const UPDATED_STREET = 'UPDATED_STREET';
const UPDATED_NAME = 'UPDATED_NAME';
const UPDATED_CITY = 'UPDATED_CITY';
const UPDATED_STATE = 'UPDATED_STATE';

// create action creator

const updatedStreet = (street) => {
    return {
        type: UPDATED_STREET,
        payload: street
    }
}
const updatedName = (name) => {
    return {
        type: UPDATED_NAME,
        payload: name
    }
}
const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case UPDATED_STREET:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // }

            // first arg - current state
            // second arg - func with receive a draft copy of state
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
        default:
            return state
    }
}

const store = createStore(reducer);

console.log('Initial state: ', store.getState());
import { bindActionCreators, createStore } from 'redux'
// action type
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

// Define an action is obj with type property

{
    type: CAKE_ORDERED
}

// define an action creator is func return an obj

const orderCake = () => {
    return {
        type: CAKE_ORDERED
    }
}

const restockCake = (qty = 1) => {
    return {
        type: CAKE_RESTOCKED,
        quantity: qty
    }
}
// Create a reducer funtion

const initialState = {
    numberOfCakes: 10,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1,
            };
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.quantity
            }
        default:
            return state
    }
}


// Create store hold object
const store = createStore(reducer);
const actions = bindActionCreators({ restockCake, orderCake }, store.dispatch)
const unSub = store.subscribe(() => console.log('Update state:', store.getState()))
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(10)
unSub()


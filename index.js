import { bindActionCreators, createStore } from 'redux'
import { combineReducers } from 'redux';
// action type
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERRED = 'ICECREAM_ORDERRED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';
// Define an action is obj with type property

{
  type: CAKE_ORDERED
}

// define an action creator is func return an obj
// 1. action creator for cake shop
const orderCake = (quantity = 1) => {
  return {
    type: CAKE_ORDERED,
    payload: quantity
  }
}

const restockCake = (quantity = 5) => {
  return {
    type: CAKE_RESTOCKED,
    payload: quantity
  }
}

// 2. action creator for cake shop

const orderIcecream = (quantity = 1) => {
  return {
    type: ICECREAM_ORDERRED,
    payload: quantity
  }

}
const restockIcecream = (quantity = 5) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: quantity
  }
}
// Create a reducer funtion

const initialStateCakes = {
  numberOfCakes: 10,
}

const initialStateIceCream = {
  numberOfIceCreams: 20
}

const cakeReducer = (state = initialStateCakes, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload
      }
    default:
      return state
  }
}

const iceCreamReducer = (state = initialStateIceCream, action) => {
  switch (action.type) {
    case ICECREAM_ORDERRED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - action.payload
      }
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload
      }
    default:
      return state
  }
}

// Create store hold object

// combineReducer hold object

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
})

const store = createStore(rootReducer);
console.log('initial state', store.getState());
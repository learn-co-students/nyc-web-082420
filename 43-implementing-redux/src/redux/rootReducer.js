// hold our combineReducers as well as reducer functions
import { combineReducers } from 'redux';

const defaultState = {
    api: [],
    counter: 0
};

// reducer takes in an action 
// reducer also takes in a default state
function counterReducer(state = defaultState.counter, action) {
    switch (action.type) {
        case "INCREMENT_COUNTER":
            console.log("counter incrementing");
            return ++state;
            break;
        default:
            return state;
            break;
    }
};

// {type: "INCREMENT_COUNTER"}
function apiReducer(state = defaultState.api, action) {
    switch (action.type) {
        case "FETCH_CHARACTERS":
            return {};
            break;
        default:
            return state;
            break;
    }
};


const rootReducer = combineReducers({
    api: apiReducer,
    counter: counterReducer
});

export default rootReducer;
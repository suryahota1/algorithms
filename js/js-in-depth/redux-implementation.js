/**
 * Actions are events which define what should change in the state but they are not
 * aware of how it happens. An action object has a type which uniquely defines the event.
 * It can optionally carry payload or data which helps in updating the state
*/

class Action {
    type;
    payload;

    constructor ( type, payload ) {
        this.type = type;
        this.payload = payload;
    }
}

const action = new Action("DISPLAY_ALERT", {
    message: "Hello, how are you"
});

/**
 * Reducers are pure functions which recieve previous state and an action. 
 * It returns the next state.
*/

function SampleReducer ( previousState, action ) {
    // Do computations
    function compute ( state, action ) {
        return 132;
    }
    const nextState = compute(previousState, action);
    return nextState;
}

/**
 * Store is the glue which holds all the building blocks of Redux, the state tree, 
 * the action dispatchers and application reducers. It exposes three very important
 * functions, 
 *              getState(): To get the current application state
 *              dispatch(): To dispatch an action and update the state tree
 *              subscribe(): To subscribe the store and get notified when state 
 *                           changes
*/


function createStore ( rootReducer ) {

    let state = {};
    let subscribers = [];

    function getState () {
        return state;
    }

    function dispatch ( action ) {
        state = rootReducer(action);
        subscribers.forEach(sub => sub(state));
    }

    function subscribe ( fn ) {
        subscribers.push(fn);
        return () => {
            subscribers.filter(sub => sub !== fn);
        }
    }

    return {
        getState, 
        dispatch, 
        subscribe
    };
}

function combineReducers ( reducerObj ) {
    return function ( state, action ) {
        const keys = Object.keys(reducerObj);
        const finalState = {};
        for ( const key of keys ) {
            finalState[key] = reducerObj[key](state[key], action);
        }
        return finalState;
    }
}

// Hold all of our action creators
// function that returns an action

// export testFunction = () => console.log("would this work?")

export function counterAction() {
    return { type: "INCREMENT_COUNTER" }
};

export function fetchAction() {
    // thunk retains access to dispatch and passes it to the inner function
    return function (dispatch) {
        //fetch our characters
        fetch('http://localhost:5000/api')
            .then(resp => resp.json())
            // function must have access to dispatch 
            // invoke dispatch with an object as an action 
            .then(api => dispatch({ type: "FETCH_CHARACTERS", payload: api }))
            .catch(console.log)
    };
};
export function createAction(newCharacter) {
    // thunk retains access to dispatch and passes it to the inner function
    return function (dispatch, getState) {
        fetch('http://localhost:5000/api', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(newCharacter)
        })
            .then(resp => resp.json())
            // payload: [...getState().api, characterr] }
            .then(payload => dispatch({ type: "ADD_CHARACTERR", payload }))
            .catch(console.log)
    }
};
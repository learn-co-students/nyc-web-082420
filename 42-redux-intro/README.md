## Redux


# Why

- Redux 
- Better State Managment
- 2 or more components that share the same state

# Redux Library
Core library for Redux 

- Store
- Reducer
    - CombineReducers
- Dispatch
    - Action
        - Action Creators

# React Redux Library
Give access to tools that ties React and Redux together

- Provider
- Connect: Connect an individual component to the redux store
    - mapStateToProps
        - subscribe to our redux state
        - grab data from redux state and add it to the components props
            - this.props
            - props
    - mapDispatchToProps
        - go into the redux store, grab the dispatch function, add that function to props
        - this.props.dispatch({})
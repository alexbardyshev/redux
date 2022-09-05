export function createStore(
    reducer,
    initialState = reducer(undefined, {})
) {
    let state = initialState;
    let callbacks = [];

    return {
        getState() {
            return state;
        },
        dispatch(action) {
            state = reducer(state, action);
            callbacks.forEach(f => f());
        },
        subscribe( f ) {
            callbacks.push(f);
        }
    }
}

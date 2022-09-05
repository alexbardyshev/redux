import {createStore} from "./redux.js";
import amountReducer, { actions as amountActions } from "./store/amount.js";
import goodsReducer, { actions as goodsActions } from './store/goods.js'
import positionReducer, {actions as positionActions } from "./store/position.js";

const store = createStore(positionReducer)

const cache = [];
store.subscribe(() => {
    cache.push(store.getState())
})

store.dispatch(positionActions.moveRight());
store.dispatch(positionActions.moveRight());
store.dispatch(positionActions.moveRight());
store.dispatch(positionActions.moveUp());
store.dispatch(positionActions.moveUp());
store.dispatch(positionActions.moveLeft());
store.dispatch(positionActions.moveDown());

console.log(cache)

import {createStore} from "./redux.js";
import amountReducer, { actions as amountActions } from "./store/amount.js";
import goodsReducer, { actions as goodsActions } from './store/goods.js'

const store = createStore(amountReducer)
const store2 = createStore(goodsReducer)

store2.subscribe(() => {
    console.log(store2.getState())
})

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(amountActions.add(100));
store.dispatch(amountActions.add(20));
store.dispatch(amountActions.take(50));
store.dispatch(amountActions.add(40));
store.dispatch(amountActions.clear());

store2.dispatch(goodsActions.add(100));
store2.dispatch(goodsActions.add(20));
store2.dispatch(goodsActions.take(100));
store2.dispatch(goodsActions.add(40));
store2.dispatch(goodsActions.clear());

import {createStore} from "./redux.js";

import amountReducer, { actions as amountActions } from "./store/amount.js";
import goodsReducer, { actions as goodsActions } from './store/goods.js'
import positionReducer, {actions as positionActions } from "./store/position.js";

const initialState = {
    amount: 0,
    goods: [],
    position: { x: 0, y: 0 }
}

const reducer = (state = initialState, action) => {
    return {
        amount: amountReducer(state.amount, action),
        goods: goodsReducer(state.goods, action),
        position: positionReducer(state.position, action),

    }
}

const store = createStore(reducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(positionActions.moveRight());
store.dispatch(amountActions.add(50));
store.dispatch(amountActions.take(20));
store.dispatch(goodsActions.add('Apple'));

import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {createRootReducer} from "./main-reducer";

export const store = createStore(createRootReducer(), composeWithDevTools(
    applyMiddleware(thunk)
))

export default store

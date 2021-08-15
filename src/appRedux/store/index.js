
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';

import createRootReducer from '../reducers'

const middlewares = [thunk];

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(), // root reducer with router state
        preloadedState,
        compose(
            applyMiddleware( // for dispatching history actions
                ...middlewares
            ),
        ),
    );
    return store;
}

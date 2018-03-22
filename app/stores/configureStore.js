import {
    createStore,
    applyMiddleware
} from 'redux';

import logger from 'redux-logger';
import reducer from '../reducers'
const middleware = [];

if(process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

export default (initialState) => {
    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(...middleware),
    )
    return store;
}
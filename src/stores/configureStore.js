import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import serverMiddleware from './middleware/server';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState) => createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(thunkMiddleware),
        applyMiddleware(serverMiddleware)
    )
);

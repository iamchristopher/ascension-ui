import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import serverMiddleware from './middleware/server';
import rootReducer from '../reducers';

export default (initialState) => createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunkMiddleware),
        applyMiddleware(serverMiddleware)
    )
);

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import chat from './chat';
import notification from './notification';
import pawn from './pawn';
import user from './user';

export default combineReducers({
    chat,
    notification,
    pawn,
    user,
    router: routerReducer
});

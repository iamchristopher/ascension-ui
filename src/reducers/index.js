import { combineReducers } from 'redux';

import chat from './chat';
import pawn from './pawn';
import user from './user';

export default combineReducers({
    chat,
    pawn,
    user
});

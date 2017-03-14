import { combineReducers } from 'redux';

import chat from './chat';
import pawn from './pawn';

export default combineReducers({
    chat,
    pawn
});

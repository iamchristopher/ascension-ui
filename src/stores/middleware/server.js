import io from 'socket.io-client/dist/socket.io';
import wildcard from 'socketio-wildcard';
import {
    receiveMessage
} from '../../actions/chat';
import * as pawn from '../../actions/pawn';

const connection = io('http://localhost:8080');
wildcard(io.Manager)(connection);

export default ({ getState, dispatch }) => {
    connection.on('CHAT_MESSAGE_RECEIVE', message => dispatch(receiveMessage(message)));
    connection.on('PAWN_MOVE', payload => dispatch(pawn.move({
        ...payload,
        sync: false
    })));
    connection.on('PAWN_REGISTER', payload => dispatch(pawn.register({
        ...payload,
        sync: false
    })));

    connection.on('*', ({
        data: [
            type,
            payload
        ]
    } = {}) => {
        // return console.log(type, payload);
    });

    return next => action => {
        const {
            type,
            sync,
            ...payload
        } = action;

        if (sync) {
            connection.emit(type, payload);
        }

        return next(action);
    };
};

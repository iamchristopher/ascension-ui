import {
    receiveMessage
} from '../../actions/chat';

import io from 'socket.io-client/dist/socket.io';
const connection = io('http://localhost:8080');

export default ({ getState, dispatch }) => {
    connection.on('MESSAGE', message => dispatch(receiveMessage(message)));

    return next => action => {
        const {
            type,
            value
        } = action;

        connection.emit(type, value);

        return next(action);
    };
};

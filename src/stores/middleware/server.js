import io from 'socket.io-client/dist/socket.io';
import wildcard from 'socketio-wildcard';

const connection = io('http://localhost:8080');
wildcard(io.Manager)(connection);

export default ({ getState, dispatch }) => {
    connection.on('*', ({
        data: [
            type,
            payload
        ]
    } = {}) => dispatch({
        type,
        ...payload
    }));

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

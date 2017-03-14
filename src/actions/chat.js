export const sendMessage = (value) => ({
    type: 'CHAT_MESSAGE_SEND',
    value
});

export const receiveMessage = (value) => ({
    type: 'CHAT_MESSAGE_RECEIVE',
    value
});

export const joinRoom = ({
    room,
    user
} = {}) => ({
    type: 'CHAT_JOIN_ROOM',
    value: {
        user,
        room
    }
});

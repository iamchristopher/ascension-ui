export const sendMessage = ({
    sender,
    text
} = {}) => ({
    type: 'CHAT_MESSAGE_SEND',
    sender,
    text
});

export const receiveMessage = ({
    sender,
    text
} = {}) => ({
    type: 'CHAT_MESSAGE_RECEIVE',
    sender,
    text
});

export const joinRoom = ({
    room,
    user
} = {}) => ({
    type: 'CHAT_JOIN_ROOM',
    user,
    room
});

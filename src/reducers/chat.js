const initialState = [];

export default (state = initialState, action = {}) => {
    const {
        type,
        ...message
    } = action;

    switch (type) {
        case 'CHAT_MESSAGE_RECEIVE':
        case 'CHAT_MESSAGE_SEND':
            return [
                ...state,
                message
            ];
        default:
            return state;
    }
};

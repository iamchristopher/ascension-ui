const initialState = {};

export default (state = initialState, action = {}) => {
    const {
        type,
        ...message
    } = action;

    switch (type) {
        case 'CHAT_MESSAGE_RECEIVE':
        case 'CHAT_MESSAGE_SEND':
            let id = Date.now().toString();

            return {
                ...state,
                [id]: message
            };
        default:
            return state;
    }
};

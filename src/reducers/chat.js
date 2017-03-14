const initialState = {
    messages: []
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'CHAT_MESSAGE_RECEIVE':
        case 'CHAT_MESSAGE_SEND':
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.value
                ]
            }
        default:
            return state;
    }
};

const initialState = {
    messages: []
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'RECEIVE_CHAT_MESSAGE':
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

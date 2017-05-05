const initialState = {};

export default (state = initialState, action = {}) => {
    const {
        type,
        ...message
    } = action;

    switch (type) {
        case 'USER_SESSION_SET':
            return {
                ...state,
                session: message.id
            };
        default:
            return state;
    }
};

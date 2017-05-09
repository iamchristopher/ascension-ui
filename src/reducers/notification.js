const initialState = {};

export default (state = initialState, action = {}) => {
    const {
        type,
        ...message
    } = action;

    switch (type) {
        case 'NOTIFICATION_RECEIVE':
        case 'NOTIFICATION_SEND':
            let id = Date.now().toString();

            return {
                ...state,
                [id]: message
            };
        default:
            return state;
    }
};

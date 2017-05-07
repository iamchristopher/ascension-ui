const initialState = {};

export default (state = initialState, action = {}) => {
    const {
        type,
        ...message
    } = action;

    switch (type) {
        case 'TILE_TRIGGER_TAGGED':
            return {
                ...state
            };
        default:
            return state;
    }
};

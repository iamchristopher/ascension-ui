const initialState = {};

export default (state = initialState, action = {}) => {
    const {
        id,
        type,
        ...data
    } = action;

    switch (type) {
        case 'PAWN_REGISTER':
            return {
                ...state,
                [id]: data
            };
        case 'PAWN_MOVE':
            return {
                ...state,
                [id]: {
                    ...state[id],
                    ...data
                }
            };
        default:
            return state;
    }
};

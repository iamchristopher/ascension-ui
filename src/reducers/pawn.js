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
        case 'PAWN_UNREGISTER':
            let {
                owner
            } = action;

            return Object.keys(state)
                .filter(id => {
                    const pawn = state[id];

                    if (!pawn.owner) {
                        return true;
                    }

                    return pawn.owner !== owner
                })
                .reduce((cache, id) => ({
                    ...cache,
                    [id]: state[id]
                }), {});
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

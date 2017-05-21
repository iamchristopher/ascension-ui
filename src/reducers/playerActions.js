const initialState = {
    isAttacking: false
};

export default (state = initialState, action = {}) => {
    const {
        type,
        ...message
    } = action;

    switch (type) {
        case 'PLAYER_ACTION_ATTACK_START':
        case 'PLAYER_ACTION_ATTACK_STOP':
            return {
                ...state,
                isAttacking: message
            };
        case 'PLAYER_ACTION_ATTACK_TOGGLE':
            return {
                ...state,
                isAttacking: !state.isAttacking
            };
        default:
            return state;
    }
};

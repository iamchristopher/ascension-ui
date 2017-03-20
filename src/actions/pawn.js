export const register = ({
    id,
    position,
    sync
} = {}) => ({
    type: 'PAWN_REGISTER',
    id,
    position,
    sync
});

export const move = ({
    id,
    position,
    sync = true
} = {}) => ({
    type: 'PAWN_MOVE',
    id,
    position,
    sync
});

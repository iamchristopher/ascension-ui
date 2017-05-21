import React from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';
import Panel from '../components/Panel';

const App = ({
    isAttacking,
    toggleAttackAction
}) => (
    <Panel
        title="Actions"
    >
        <Button
            onClick={toggleAttackAction}
        >
            { isAttacking ? 'Cancel attack' : 'Start attack' }
        </Button>
    </Panel>
);

const mapStateToProps = ({
    playerActions: {
        isAttacking
    }
}) => ({
    isAttacking
});

const mapDispatchToProps = dispatch => ({
    toggleAttackAction: () => dispatch({ type: 'PLAYER_ACTION_ATTACK_TOGGLE' })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

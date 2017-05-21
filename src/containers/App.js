import React from 'react';
import { connect } from 'react-redux';

const App = ({
    children,
    isAttacking = false
}) => (
    <div
        style={{
            cursor: isAttacking ? 'crosshair' : 'default'
        }}
    >
        { children }
        <div id="client"></div>
    </div>
);

const mapStateToProps = ({
    playerActions: {
        isAttacking
    }
}) => ({
    isAttacking
});

export default connect(
    mapStateToProps
)(App);

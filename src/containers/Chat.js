import { connect } from 'react-redux';
import querystring from 'querystring';
import Chat from '../components/Chat';

import * as chat from '../actions/chat';

const mapStateToProps = ({ chat }) => ({
    messages: chat.messages
});

const mapDispatchToProps = dispatch => {
    const {
        room,
        user
    } = querystring.parse(window.location.search.substr(1));

    dispatch(chat.joinRoom({
        room,
        user
    }));

    return {
        onSubmit (e) {
            e.preventDefault();
            const message = e.target.message;

            dispatch(chat.sendMessage({
                sender: user,
                text: message.value
            }));

            e.target.reset();
            message.focus();
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);

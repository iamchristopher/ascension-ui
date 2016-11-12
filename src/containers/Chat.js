import { connect } from 'react-redux';
import Chat from '../components/Chat';

import * as chat from '../actions/chat';

const mapStateToProps = ({ chat }) => ({
    messages: chat.messages
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit (e) {
        e.preventDefault();
        const message = e.target.message;

        dispatch(chat.sendMessage({
            sender: 'test',
            text: message.value
        }));

        e.target.reset();
        message.focus();
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);

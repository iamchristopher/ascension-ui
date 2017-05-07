import { connect } from 'react-redux';
import Notifications from '../components/Notifications';

const mapStateToProps = ({ notification = {} }) => ({
    notifications: Object.values(notification)
});

export default connect(
    mapStateToProps
)(Notifications);

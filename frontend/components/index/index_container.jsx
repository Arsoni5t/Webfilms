import { connect } from 'react-redux';
import Index from './index';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users } }) => ({
 currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
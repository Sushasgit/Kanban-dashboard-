import { connect } from 'react-redux';

import Dashboard from '../../components/DashboardPage/DashboardPage';

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(Dashboard);

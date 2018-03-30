import { connect } from 'react-redux';

import Home from '../../components/HomePage/Homepage';

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(Home);

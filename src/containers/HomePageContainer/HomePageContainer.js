import { connect } from 'react-redux';

import Home from '../../components/HomePage/Homepage';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Home);

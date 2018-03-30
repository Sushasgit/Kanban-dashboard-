import React from 'react';
import { connect } from 'react-redux';

import SignInForm from '../../components/SignInForm/SignInForm';
import { login } from '../../actions/authActions';

class SignInContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  handleSubmit(values) {
    this.props.login(
      values.email, values.password,
      (error) => {
        this.setState({ errorMessage: error });
      },
    );
  }

  render() {
    return (
      <SignInForm
        onSubmit={this.handleSubmit.bind(this)}
        errors={this.state.errors}
      />
    );
  }
}


function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}


export default connect(mapStateToProps, { login })(SignInContainer);

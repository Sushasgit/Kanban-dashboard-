import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
// import { signIn } from '../actions';
import { register } from '../../actions/authActions';

class SignUpFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.register(values.email, values.password, () =>
      (error) => {
        this.setState({ errorMessage: error });
      });
  }

  render() {
    return (
      <SignUpForm
        onSubmit={this.handleSubmit}
        errors={this.props.error}
      />
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
    error: state.auth.error,
  };
}


export default connect(mapStateToProps, { register })(SignUpFormContainer);

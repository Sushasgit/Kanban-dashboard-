import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../../history';

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      console.log('I`m here!');

      if (!this.props.isAuthenticated) {
        history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { isAuthenticated: state.auth.isAuthenticated };
  }

  return connect(mapStateToProps)(Authentication);
}

import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';

import SignInContainer from '../../containers/SignInContainer/SignInContainer';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
  },

  alabaster: {
    backgroundColor: '#252849',
  },

  title: {
    fontSize: '44px',
    color: '#fbd854',
    margin: '20px',
  },

});

export default () => (
  <Fragment>
    <div className={css(styles.alabaster, styles.container)}>
      <h1 className={css(styles.title)}>Sign in</h1>
      <SignInContainer/>
    </div>
  </Fragment>
);


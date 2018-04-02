import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';

import SignInContainer from '../../containers/SignInContainer/SignInContainer';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '70vh',
    padding: '120px',
  },

  alabaster: {
    backgroundColor: '#F2E9E4',
  },

  title: {
    margin: 0,
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


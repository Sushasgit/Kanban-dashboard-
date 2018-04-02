import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';
import SignUpFormContainer from '../../containers/SignUpContainer/SignUpContainer';
import { Link } from 'react-router-dom';

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
    fontSize: '44px',
    color: '#22223B',
    margin: 0,
  },
});

export default () => (
  <Fragment>
   <div className={css(styles.alabaster, styles.container)}>
     <h1 className={css(styles.title)}>Sign UP</h1>
     <SignUpFormContainer />
     <Link to='/signin'> Логин </Link>
   </div>
  </Fragment>
);

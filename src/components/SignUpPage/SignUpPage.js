import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
import SignUpFormContainer from '../../containers/SignUpContainer/SignUpContainer';

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

  subTitle: {
    fontSize: '1em',
    color: '#fbd854',
    margin: '20px',
    width: '20%',
    textAlign: 'center',
  },

  link: {
    backgroundColor: '#fbd854',
    color: '#252849',
    fontSize: '1.5em',
    marginTop: '8px',
    border: 'none',
    fontWeight: '900',
    width: '20%',
    textAlign: 'center',
    marginBottom: '20px',
    padding: '13px 0',
    textDecoration: 'none',
  },
});

export default () => (
  <Fragment>
   <div className={css(styles.alabaster, styles.container)}>
     <h1 className={css(styles.title)}>Sign UP</h1>
     <SignUpFormContainer />
     <h2 className={css(styles.subTitle)}>If you already have an account, please login</h2>
       <Link className={css(styles.link)} to='/signin'> Login </Link>
   </div>
  </Fragment>
);

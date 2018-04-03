import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#121a2f',
    fontFamily: 'Kanit, sans-serif',
  },
  link: {
    textDecoration: 'none',
    color: '#fbd854',
    fontSize: '2.8em',
    fontWeight: '900',
    padding: '15px',
  },
});

class Footer extends React.Component {
  render() {
    return (
      <Fragment>
        <footer className={css(styles.footer)} >
          <a className={css(styles.link)} href='#'>Dashboard/</a>
        </footer>
      </Fragment>
    );
  }
}

export default Footer;

import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#121a2f',
    fontFamily: 'Kanit, sans-serif',
    padding: '20px',
    textAlign: 'center',
  },

  link: {
    color: '#fbd854',
    fontSize: '1.1em',
    fontWeight: '900',
    padding: '0 15px',
  },
});

class Footer extends React.Component {
  render() {
    return (
      <Fragment>
        <footer className={css(styles.footer)} >
          <span className={css(styles.link)}>© 2018 Dashboard, All rights reserved.</span>
        </footer>
      </Fragment>
    );
  }
}

export default Footer;

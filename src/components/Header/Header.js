import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  header: {
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

class Header extends React.Component {
  render() {
    return (
   <Fragment>
     <header className={css(styles.header)} >
       <a className={css(styles.link)} href='#'>Dashboard</a>
     </header>
   </Fragment>
    );
  }
}

export default Header;

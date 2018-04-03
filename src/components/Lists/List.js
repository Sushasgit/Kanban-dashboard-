import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';
import ListHeaderContainer from '../../containers/ListHeaderContainer/ListHeaderContainer';

const styles = StyleSheet.create({
  lists: {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '1900px',
  },
});

export default props => (
  <Fragment>
    <section className={css(styles.lists)}>
      <ListHeaderContainer {...props.lists}/>
    </section>
  </Fragment>
);

import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  lists: {
    display: 'flex',
    justifyContent: 'flex-start',
    maxWidth: '1900px',
    marginTop: '20px',
    alignItems: 'flex-start',
  },
});

export default () => (
  <Fragment>
    <section className={css(styles.lists)}>
      Dashboard here
    </section>
  </Fragment>
);


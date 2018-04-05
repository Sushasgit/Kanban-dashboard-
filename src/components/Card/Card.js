import React, { Fragment } from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  card: {
    width: '228px',
    backgroundColor: '#fdedb4',
    marginBottom: '10px',
    padding: '15px',
  },
});

export default props => (
  <Fragment>
    <div className={css(styles.card)}>{props.card.newText}</div>
  </Fragment>
);

import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import AddListsContainer from '../../containers/AddListsContainer/AddListsContainer';
import UserListsContainer from '../../containers/UserListsContainer/UserListsContainer';

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
      <UserListsContainer/>
      <AddListsContainer/>
    </section>
  </Fragment>
);


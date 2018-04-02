import React from 'react';
import AddListsContainer from '../../containers/AddListsContainer/AddListsContainer';
import UserListsContainer from '../../containers/UserListsContainer/UserListsContainer';

export default () => (
    <div className="container">
      Dashboard here
      <AddListsContainer/>
      <UserListsContainer/>
    </div>
);


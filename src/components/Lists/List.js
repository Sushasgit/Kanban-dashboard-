import React, { Fragment } from 'react';
import ListContainer from '../../containers/ListContainer/ListContainer';

export default props => (
  <Fragment>
    <ListContainer {...props.lists}/>
  </Fragment>
);

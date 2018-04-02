import React, { Fragment } from 'react';

export default (props) => (

    <Fragment>
    <div>
      { props.lists &&
        props.lists.map(item =>{ return <div key={item.listTitle}>{item.listTitle}</div> })
      }
    </div>
  </Fragment>
);


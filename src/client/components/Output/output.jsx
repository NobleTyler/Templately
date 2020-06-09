import React from 'react';

const output = props => (
  props ={
    show:false
  }
  <React.Fragment show={props.show}>
    <input
      type="text"
    />
  </React.Fragment>
);

export default output;

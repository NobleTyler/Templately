/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const output = props => (
  <React.Fragment>
    <output type="text">
      {props.message}
    </output>
  </React.Fragment>
);

export default output;

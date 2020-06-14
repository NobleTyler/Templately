/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Classes from './output.css';

const output = props => (
  <React.Fragment style={Classes.Output}>
    <output type="text">
      {props.message}
    </output>
  </React.Fragment>
);

export default output;

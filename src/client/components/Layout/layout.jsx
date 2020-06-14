/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import Classes from './Layout.css';
/**
 * @param {*} props
 */
const layout = props => (
  <div style={Classes.Layout}>
    {props.children}
  </div>
);
export default layout;

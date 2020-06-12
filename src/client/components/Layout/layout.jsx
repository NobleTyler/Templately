/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
import React, { useState } from 'react';
import Classes from './Layout.css';
/**
 * @param {*} props
 */
const layout = (props) => {
  console.log(props.children);
  return (
    <div style={Classes.Layout}>
      {props.children}
    </div>
  );
};
export default layout;

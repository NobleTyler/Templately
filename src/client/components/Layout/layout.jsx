/* eslint-disable react/no-this-in-sfc */
import React, { useState } from 'react';
import Classes from './Layout.css';
/**
 * @param {*} props
 */
const layout = props =>
// const [outputIsVisible, setOutputIsVisible] = useState(false);

/* const outputClosedHandler = () => {
    setOutputIsVisible(false);
  };
  const outputToggleHandler = () => {
    setOutputIsVisible(!outputIsVisible);
  }; */

  (
    <div style={Classes.Layout}>
      <toolbar>
        <button type="button">Do stuff</button>
        <button type="button">Does other stuff</button>
        <div>{props.children}</div>
      </toolbar>
    </div>
  );
export default layout;

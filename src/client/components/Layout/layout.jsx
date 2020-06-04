import React from 'react';
import Classes from './layout.css';
import ContactForm from '../contactForm/contactform';
import Output from '../Output/output';

const layout = props => (
 return(
      <React.Fragment>
    <ContactForm />
    <Output
      show={props.generated}
    />
  </React.Fragment>
)
);

export default layout;

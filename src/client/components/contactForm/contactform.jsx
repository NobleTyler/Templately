import React from 'react';
import classes from './contactForm.css';
/**
 *
 * @param {*} props
 */
const ContactForm = () => (
  <React.Fragment>
    <form style={classes.Form}>
      <label htmlFor="contactName">
        Name:
        <input type="text" name="contactName" placeholder="Name" />
      </label>
      <label htmlFor="company">
        Company:
        <input type="text" name="company" placeholder="Company" />
      </label>
      <label htmlFor="reffer">
        Reffered by:
        <input type="text" name="reffer" placeholder="Refferer" />
      </label>
      <input type="submit" value="Generate" />
    </form>
  </React.Fragment>
);

export default ContactForm;

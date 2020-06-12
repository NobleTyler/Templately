/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import classes from './contactForm.css';
import Output from '../Output/output';
/**
 *
 * @param {*} props
 */
const ContactForm = (props) => {
  const [showResults, setShowResults] = React.useState(false);
  const [input, setInput] = React.useState('');
  const showStuff = () => setShowResults(true);

  const onGetGreeting = () => {
    fetch('/api/getGreeting')
      .then(res => res.json())
      .then(messageRes => props.messageHandler(messageRes.message))
      .then(showStuff());
  };

  return (
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
        <label htmlFor="relation">
          Relationship:
          <select type="text" name="relation">
            <option value="None">None</option>
            <option value="CEO">CEO/Manager</option>
            <option value="Recruiter">Recruiter</option>
            <option value="Friend">Friend</option>
          </select>
        </label>
        <label htmlFor="reffer">
          Reffered by:
          <input type="text" name="reffer" placeholder="Refferer" />
        </label>
        <input type="button" className="generate" value="Generate" onClick={onGetGreeting} />
      </form>
      {showResults ? <Output message={props.message} /> : null}
    </React.Fragment>
  );
};

export default ContactForm;

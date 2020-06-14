/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import classes from './contactForm.css';
import Output from '../Output/output';

const ContactForm = () => {
  const [contactName, setContactName] = useState('Name');
  const [company, setCompany] = useState('Company');
  const [reffer, setRefferer] = useState('');
  const [message, setMessage] = useState('');
  const [relationship, setRelationship] = useState('CEO');

  const refferValid = !(!reffer || reffer.length === 0);

  const stringInterpolate = stringarg => eval((`\`${stringarg}\``));
  
  const messageSelector = (listOfGreetings) => {
    console.log(listOfGreetings.ceoNoReffer);
    if (relationship === 'CEO' && !refferValid) {
      setMessage(stringInterpolate(listOfGreetings.ceoNoReffer));
    } else if (relationship === 'CEO' && refferValid) {
      setMessage(stringInterpolate(listOfGreetings.ceoWithReffer));
    } else if (relationship === 'Recruiter' && !refferValid) {
      setMessage(stringInterpolate(listOfGreetings.recruiterNoReffer));
    } else if (relationship === 'Recruiter' && refferValid) {
      setMessage(stringInterpolate(listOfGreetings.recruiterWithReffer));
    } else if (relationship === 'Friend' && !refferValid) {
      setMessage(stringInterpolate(listOfGreetings.friendNoReffer));
    } else if (relationship === 'Friend' && refferValid) {
      setMessage(stringInterpolate(listOfGreetings.friendWithReffer));
    }
  };

  const onGetGreeting = () => {
    fetch('/api/getGreeting/')
      .then(res => res.json())
      .then((msr) => {
        messageSelector(msr);
      }).then(console.log(message));
  };

  return (
    <React.Fragment>
      <form style={classes.Form}>
        <label htmlFor="contactName">
          Name:
          <input type="text" name="contactName" placeholder="Name" onChange={event => setContactName(event.target.value)} />
        </label>
        <label htmlFor="company">
          Company:
          <input type="text" name="company" placeholder="Company" onChange={event => setCompany(event.target.value)} />
        </label>
        <label htmlFor="relation">
          Relationship:
          <select type="text" name="relation" onChange={event => setRelationship(event.target.value)}>
            <option value="CEO">CEO/Manager</option>
            <option value="Recruiter">Recruiter</option>
            <option value="Friend">Friend</option>
          </select>
        </label>
        <label htmlFor="reffer">
          Reffered by:
          <input type="text" name="reffer" placeholder="Refferer" onChange={event => setRefferer(event.target.value)} />
        </label>
        <input type="button" className="generate" value="Generate" onClick={onGetGreeting} />
      </form>
      <Output message={message} />
    </React.Fragment>
  );
};

export default ContactForm;

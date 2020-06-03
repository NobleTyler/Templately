/* eslint-disable space-before-function-paren */
import React, { Component } from 'react';
import './app.css';
import ContactForm from './components/contactForm/contactform';

export default class App extends Component {
  state = {
    username: null
  }

  componentDidMount () {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({
        username: user.username
      }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {' '}
        {username ? (
          // eslint-disable-next-line react/jsx-one-expression-per-line
          <h1> {`Hello ${username}`} </h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
        <ContactForm />
      </div>
    );
  }
}

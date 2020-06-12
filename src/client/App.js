/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable space-before-function-paren */
import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Classes from './app.css';
import ContactForm from './components/contactForm/contactform';

export default class App extends Component {
  state = {
    username: null,
    contactName: null,
    company: null,
    reffer: null,
    message: 'fuck'
  }

  componentDidMount () {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({
        username: user.username.toUpperCase()
      }));
  }

  messageHandler = (mesArg) => {
    console.log(mesArg);
    this.setState({
      message: mesArg.toString()
    });
  }

  render() {
    return (
      <Layout>
        <h1>
          Hello
          {' '}
          <br />
          {this.state.username}
        </h1>
        <ContactForm message={this.state.message} messageHandler={this.messageHandler} />
      </Layout>
    );
  }
}

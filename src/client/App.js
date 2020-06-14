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
    message: null,
  }

  componentDidMount () {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({
        username: user.username.toUpperCase()
      }));
  }

  messageHandler = (mesArg) => {
    this.setState({
      message: mesArg.toString()
    });
  }

  render() {
    return (
      <Layout style={Classes.body}>
        <h1>
          Hello
          <br />
          {this.state.username}
        </h1>
        <ContactForm />
      </Layout>
    );
  }
}

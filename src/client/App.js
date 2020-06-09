/* eslint-disable react/no-unused-state */
/* eslint-disable space-before-function-paren */
import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Classes from './app.css';
import ContactForm from './components/contactForm/contactform';
import Output from './components/Output/output';

export default class App extends Component {
  state = {
    username: 'ty'
  }

  componentDidMount () {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({
        username: user.username
      }));
    console.log(Classes);
  }

  render() {
    return (
      <Layout>
        <ContactForm />
        <Output />
      </Layout>
    );
  }
}

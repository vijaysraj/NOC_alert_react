import React, { Component } from 'react';
import Pusher from 'pusher-js';
// import  { setPusherClient } from 'react-pusher';
// import Pusher from 'react-pusher';
// import pusherClient from 'pusher-js';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      alert: ''
    }
    
  }

  componentDidMount() {
    const pusher = new Pusher('', {
      cluster: 'ap2',
      encrypted: true
    });

    const channel = pusher.subscribe('channel');
    channel.bind('Notification', data => {
      this.setState({alert: data.message})
    }); 
  }

  render() {
    return (
      <div> {this.state.alert} </div>
    );
  }
}

export default App;




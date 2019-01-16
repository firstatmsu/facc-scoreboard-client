import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AudienceDisplay from './matchStateComponents/audienceDisplay';
import AdminDisplay from './adminDisplay';

import { subscribeToMatchUpdates } from './socket';
import openSocket from 'socket.io-client';

class App extends Component {
  // socket;
  constructor(props) {
    super(props);
    this.socket = openSocket('http://localhost:9000');
    window.io = this.socket.io;
    // this.socket.on('updateMatch', updatedMatch => {
    //   console.log('UPDATE');
    //   this.setState({ currentMatch: updatedMatch });
    // });
  }
  state = { currentMatch: null };

  render() {
    return (
      <Switch>
        <Route
          path="/admin"
          component={() => (
            <AdminDisplay
              currentMatch={this.state.currentMatch}
              socket={this.socket}
            />
          )}
          // currentMatch={this.state.currentMatch}
        />
        <Route
          path="/"
          component={() => (
            <AudienceDisplay
              currentMatch={this.state.currentMatch}
              socket={this.socket}
            />
          )}
          // currentMatch={this.state.currentMatch}
        />
      </Switch>
    );
  }
}

export default App;

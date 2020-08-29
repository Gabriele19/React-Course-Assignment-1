import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: 'Max'
  }

  usernameStateHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  };

  render() {
    return (
      <div className="App">
        <UserInput usernameChange={this.usernameStateHandler} username={this.state.username}/>
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;

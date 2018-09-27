import React, { Component } from 'react';
import TimersDashboard from './TimersDashboard'


class App extends Component {
  render() {
    return (
      <div className="App main ui">
           <h1 className="ui dividing centered header">Timers</h1>
           <TimersDashboard/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class CountPeople extends Component {
  state = {
    entryCount: 0,
    exitCount: 0,
  };

  handleEntry = () => {
    this.setState((current) => ({ entryCount: current.entryCount + 1 }));
  };

  handleExit = () => {
    this.setState((current) => ({ exitCount: current.exitCount + 1 }));
  };

  render() {
    const { entryCount, exitCount } = this.state;

    return (
      <section className="counter-card">
        <h2>Count People</h2>
        <p>Entry Count: {entryCount}</p>
        <p>Exit Count: {exitCount}</p>
        <div className="counter-actions">
          <button onClick={this.handleEntry}>Login</button>
          <button onClick={this.handleExit}>Exit</button>
        </div>
      </section>
    );
  }
}

export default CountPeople;
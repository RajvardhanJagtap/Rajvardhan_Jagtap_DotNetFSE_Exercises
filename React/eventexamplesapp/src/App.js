import React, { Component, useState } from 'react';
import './App.css';

class IncrementDemo extends Component {
  state = { count: 0 };

  increase = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };

  sayHello = () => {
    window.alert('Welcome to React Events');
  };

  handleClick = () => {
    this.increase();
    this.sayHello();
  };

  render() {
    return (
      <section className="section-card">
        <h2>Increment and Say Welcome</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increase</button>
      </section>
    );
  }
}

class DecrementDemo extends Component {
  state = { count: 10 };

  render() {
    return (
      <section className="section-card">
        <h2>Decrement</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState((current) => ({ count: current.count - 1 }))}>Decrease</button>
      </section>
    );
  }
}

function SyntheticEventDemo() {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert('Synthetic Event handled');
  };

  return (
    <section className="section-card">
      <h2>Synthetic Event</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit">Say Welcome</button>
      </form>
    </section>
  );
}

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const usd = Number(amount || 0) * 0.012;

  return (
    <section className="section-card">
      <h2>Currency Converter</h2>
      <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter INR" />
      <p>USD: {usd.toFixed(2)}</p>
    </section>
  );
}

function App() {
  return (
    <main className="app-shell">
      <section className="app-card">
        <h1 className="page-title">Event Examples App</h1>
        <p className="page-subtitle">This HOL demonstrates increment, decrement, say welcome, synthetic events, and currency conversion.</p>
        <div className="grid two-columns">
          <IncrementDemo />
          <DecrementDemo />
          <SyntheticEventDemo />
          <CurrencyConverter />
        </div>
      </section>
    </main>
  );
}

export default App;
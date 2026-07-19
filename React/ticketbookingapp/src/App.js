import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { isLoggedIn: false };

  renderGuestPage = () => (
    <section className="section-card">
      <h2>Guest Page</h2>
      <p>View Flights</p>
    </section>
  );

  renderUserPage = () => (
    <section className="section-card">
      <h2>User Page</h2>
      <p>Book Tickets</p>
    </section>
  );

  toggleLogin = () => {
    this.setState((current) => ({ isLoggedIn: !current.isLoggedIn }));
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <main className="app-shell">
        <section className="app-card">
          <h1 className="page-title">Ticket Booking App</h1>
          <p className="page-subtitle">Conditional rendering switches between Guest and User pages.</p>
          <button onClick={this.toggleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
          {isLoggedIn ? this.renderUserPage() : this.renderGuestPage()}
        </section>
      </main>
    );
  }
}

export default App;
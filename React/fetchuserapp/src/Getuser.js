import React, { Component } from 'react';

class Getuser extends Component {
  state = {
    user: null,
    error: null,
  };

  componentDidMount() {
    fetch('https://api.randomuser.me/')
      .then((response) => response.json())
      .then((data) => this.setState({ user: data.results[0] }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { user, error } = this.state;

    if (error) {
      return <p role="alert">Failed to load user.</p>;
    }

    if (!user) {
      return <p>Loading user...</p>;
    }

    return (
      <section className="user-card">
        <h2>Random User</h2>
        <p><strong>Title:</strong> {user.name.title}</p>
        <p><strong>First Name:</strong> {user.name.first}</p>
        <img src={user.picture.large} alt={user.name.first} />
      </section>
    );
  }
}

export default Getuser;
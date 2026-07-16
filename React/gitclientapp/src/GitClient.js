import React, { Component } from 'react';
import axios from 'axios';

class GitClient extends Component {
  state = {
    username: 'facebook',
    repositories: [],
    error: null,
  };

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  fetchRepositories = async () => {
    const { username } = this.state;

    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      this.setState({ repositories: response.data, error: null });
    } catch (error) {
      this.setState({ error: 'Unable to fetch repositories.' });
    }
  };

  render() {
    const { username, repositories, error } = this.state;

    return (
      <section className="git-card">
        <h2>Git Client</h2>
        <div className="git-controls">
          <input value={username} onChange={this.handleChange} placeholder="GitHub username" />
          <button onClick={this.fetchRepositories}>Fetch</button>
        </div>
        {error && <p role="alert">{error}</p>}
        <ul>
          {repositories.map((repository) => (
            <li key={repository.id}>{repository.name}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default GitClient;
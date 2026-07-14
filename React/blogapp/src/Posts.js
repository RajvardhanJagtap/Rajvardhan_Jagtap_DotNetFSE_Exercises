import React, { Component } from 'react';
import Post from './Post';

// Class component handles the fetch in componentDidMount and errors in componentDidCatch.
class Posts extends Component {
  state = {
    posts: [],
    error: null,
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => this.setState({ posts }))
      .catch((error) => this.setState({ error }));
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <p role="alert">Unable to load posts.</p>;
    }

    return (
      <section className="post-grid">
        {posts.slice(0, 10).map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </section>
    );
  }
}

export default Posts;
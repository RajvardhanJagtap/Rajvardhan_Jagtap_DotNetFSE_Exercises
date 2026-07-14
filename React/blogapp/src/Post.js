import React from 'react';

function Post({ title, body }) {
  return (
    <article className="post-card">
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

export default Post;
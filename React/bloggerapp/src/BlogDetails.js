import React from 'react';

function BlogDetails({ blogs }) {
  return (
    <section className="section-card">
      <h2>Blog Details</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </section>
  );
}

export default BlogDetails;
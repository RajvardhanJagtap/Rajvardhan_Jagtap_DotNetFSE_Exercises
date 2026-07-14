import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';

const books = [
  { id: 1, name: 'React Guide', price: 'Rs 500' },
  { id: 2, name: 'Node Mastery', price: 'Rs 700' },
];

const blogs = [
  { id: 1, title: 'React Basics' },
  { id: 2, title: 'Understanding Props' },
];

const courses = [
  { id: 1, name: 'React', duration: '6 weeks' },
  { id: 2, name: 'Java', duration: '8 weeks' },
];

function App() {
  const [view, setView] = useState('books');

  return (
    <main className="app-shell">
      <section className="app-card">
        <h1 className="page-title">Blogger App</h1>
        <p className="page-subtitle">Conditional rendering switches between lists that use keys and map().</p>
        <div className="nav-links">
          <button onClick={() => setView('books')}>Books</button>
          <button onClick={() => setView('blogs')}>Blogs</button>
          <button onClick={() => setView('courses')}>Courses</button>
        </div>
        {view === 'books' && <BookDetails books={books} />}
        {view === 'blogs' && <BlogDetails blogs={blogs} />}
        {view === 'courses' && <CourseDetails courses={courses} />}
      </section>
    </main>
  );
}

export default App;
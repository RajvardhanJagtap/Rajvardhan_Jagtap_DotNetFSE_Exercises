import React from 'react';

function BookDetails({ books }) {
  return (
    <section className="section-card">
      <h2>Book Details</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.name} - {book.price}</li>
        ))}
      </ul>
    </section>
  );
}

export default BookDetails;
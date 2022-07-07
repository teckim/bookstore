import React from 'react';
import BooksList from './BooksList';

const BooksView = () => {
  const books = [{ title: 'JavaScript vs React', author: 'John Doe' }];

  return (
    <section className="container mx-auto">
      <BooksList books={books} />
    </section>
  );
};

export default BooksView;

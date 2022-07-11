import React from 'react';
import { useSelector } from 'react-redux';
import BooksList from './BooksList';

const BooksView = () => {
  const books = useSelector((state) => state.books);

  return (
    <section className="container mx-auto">
      <BooksList books={books} />
    </section>
  );
};

export default BooksView;

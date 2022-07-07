import React from 'react';
import { PropTypes } from 'prop-types';
import Book from './Book';

const BooksList = ({ books }) => (
  <div className="books-list">
    {(books || []).map(({ title, author }) => (
      <Book key={title} title={title} author={author} />
    ))}
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf({
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default BooksList;

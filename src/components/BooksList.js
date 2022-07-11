import React from 'react';
import { PropTypes } from 'prop-types';
import Book from './Book';

const BooksList = ({ books }) => (
  <div className="books-list">
    {books.map(({ id, title, author }) => (
      <Book key={id} id={id} title={title} author={author} />
    ))}
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ),
};

BooksList.defaultProps = {
  books: [],
};

export default BooksList;

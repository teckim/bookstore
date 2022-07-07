import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({ title, author }) => (
  <div className="book d-flex">
    <div className="book__title">{title}</div>
    <div className="book__author">{author}</div>
    <button className="book__delete-btn" type="button">
      Delete
    </button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;

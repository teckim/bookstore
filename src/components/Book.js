import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove as removeBook, removeBookById } from '../redux/books/books';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBookById(id))
      .then(() => dispatch(removeBook(id)));
  };

  return (
    <div className="book d-flex">
      <div className="book__title">{title}</div>
      <div className="book__author">{author}</div>
      <button className="book__delete-btn" type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;

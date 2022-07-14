import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove as removeBook, removeBookById } from '../redux/books/books';
import ProgressBar from './ProgressBar';
import Button from './Button';
import '../assets/sass/components/book.scss';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBookById(id))
      .then(() => dispatch(removeBook(id)));
  };

  return (
    <div className="book">
      <div className="flex flex-col md:flex-row gap-16 md:items-center">
        <div className="basis-1/3">
          <div className="book__category">{category}</div>
          <div className="book__title">{title}</div>
          <div className="book__author">{author}</div>
          <div className="book__actions">
            <button className="book__actions-btn" type="button">
              Comment
            </button>
            <div className="book__actions-sep" />
            <button className="book__actions-btn" type="button" onClick={handleDelete}>
              Remove
            </button>
            <div className="book__actions-sep" />
            <button className="book__actions-btn" type="button">
              Edit
            </button>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="book__progress md:border-r-2">
            <ProgressBar percentage={50} />
          </div>
        </div>
        <div className="book__chapter basis-1/3">
          <div className="book__chapter-overtitle">Current Chapter</div>
          <div className="book__chapter-title">Chapter 17</div>
          <Button>Update Progress</Button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;

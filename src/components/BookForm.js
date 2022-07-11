import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add as addNewBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewBook(book));
  };

  const handleInputChange = (event) => {
    setBook((book) => ({
      ...book,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input name="title" placeholder="title" onChange={handleInputChange} />
      <input name="author" placeholder="author" onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;

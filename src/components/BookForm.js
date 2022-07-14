import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add as addNewBook, postBook } from '../redux/books/books';
import Button from './Button';
import '../assets/sass/components/book-form.scss';

const BookForm = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ category: 'Novel' });

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(postBook(book))
      .then(() => {
        dispatch(addNewBook(book));
      });
  };

  const handleInputChange = (event) => {
    setBook((book) => ({
      ...book,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="book-form__title">ADD NEW BOOK</div>
      <div className="flex flex-col md:grid grid-cols-6 gap-x-9 gap-y-4">
        <input className="book-form__input col-span-3" name="title" placeholder="title" onChange={handleInputChange} />
        <input className="book-form__input col-span-2" name="author" placeholder="author" onChange={handleInputChange} />
        <Button buttonType="submit">ADD BOOK</Button>
      </div>
    </form>
  );
};

export default BookForm;

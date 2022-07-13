import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import BooksList from './BooksList';
import BookForm from './BookForm';

const BooksView = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <section className="container mx-auto">
      <BookForm />
      {
        books.isFaild
          ? <div>Faild</div>
          : (
            <>
              {
                books.isLoading
                  ? <div>Loading...</div>
                  : books && books.items && <BooksList books={books.items} />
              }
            </>
          )
      }
    </section>
  );
};

export default BooksView;

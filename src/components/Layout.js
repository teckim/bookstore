import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import BookForm from './BookForm';

const Layout = () => (
  <main className="min-h-full">
    <header className="container mx-auto">
      <div className="text-3xl font-bold">Book Store</div>
      <nav>
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </nav>
      <BookForm />
    </header>
    <Outlet />
  </main>
);

export default Layout;

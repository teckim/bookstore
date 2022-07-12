import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoriesView = () => {
  const disptch = useDispatch();
  const handleClick = () => disptch(checkStatus());

  return (
    <section className="container mx-auto">
      <button type="button" onClick={handleClick}>Check Status</button>
    </section>
  );
};

export default CategoriesView;

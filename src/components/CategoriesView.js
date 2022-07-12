import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoriesView = () => {
  const disptch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const handleClick = () => disptch(checkStatus());

  return (
    <section className="container mx-auto">
      <button type="button" onClick={handleClick}>Check Status</button>
      <div>{categories}</div>
    </section>
  );
};

export default CategoriesView;

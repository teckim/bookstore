import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import '../assets/sass/components/layout.scss';

const Layout = () => (
  <main className="layout">
    <Header />
    <div className="layout__content">
      <Outlet />
    </div>
  </main>
);

export default Layout;

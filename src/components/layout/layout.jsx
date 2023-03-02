import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export const Layout = () => {
  const auth = localStorage.getItem('token');

  if (!auth) {
    return <Navigate to='/auth' />;
  }

  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </React.Fragment>
  );
};

import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export const Layout = () => (
  <React.Fragment>
    <Header />
    <main>
      <Outlet />
    </main>

    <Footer />
  </React.Fragment>
);

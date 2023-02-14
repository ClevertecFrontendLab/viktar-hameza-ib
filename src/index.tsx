import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components/layout/layout';
import { LayoutMainPage } from './components/layout-main-page/layout-main-page';
import { BookPage } from './pages/book';
import { ContentText } from './pages/content-text/content-text';
import { MainPage } from './pages/main';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route element={<LayoutMainPage />}>
          <Route path='/' element={<Navigate to='/books/all' />} />
          <Route path='/books/:category' element={<MainPage />} />
          <Route path='/terms' element={<ContentText contentView='terms' />} />
          <Route path='/contract' element={<ContentText contentView='contract' />} />
        </Route>
        <Route path='/books/:category/:bookId' element={<BookPage />} />
      </Route>
    </Routes>
  </HashRouter>
);

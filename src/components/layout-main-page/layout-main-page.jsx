import { Outlet } from 'react-router-dom';
import cn from 'classnames';

import { Navigation } from '../navigation/navigation';

import style from './layout-main-page.module.scss';

export const LayoutMainPage = () => (
  <div className={cn('container', style.mainContainer)}>
    <div className={style.sidebar}>
      <Navigation
        testIdNav=''
        testIdShowcase='navigation-showcase'
        testIdBooks='navigation-books'
        testIdTerms='navigation-terms'
        testIdContract='navigation-contract'
      />
    </div>
    <div className={style.content}>
      <Outlet />
    </div>
  </div>
);

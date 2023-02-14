import { Link } from 'react-router-dom';

import style from './breadcrumbs.module.scss';

export const Breadcrumbs = ({ title }) => (
  <nav className={style.breadcrumbs} aria-label='Breadcrumb'>
    <div className='container'>
      <ul className={style.list}>
        <li className={style.item}>
          <Link to='/' className={style.link}>
            Бизнес книги
          </Link>
        </li>
        <li className={style.item}>
          <span className={style.link}>{title}</span>
        </li>
      </ul>
    </div>
  </nav>
);

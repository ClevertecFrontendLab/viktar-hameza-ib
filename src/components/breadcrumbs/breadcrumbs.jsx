import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import style from './breadcrumbs.module.scss';

export const Breadcrumbs = ({ title = '' }) => {
  const { category } = useParams();

  const { categories } = useSelector((state) => state.categories);

  const currentCategory = categories.find(({ path }) => path === category);

  return (
    <nav className={style.breadcrumbs} aria-label='Breadcrumb'>
      <div className='container'>
        <ul className={style.list}>
          <li className={style.item}>
            {categories.length ? (
              <Link to={`/books/${category}`} className={style.link}>
                {currentCategory ? currentCategory.name : 'Все книги'}
              </Link>
            ) : null}
          </li>
          <li className={style.item}>
            <span className={style.link}>{title}</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import style from './breadcrumbs.module.scss';

export const Breadcrumbs = ({ title = '' }) => {
  const { category } = useParams();

  const { categories } = useSelector((state) => state.categories);

  const currentCategory = categories.find(({ path }) => path === category);
  console.log(currentCategory);

  return (
    <nav className={style.breadcrumbs} aria-label='Breadcrumb'>
      <div className='container'>
        <ul className={style.list}>
          <li className={style.item}>
            <Link to={`/books/${category}`} className={style.link}>
              {categories.length ? (currentCategory ? currentCategory.name : 'Все книги') : 'Все книги'}
            </Link>
          </li>
          <li className={style.item}>
            <span className={style.link}>{title}</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';

// import { getCategories } from '../../redux/categories-slice';
import { IconArrow } from '../svg/icon-arrow';

import style from './navigation.module.scss';
import { SubItemLink } from './sub-item-link/sub-item-link';

export const Navigation = ({
  className,
  setBurgerActive,
  testIdNav,
  testIdShowcase,
  testIdBooks,
  testIdTerms,
  testIdContract,
  refNav,
}) => {
  const location = useLocation();

  const { categories, categoriesError } = useSelector((state) => state.categories);

  const [isOpenBooks, setIsOpenBooks] = useState(true);

  const handleClick = () => {
    setIsOpenBooks(false);
    if (setBurgerActive) {
      setBurgerActive(false);
    }
  };

  const navUserActive = ({ isActive }) => cn(style.navUserLink, isActive && style.isActive);

  const listItemActive = ({ isActive }) => cn(style.listItemLink, isActive && style.isActive);

  return (
    <div className={cn(style.navigation, className)} data-test-id={testIdNav} ref={refNav}>
      <nav className={isOpenBooks && location.pathname.includes('/books') ? cn(style.nav, style.openBooks) : style.nav}>
        <ul className={style.list}>
          <li className={style.listItem}>
            <NavLink
              to='/books/all'
              onClick={() => setIsOpenBooks(!isOpenBooks)}
              className={
                location.pathname.includes('/books') ? cn(style.listItemLink, style.isActive) : style.listItemLink
              }
              data-test-id={testIdShowcase}
            >
              Витрина книг
              {!categoriesError && <IconArrow className={style.iconArrow} />}
            </NavLink>
            {!categoriesError && (
              <ul className={style.listInner}>
                <SubItemLink name='Все книги' path='all' testIdBooks={testIdBooks} setBurgerActive={setBurgerActive} />
                {categories.map(({ id, name, path }) => (
                  <SubItemLink key={id} id={id} name={name} path={path} setBurgerActive={setBurgerActive} />
                ))}
              </ul>
            )}
          </li>
          <li className={style.listItem}>
            <NavLink to='/terms' className={listItemActive} onClick={handleClick} data-test-id={testIdTerms}>
              Правила пользования
            </NavLink>
          </li>
          <li className={style.listItem}>
            <NavLink to='/contract' className={listItemActive} onClick={handleClick} data-test-id={testIdContract}>
              Договор оферты
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className={style.navUser}>
        <NavLink to='/' className={navUserActive}>
          Профиль
        </NavLink>
        <NavLink to='/' className={navUserActive}>
          Выход
        </NavLink>
      </nav>
    </div>
  );
};

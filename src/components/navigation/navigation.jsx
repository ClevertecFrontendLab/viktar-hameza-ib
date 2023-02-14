import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';

import { IconArrow } from '../svg/icon-arrow';

import style from './navigation.module.scss';

const data = [
  { name: 'Все книги', category: 'all' },
  { name: 'Бизнес-книги', counter: 14, category: '1' },
  { name: 'Детективы', counter: 8, category: '2' },
  { name: 'Детские книги', counter: 14, category: '3' },
  { name: 'Зарубежная литература', counter: 2, category: '4' },
  { name: 'История', counter: 5, category: '5' },
  { name: 'Классическая литература', counter: 12, category: '6' },
  { name: 'Книги по психологии', counter: 11, category: '7' },
  { name: 'Компьютерная литература', counter: 54, category: '8' },
  { name: 'Культура и искусство', counter: 5, category: '9' },
  { name: 'Наука и образование', counter: 2, category: '10' },
  { name: 'Публицистическая литература', counter: 0, category: '11' },
  { name: 'Справочники', counter: 10, category: '12' },
  { name: 'Фантастика', counter: 12, category: '13' },
  { name: 'Юмористическая литература', counter: 8, category: '14' },
];

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
              <IconArrow className={style.iconArrow} />
            </NavLink>

            <ul className={style.listInner}>
              {data.map(({ name, counter, category }) => (
                <li key={name} className={style.listInnerItem}>
                  <NavLink
                    onClick={setBurgerActive ? () => setBurgerActive(false) : null}
                    to={`/books/${category}`}
                    className={({ isActive }) =>
                      isActive ? cn(style.listInnerLink, style.active) : style.listInnerLink
                    }
                    data-test-id={category === 'all' ? testIdBooks : ''}
                  >
                    <span className={style.listInnerLinkText}>{name}</span>&nbsp;
                    <span className={style.itemNumber}>{counter}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
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

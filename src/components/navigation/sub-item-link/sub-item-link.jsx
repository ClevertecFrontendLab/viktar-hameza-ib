import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import style from './sub-item-link.module.scss';

export const SubItemLink = ({ id, path, name, setBurgerActive, testIdBooks }) => (
  <li className={style.listInnerItem}>
    <NavLink
      onClick={setBurgerActive ? () => setBurgerActive(false) : null}
      to={`/books/${path}`}
      className={({ isActive }) => (isActive ? cn(style.listInnerLink, style.active) : style.listInnerLink)}
      data-test-id={path === 'all' ? testIdBooks : ''}
    >
      <span className={style.listInnerLinkText}>{name}</span>&nbsp;
      <span className={style.itemNumber}>{id}</span>
    </NavLink>
  </li>
);

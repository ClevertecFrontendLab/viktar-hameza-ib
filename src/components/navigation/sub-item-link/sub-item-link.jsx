import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import style from './sub-item-link.module.scss';

export const SubItemLink = ({ id, path, name, setBurgerActive, counter, testId, testIdCount }) => (
  <li className={style.listInnerItem}>
    <NavLink
      onClick={setBurgerActive ? () => setBurgerActive(false) : null}
      to={`/books/${path}`}
      className={({ isActive }) => (isActive ? cn(style.listInnerLink, style.active) : style.listInnerLink)}
    >
      <span className={style.listInnerLinkText} data-test-id={testId}>
        {name}
      </span>
      &nbsp;
      <span className={style.itemNumber} data-test-id={testIdCount}>
        {counter}
      </span>
    </NavLink>
  </li>
);

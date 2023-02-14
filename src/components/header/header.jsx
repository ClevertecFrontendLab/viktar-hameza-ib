import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import avatar from '../../assets/img/avatar2.jpg';
import iconClose from '../../assets/img/svg/icon-close-nav.svg';
import iconMenu from '../../assets/img/svg/icon-menu.svg';
import logo from '../../assets/img/svg/logo.svg';
import { Navigation } from '../navigation/navigation';

import styles from './header.module.scss';

export const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const burgerNav = useRef(null);

  const clickOutside = (e) => {
    if (!burgerNav.current.contains(e.target) && !e.target.closest('.btn-burger')) {
      setBurgerActive();
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickOutside);

    return () => {
      document.removeEventListener('click', clickOutside);
    };
  }, []);

  return (
    <header className={burgerActive ? cn(styles.header, styles.navActiv) : styles.header}>
      <div className={cn('container', styles.container)}>
        <button
          onClick={() => setBurgerActive(!burgerActive)}
          type='button'
          className={cn('btn-burger', styles.btnMenu)}
          data-test-id='button-burger'
        >
          <img src={burgerActive ? iconClose : iconMenu} alt='' />
        </button>

        <Navigation
          className={cn(styles.headerNav)}
          setBurgerActive={setBurgerActive}
          testIdNav='burger-navigation'
          testIdShowcase='burger-showcase'
          testIdBooks='burger-books'
          testIdTerms='burger-terms'
          testIdContract='burger-contract'
          refNav={burgerNav}
        />

        <Link to='/' className={cn(styles.logo, styles.headerLogo)}>
          <img src={logo} alt='' width={165} height={40} />
          <span className='visually-hidden'>Вернуться на главную страницу</span>
        </Link>

        <div className={styles.siteName}>Библиотека</div>

        <Link to='/' className={styles.userAccount}>
          <span className={styles.userAccountText}>Привет, Иван!</span>
          <img src={avatar} className={styles.userAccountImg} alt='' width={58} height={58} />
        </Link>
      </div>
    </header>
  );
};

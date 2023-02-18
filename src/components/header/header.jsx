import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import avatar from '../../assets/img/avatar2.jpg';
import iconClose from '../../assets/img/svg/icon-close-nav.svg';
import iconMenu from '../../assets/img/svg/icon-menu.svg';
import logo from '../../assets/img/svg/logo.svg';
import { getPosts } from '../../redux/posts-slice';
import { setFirstName } from '../../redux/user-slice';
import { Navigation } from '../navigation/navigation';
import { Loader } from '../loader/loader';

import styles from './header.module.scss';

export const Header = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.firstName);
  const { posts, loading, error } = useSelector((state) => state.posts);

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

  const fetchPost = () => {
    dispatch(getPosts());
  };

  // useEffect(() => {
  //   dispatch(getPosts())
  //     .unwrap()
  //     .then(() => console.log('Все ок'))
  //     .catch(() => console.log('Все плохо'));
  //   console.log('loading');
  // }, [dispatch]);

  return (
    <header className={burgerActive ? cn(styles.header, styles.navActiv) : styles.header}>
      {/* {error && <h2>{error}</h2>} */}
      {/* {loading === 'loading' && 'Загрузка'} */}
      {/* {loading === 'idle' && !error && posts?.map((post) => <p key={post.title}>- {post.title}</p>)} */}
      {/* <input type='text' onChange={(e) => dispatch(setFirstName(e.target.value))} /> */}
      {/* <b>First Name: {name}</b> */}
      {/* <button type='button' onClick={fetchPost}>
        Get posts
      </button> */}
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

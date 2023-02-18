import loaderImg from '../../assets/img/svg/loader.svg';

import styles from './loader.module.scss';

export const Loader = () => (
  <div className={styles.loader}>
    <img src={loaderImg} alt='Загрузка' width={68} height={68} data-test-id='loader' />
  </div>
);

import cn from 'classnames';

import { SocialsList } from './socials/socials';

import styles from './footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={cn('container', styles.container)}>
      <div className={styles.inner}>
        <span className={styles.copyright}>© 2020-2023 Cleverland. Все права защищены.</span>
        <SocialsList />
      </div>
    </div>
  </footer>
);

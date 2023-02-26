import styles from './not-found.module.scss';

export const NotFound = ({ dataTestId, children }) => (
  <div className={styles.notFound} data-test-id={dataTestId}>
    {children}
  </div>
);

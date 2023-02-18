import { useState } from 'react';

import imgClose from './img/icon-close.svg';
import imgWarning from './img/icon-warning.svg';

import styles from './toast.module.scss';

export const Toast = () => {
  const [isActive, setActive] = useState(true);

  return (
    <div>
      {isActive && (
        <div className={styles.toast} data-test-id='error'>
          <div className='container'>
            <div className={styles.info}>
              <img src={imgWarning} className={styles.iconInfo} alt='Ошибка' width={32} height={32} />
              <p className={styles.text}>Что-то пошло не так. Обновите страницу через некоторое время.</p>
              <button onClick={() => setActive(!isActive)} className={styles.close} type='button'>
                <img src={imgClose} alt='Закрыть' width={24} height={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import { useRef, useState } from 'react';
import cn from 'classnames';

import iconClose from '../../assets/img/svg/icon-close.svg';
import { IconViewGrid } from '../svg/view-mod/icon-view-grid';
import { IconViewList } from '../svg/view-mod/icon-view-list';

import style from './control-panel.module.scss';

export const ControlPanel = ({ view, setView }) => {
  const [isSearchActive, setSearchActive] = useState(false);

  const searchRef = useRef(null);

  const onSearchActive = () => {
    setSearchActive(!isSearchActive);

    searchRef.current.focus();
  };

  return (
    <div className={cn(style.panel, isSearchActive && style.searchActive)}>
      <button onClick={onSearchActive} type='button' className={style.btnMobSearch} data-test-id='button-search-open'>
        <span className='visually-hidden'>Поиск книг</span>
      </button>

      <div className={style.search}>
        <label className={style.label}>
          <input
            type='text'
            ref={searchRef}
            className={style.inputSearch}
            placeholder='Поиск книги или автор...'
            data-test-id='input-search'
          />
        </label>
        <button
          onClick={() => setSearchActive(!isSearchActive)}
          type='button'
          className={style.closeSearch}
          data-test-id='button-search-close'
        >
          <img src={iconClose} alt='' />
        </button>
      </div>
      <button type='button' className={style.btnSort}>
        <span className={style.btnSortText}>По рейтингу</span>
      </button>
      <div className={style.viewMode}>
        <button
          onClick={() => setView('grid')}
          className={cn(style.btnViewMode, style.btnGrid, view === 'grid' ? style.btnActive : null)}
          type='button'
          data-test-id='button-menu-view-window'
        >
          <IconViewGrid fill={view === 'grid' ? 'white' : ''} />
          <span className='visually-hidden'>Показать товары таблицей</span>
        </button>
        <button
          onClick={() => setView('list')}
          className={cn(style.btnViewMode, style.btnList, view === 'list' ? style.btnActive : null)}
          type='button'
          data-test-id='button-menu-view-list'
        >
          <IconViewList fill={view === 'list' ? 'white' : ''} />
          <span className='visually-hidden'>Показать товары списком</span>
        </button>
      </div>
    </div>
  );
};

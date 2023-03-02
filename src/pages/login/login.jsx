import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { postLogin } from '../../redux/login-slice';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postLogin({ identifier: 'pihoozzz', password: '5123260' }))
      .unwrap()
      .then(() => {
        navigate('/books/all', { replace: true });
      })
      .catch(() => {
        alert('login error');
      });
  };

  return (
    <div className='container'>
      <h1>Вход в личный кабинет</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            Username
            <input type='text' name='username' id='' />
          </label>
        </div>

        <div>
          <label>
            Password
            <input type='text' name='password' id='' />
          </label>
        </div>
        <button type='submit'>Войти</button>
      </form>

      <p>
        Нет учетной записи?
        <Link to='/registration'>Регистрация</Link>
      </p>
    </div>
  );
};

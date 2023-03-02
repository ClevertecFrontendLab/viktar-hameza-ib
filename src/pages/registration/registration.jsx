import { Link } from 'react-router-dom';

export const Registration = () => (
  <div className='container'>
    <h1>Регистрация</h1>

    <form>
      <div>
        <label>
          Email
          <input type='email' name='email' />
        </label>
      </div>
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
      <div>
        <label>
          First Name
          <input type='text' name='firstName' id='' />
        </label>
      </div>
      <div>
        <label>
          Last Name
          <input type='text' name='lastName' id='' />
        </label>
      </div>

      <div>
        <label>
          Phone:
          <input type='text' name='phone' id='' />
        </label>
      </div>
      <button type='submit'>Зарегистрироваться</button>
    </form>

    <p>
      Есть учётная запись?
      <Link to='/auth'>Войти</Link>
    </p>
  </div>
);

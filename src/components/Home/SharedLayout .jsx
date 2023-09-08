import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

export const SharedLayout = () => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <ul className={css.ul}>
            <li className={css.li}>
              <NavLink to="/goit-react-hw-05-movies/" className={css.a}>
                Home
              </NavLink>
            </li>
            <li className={css.li}>
              <NavLink to="/goit-react-hw-05-movies/movies" className={css.a}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

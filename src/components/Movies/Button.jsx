import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './Movies.module.css';

export const BackBTN = () => {
  const location = useLocation();

  return (
    <NavLink className={css.btn} to={location?.state?.from ?? '/'} type="button">
      Back
    </NavLink>
  );
};

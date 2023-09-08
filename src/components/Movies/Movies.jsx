import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { getDetailsMovies } from '../../API/api';
import { MovieCard } from './Card';
import { BackBTN } from './Button';
import css from './Movies.module.css';
//--------------------------------------///
export default function MovieView() {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getDetailsMovies(movieId).then(data => {
      // console.log(data);
      setMovie(data);
    });
  }, [movieId]);
  return (
    <>
      <BackBTN />
      {movie && <MovieCard movie={movie} />}
      <hr />
      <ul>
        <li>
          <Link className={css.li} state={location.state} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link className={css.li} state={location.state} to="reviews">
            Review
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

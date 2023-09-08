import { getCastMovies } from '../../API/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem } from './CastItem ';
import css from './Cast.module.css';
//----------------------------------------------//

export const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCastMovies(movieId).then(data => {
      setMovieCast(data.cast);
    });
  }, [movieId]);
  return (
    <>
      {movieCast && movieCast.length ? (
        <ul className={css.ul}>
          {movieCast.map(item => {
            return (
              <li key={item.id} className={css.card}>
                <CastItem cast={item}></CastItem>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Try to find out who is who😄</p>
      )}
    </>
  );
};

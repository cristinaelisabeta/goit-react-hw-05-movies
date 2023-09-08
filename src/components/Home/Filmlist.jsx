import { Link, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import css from './Home.module.css';
//---------------------------------------------------//
export const FilmList = ({ filmList }) => {
  const location = useLocation();
  return (
    <>
      <ul className={css.ul}>
        {filmList.map(({ title, id, name, poster_path }) => {
          return (
            <li key={id} style={{ width: 350 }} className={css.movieBox}>
              <Link
                to={`/goit-react-hw-05-movies/movies/${id}`}
                state={{ from: location }}
                className={css.film}
              >
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : `https://freesoft.ru/storage/images/news/1/6/555/555_text.png`
                  }
                  alt={title ? title : name}
                  width="350"
                />
                <p>{title ? title : name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

FilmList.propTypes = {
  filmList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};

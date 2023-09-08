import { PropTypes } from 'prop-types';
import css from './Movies.module.css';
//---------------------------------------------//
export const MovieCard = ({ movie }) => {
  const {
    poster_path,
    title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;
  return (
    <div className={css.div}>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://freesoft.ru/storage/images/news/1/6/555/555_text.png`
          }
          alt={title ? title : name}
          width="200"
        />
      </div>
      <div>
        <h2>
          {title ? title : name} ({release_date.slice(0, 4)})
        </h2>
        <p>Use Score: {Math.round((vote_average / 10) * 100)}%</p>
        <h3>Overwiew</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(item => item.name).join(', ')}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }),
};

import { PropTypes } from 'prop-types';
import css from './Review.module.css';
//------------------------------------------------------//
export const ReviewsItem = ({ reviews }) => {
  const {
    author_details: { name, avatar_path },
    content,
  } = reviews;
  return (
    <div className={css.review}>
      <img
        className={css.img}
        src={
          avatar_path
            ? `https://image.tmdb.org/t/p/w500${avatar_path}`
            : `https://freesoft.ru/storage/images/news/1/6/555/555_text.png`
        }
        alt={name}
        width="100"
        height="100"
      />
      <h3>Author: {name ? name : 'Author'}</h3>
      <blockquote>
        {content}
      </blockquote>
    </div>
  );
};

ReviewsItem.propTypes = {
  reviews: PropTypes.shape({
    avatar_path: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar_path: PropTypes.string.isRequired,
    }),
    content: PropTypes.string.isRequired,
  }),
};

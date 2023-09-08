import { PropTypes } from 'prop-types';

//---------------------------------------------------------------------//

export const CastItem = ({ cast }) => {
  const { character, name, profile_path } = cast;
  return (
    <>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : `https://freesoft.ru/storage/images/news/1/6/555/555_text.png`
        }
        alt={name}
        width="200"
      />
      <h3>{name}</h3>
      <p>Character: {character}</p>
    </>
  );
};

CastItem.propTypes = {
  cast: PropTypes.shape({
    character: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }),
};

import { useEffect, useState } from 'react';
import { getPoPMovies } from '../../API/api';
import { FilmList } from './Filmlist';

export default function Home() {
  const [popMovieList, setPopMovies] = useState([]);
  useEffect(() => {
    getPoPMovies().then(data => {
      setPopMovies(data.results);
    });
  }, []);
  return <FilmList filmList={popMovieList} />;
}

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { getSerchMovies } from '../../API/api';
import { FilmList } from '../Home/Filmlist';
import css from './Search.module.css';

//---------------------------------------------//

export default function Searchbar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState('');
  const [searchFilmList, setSearchFilmList] = useState([]);

  const handlerInput = e => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }
    getSerchMovies(searchParams.get('query')).then(data => {
      setSearchFilmList(data.results);
    });
  }, [searchParams, query]);

  const handlerSubmit = e => {
    e.preventDefault();

    if (!query.trim()) {
      toast.error('empty field', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setSearchParams({ query: query });
  };

  return (
    <>
      <div>
        <form className={css.form} onSubmit={handlerSubmit}>
          <button className={css.btn} type="submit">
           Search
          </button>

          <input
            type="text"
            name="query"
            value={query}
            autoComplete="off"
            onChange={handlerInput}
            autoFocus
            placeholder="Search movie"
            className={css.input}
          />
        </form>
      </div>
      {searchFilmList?.length ? <FilmList filmList={searchFilmList} /> : <></>}
    </>
  );
}

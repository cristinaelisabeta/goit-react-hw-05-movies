import { NavLink } from 'react-router-dom';
import css from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={css.div}>
      <div>
        <img
          src="https://image.spreadshirtmedia.net/image-server/v1/mp/products/T1459A839PA4459PT28D142635636W10000H6695/views/1,width=1200,height=630,appearanceId=839,backgroundColor=F2F2F2/error-404-sticker.jpg"
          alt="not found"
          width="600"
        />
        <p className={css.p}>
          Oooops, page not found
          <NavLink className={css.div}  to="/goit-react-hw-05-movies/">
            to Home
          </NavLink>
        </p>
      </div>
    </div>
  );
}

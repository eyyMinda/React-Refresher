import { useContext } from 'react';
import { Link } from 'react-router-dom';
import css from './MainNav.module.css';

import FavoritesContext from '../../setup/favorites-context';

function MainNav() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <div className={css.header}>
      <h2 className={css.logo}>React Meetups</h2>

      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/favorites">
            My Favorites
            <span className={css.badge}>{favoritesCtx.totalFavorites}</span>
          </Link>
        </li>
        <li>
          <Link to="/new-meetup">New Meetup</Link>
        </li>
      </ul>
    </div>
  )
}

export default MainNav;
import { Link } from 'react-router-dom';
import classes from './MainNav.module.css';

function MainNav() {
  return (
    <div className={classes.header}>
      <h2 className={classes.logo}>React Meetups</h2>

      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/new-meetup">New Meetup</Link>
        </li>
      </ul>
    </div>
  )
}

export default MainNav;
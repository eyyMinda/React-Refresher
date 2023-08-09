import css from './style/MeetupItem.module.css';
import { useState, useContext } from 'react';

import FavoritesContext from '../../setup/favorites-context';
import Card from '../ui/Card';

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const isFavorite = favoritesCtx.isFavorite(props.id);

  // Description Shortener if neeeded
  const [extraInfo, setExtraInfo] = useState(false);
  const limitChar = (str, limit) => str.length > limit ? `${str.slice(0, limit)}...` : str;
  const limitCharLength = 260;
  const description = extraInfo ? props.description : limitChar(props.description, limitCharLength);


  function handleToggleFavoriteStatus() {
    isFavorite ?
      favoritesCtx.removeFavorite(props.id) :
      favoritesCtx.addFavorite(props);
  }


  return (
    <li className={css.item}>
      <Card>
        <div className={css.image}>
          <img src={props.image} alt={props.title} />
        </div>

        <div className={css.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>
            {description}
            {props.description.length > limitCharLength
              && <button className={css.read_more_btn} onClick={() => setExtraInfo(!extraInfo)}>
                {extraInfo ? 'Show Less.' : 'Show More!'}
              </button>}
          </p>
        </div>

        <div className={css.actions}>
          <button onClick={handleToggleFavoriteStatus}>
            {isFavorite ? 'Remove From Favorites' : 'Add To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem;
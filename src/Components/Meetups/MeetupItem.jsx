import css from './style/MeetupItem.module.css';
import Card from '../ui/Card';
import { useEffect, useState } from 'react';

function MeetupItem(props) {
  const { id, title, image, address, description } = props;

  const [addedFavorite, setAddedFavorite] = useState(false);
  // Description Shortener if needed
  const [extraInfo, setExtraInfo] = useState(false);
  const limitChar = (str, limit) => str.length > limit ? `${str.slice(0, limit)}...` : str;
  const limitCharLength = 260;
  const descriptionShort = extraInfo ? description : limitChar(description, limitCharLength);

  // Fetch and check if is already in favorites
  useEffect(() => {
    fetch(import.meta.env.VITE_DB_FAVORITES_URL).then(res => res.json()).then(
      data => {
        const isFavorite = Object.values(data).map(obj => obj.id) == id;
        setAddedFavorite(isFavorite);
      }
    )
  }, [])
  // Add to favorites
  function handleAddFavorite() {
    fetch(import.meta.env.VITE_DB_FAVORITES_URL, {
      method: 'POST',
      body: JSON.stringify(props),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      setAddedFavorite(true);
    })
  }
  // Remove from favorites
  function handleRemoveFavorite() {

  }

  return (
    <li className={css.item}>
      <Card>
        <div className={css.image}>
          <img src={image} alt={title} />
        </div>

        <div className={css.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>
            {descriptionShort}
            {description.length > limitCharLength
              && <button className={css.read_more_btn} onClick={() => setExtraInfo(!extraInfo)}>
                {extraInfo ? 'Show Less.' : 'Show More!'}
              </button>}
          </p>
        </div>

        <div className={css.actions}>
          {addedFavorite ?
            <button onClick={handleRemoveFavorite}>Remove From Favorites</button> :
            <button onClick={handleAddFavorite}>Add To Favorites</button>}
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem;
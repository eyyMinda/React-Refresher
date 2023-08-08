import css from './style/MeetupItem.module.css';
import Card from '../ui/Card';

function MeetupItem(props) {
  return (
    <li className={css.item}>
      <Card>
        <div className={css.image}>
          <img src={props.image} alt={props.title} />
        </div>

        <div className={css.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>

        <div className={css.actions}>
          <button>Add To Favorites</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem;
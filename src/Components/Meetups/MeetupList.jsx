import css from './style/MeetupList.module.css';
import MeetupItem from './MeetupItem';

function MeetupList(props) {
  return (
    <ul className={css.list}>
      {props.meetups.map(meetup => {
        return <MeetupItem key={meetup.id} id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description} />
      })}
    </ul>
  )
}

export default MeetupList;
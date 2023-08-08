import css from './style/NewMeetupForm.module.css';
import Card from '../ui/Card';
import { useRef } from 'react';

function NewMeetupForm(props) {
  const titleInput = useRef();
  const imageInput = useRef();
  const addressInput = useRef();
  const descriptionInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const meetupData = {
      title: titleInput.current.value,
      image: imageInput.current.value,
      address: addressInput.current.value,
      description: descriptionInput.current.value,
    }

    props.onAddMeetup(meetupData);
  }

  return (<Card>
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.control}>
        <label htmlFor='title'>Meetup Title</label>
        <input type='text' required id='title' ref={titleInput} />
      </div>

      <div className={css.control}>
        <label htmlFor='image'>Meetup Image</label>
        <input type='url' required id='image' ref={imageInput} />
      </div>

      <div className={css.control}>
        <label htmlFor='address'>Meetup Address</label>
        <input type='text' required id='address' ref={addressInput} />
      </div>

      <div className={css.control}>
        <label htmlFor='description'>Meetup Description</label>
        <textarea required id='description' rows='5' ref={descriptionInput} />
      </div>

      <div className={css.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  </Card>)
}

export default NewMeetupForm
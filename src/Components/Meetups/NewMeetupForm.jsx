import css from './style/NewMeetupForm.module.css';
import Card from '../ui/Card';
import { useRef } from 'react';

function NewMeetupForm(props) {
  const inputs = {
    title: useRef(),
    image: useRef(),
    address: useRef(),
    description: useRef(),
  };

  function handleSubmit(e) {
    e.preventDefault();

    const meetupData = Object.fromEntries(
      Object.entries(inputs).map(([key, ref]) => [key, ref.current.value])
    );
    props.onAddMeetup(meetupData);
  }

  return (<Card>
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.control}>
        <label htmlFor='title'>Meetup Title</label>
        <input type='text' required id='title' ref={inputs.title} />
      </div>

      <div className={css.control}>
        <label htmlFor='image'>Meetup Image</label>
        <input type='url' required id='image' ref={inputs.image} />
      </div>

      <div className={css.control}>
        <label htmlFor='address'>Meetup Address</label>
        <input type='text' required id='address' ref={inputs.address} />
      </div>

      <div className={css.control}>
        <label htmlFor='description'>Meetup Description</label>
        <textarea required id='description' rows='5' ref={inputs.description} />
      </div>

      <div className={css.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  </Card>)
}

export default NewMeetupForm
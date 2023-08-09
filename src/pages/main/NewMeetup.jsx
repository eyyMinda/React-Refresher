import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../../Components/Meetups/NewMeetupForm";


function NewMeetupPage() {
  const navigate = useNavigate();

  function handleMeetupData(data) {
    fetch(import.meta.env.VITE_DB_MEETUPS_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      navigate('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>

      <NewMeetupForm onAddMeetup={handleMeetupData} />
    </section>
  )
}

export default NewMeetupPage;
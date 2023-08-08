import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../Components/Meetups/NewMeetupForm";
const dbUrl = "https://react-refresher--course-default-rtdb.europe-west1.firebasedatabase.app/meetups.json";


function NewMeetupPage() {
  const navigate = useNavigate();

  function handleMeetupData(data) {
    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }
    fetch(dbUrl, fetchConfig)
      .then(() => {
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
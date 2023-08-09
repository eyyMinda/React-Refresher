import { useEffect, useState } from 'react';
import MeetupList from '../Components/Meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetupsData, setMeetupsData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(import.meta.env.VITE_DB_MEETUPS_URL)
      .then(res => res.json()).then(data => {
        // object of objects to array of objects
        const meetupsArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));

        setMeetupsData(meetupsArray);
        setIsLoading(false);
      })
  }, [])


  return (
    <section>
      <h1>All Meetups</h1>
      {isLoading ? <p>Loading...</p> : <MeetupList meetups={meetupsData} />}
    </section>
  )
}

export default AllMeetupsPage;
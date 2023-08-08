import { Route, Routes } from 'react-router-dom'
import Layout from './Components/layout/Layout';

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<AllMeetupsPage />} />
        <Route exact path="/favorites" element={<FavoritesPage />} />
        <Route exact path="/new-meetup" element={<NewMeetupPage />} />
      </Routes>
    </Layout>
  )
}

export default App;

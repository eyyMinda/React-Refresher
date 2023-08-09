import { Route, Routes } from 'react-router-dom'
import Layout from './Components/layout/Layout';

import AllMeetupsPage from "./pages/main/AllMeetups";
import NewMeetupPage from "./pages/main/NewMeetup";
import FavoritesPage from "./pages/main/Favorites";

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

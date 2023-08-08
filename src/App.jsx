import { Route, Routes } from 'react-router-dom'

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNav from './Components/layout/MainNav';

function App() {
  return (
    <>
      <MainNav />

      <Routes>
        <Route exact path='/' element={<AllMeetupsPage />} />
        <Route exact path="/favorites" element={<FavoritesPage />} />
        <Route exact path="/new-meetup" element={<NewMeetupPage />} />
      </Routes>
    </>
  )
}

export default App;

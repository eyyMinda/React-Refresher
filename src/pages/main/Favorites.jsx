import { useContext } from "react";

import FavoritesContext from "../../setup/favorites-context";
import MeetupList from "../../Components/Meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  favoritesCtx.totalFavorites === 0 ?
    content = <p>You got no favorites yet. Start adding some?</p> :
    content = <MeetupList meetups={favoritesCtx.favorites} />

  return (
    <section>
      <h1>My Favorites</h1>

      {content}
    </section>
  )
}

export default FavoritesPage;
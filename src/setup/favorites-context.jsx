import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => { },
  removeFavorite: (meetupId) => { },
  isFavorite: (meetupId) => { }
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([])

  function handleAddFavorite(favoriteMeetup) {
    return setUserFavorites(favorites => favorites.concat(favoriteMeetup));
  }
  function handleRemoveFavorite(meetupId) {
    return setUserFavorites(favorites => favorites.filter(meetup => meetup.id !== meetupId));
  }
  function handleIsFavorite(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
    isFavorite: handleIsFavorite
  };

  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
}

export default FavoritesContext;
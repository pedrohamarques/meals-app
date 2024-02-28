import { createContext, useState } from "react";

type FavoritesContextProps = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

const defaultValue: FavoritesContextProps = {
  ids: [],
  addFavorite: (id) => { },
  removeFavorite: (id) => { }
}

export const FavoritesContext = createContext<FavoritesContextProps>(defaultValue);

export function FavoritesContextProvider({ children }: React.PropsWithChildren) {
  const [favoriteMealsIds, setFavoriteMealsIds] = useState<FavoritesContextProps['ids']>([]);

  function addFavoriteMeal(id: string) {
    setFavoriteMealsIds(currentFavorites => [...currentFavorites, id])
  };

  function removeFavoriteMeal(id: string) {
    setFavoriteMealsIds(currentFavorites => currentFavorites.filter(mealId => mealId !== id))
  }

  const value: FavoritesContextProps = {
    ids: favoriteMealsIds,
    addFavorite: addFavoriteMeal,
    removeFavorite: removeFavoriteMeal,
  }

  return (
    <FavoritesContext.Provider value={value}>{children} </FavoritesContext.Provider>
  )
}

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./slices/favorites";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

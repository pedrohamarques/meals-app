import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { InitialStateProps } from "./types";
import type { RootState } from "../store";

const initialState: InitialStateProps = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.ids.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.ids.splice(state.ids.indexOf(action.payload), 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const selectMealsIds = (state: RootState) => state.favorites.ids;

export default favoritesSlice.reducer;

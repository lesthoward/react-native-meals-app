import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface FavoriteState {
  favorites: string[];
}

const initialState: FavoriteState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<string>) {
      state.favorites.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<string>) {
      const index = state.favorites.indexOf(action.payload);
      if (index > -1) state.favorites.splice(index, 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;

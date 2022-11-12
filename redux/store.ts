import { configureStore } from '@reduxjs/toolkit';
import favoritesSlide from "./favoritesSlide"
export const store = configureStore({
  reducer: {
    favorites: favoritesSlide
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
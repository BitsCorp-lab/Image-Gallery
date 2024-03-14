import { configureStore } from '@reduxjs/toolkit';
import imageGalleryReducer from './Slices/ImageGallery/ImageGallerySlice';

export const store = configureStore({
  reducer: {
    imageGallery: imageGalleryReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

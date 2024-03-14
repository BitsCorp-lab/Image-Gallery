import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageGalleryState {
  images: string[];
  favImages: string[];
  isLoading: "idle" | "loading";
  isFavLoading: "idle" | "loading";
}

const initialState: ImageGalleryState = {
  images: [],
  favImages: [],
  isLoading: "idle",
  isFavLoading: "idle"
};

const imageGallery = createSlice({
  name: "imageGallery",
  initialState,
  reducers: {
    handleImage: (state, action: PayloadAction<string[]>) => {
      state.images = action.payload;
    },
    handleLoading: (state, action: PayloadAction<"idle" | "loading">) => {
      state.isLoading = action.payload;
    },
    handleAddFavImage: (state, action: PayloadAction<string>) => {
      state.favImages = [...state.favImages, action.payload];
    },
    handleUpdateFavImage: (state, action: PayloadAction<string[]>) => {
      state.favImages = action.payload;
    },
    handleIsFavLoading: (state, action: PayloadAction<"idle" | "loading">) => {
      state.isFavLoading = action.payload;
    }
  },
});

export const {
  handleImage,
  handleLoading,
  handleAddFavImage,
  handleIsFavLoading,
  handleUpdateFavImage
} = imageGallery.actions;

export default imageGallery.reducer;

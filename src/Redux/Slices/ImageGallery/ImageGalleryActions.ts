import apiUrls from "../../../ApiEndpoints/ImageGalleryApis";
import {
  handleImage, 
  handleLoading,
  handleAddFavImage,
  handleIsFavLoading, 
  handleUpdateFavImage
} from "./ImageGallerySlice";
import { RootState } from "../../Store"; // Assuming RootState type is defined in Store.ts
import axios from "axios";
import { Dispatch } from "redux";
import { AnyAction } from "redux";

// export const getImagesUnplash = (pageNo: number, searchQuery: string): any => async (dispatch: Dispatch<any>) => {
  
// };

export const getImagesUnplash = (pageNo: number, searchQuery?: string): any => {
  return async (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    try {
      dispatch(handleLoading("loading"));
  
      let url = searchQuery ? `${apiUrls.getSearchUnplashImages}?query=${searchQuery}&page=${pageNo}` : `${apiUrls.getUnplashImages}?page=${pageNo}`;
  
      const response = await axios.get(url, {
        headers: {
          "Authorization": "Client-ID KqLToM9eWTLL7SLS6z_echJPnzC5fHmuZqAHP001MIA"
        }
      });
  
      console.log(response);
  
      if (response.status === 200) {
        if (searchQuery) {
          dispatch(handleImage(response.data.results));
          dispatch(handleLoading("idle"));
        } else {
          dispatch(handleImage(response.data));
          dispatch(handleLoading("idle"));
        }
      } else {
        dispatch(handleLoading("idle"));
      }
    } catch (error) {
      dispatch(handleLoading("idle"));
    }
  }
}

export const addFavImage = (imageUrl: string): any => {
  return async (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    try {
      const storeState = getState();

      dispatch(handleIsFavLoading("loading"));
      if (storeState.imageGallery.favImages.includes(imageUrl)) {
        let updatedImgArr = storeState.imageGallery.favImages.filter((ele) => ele !== imageUrl);
        dispatch(handleUpdateFavImage(updatedImgArr));
      } else {
        dispatch(handleAddFavImage(imageUrl));
      }
      dispatch(handleIsFavLoading("idle"));
    } catch (error) {
      dispatch(handleIsFavLoading("idle"));
    }
  };
};
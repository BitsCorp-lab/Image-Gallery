import AppLayout from "../../Layout/AppLayout";
import noData from "../../Assets/no-data-found-9114411-7438848.webp"
import "./FavouriteImages.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavImage } from "../../Redux/Slices/ImageGallery/ImageGalleryActions";

const FavouriteImages = () => {
  const dispatch = useDispatch()
  const unplashImagesFav = useSelector((state) => state.imageGallery.favImages);

  const handleFavImage = (imageUrl) => {
    dispatch(addFavImage(imageUrl))
  }
  return (
    <AppLayout>
      {unplashImagesFav.length > 0  ? <div className="c-multicol">
        { unplashImagesFav?.map((ele, index) => (
          <div key={index} className="post" >
            <img className='post-img' src={ele} alt="Image" />
            {unplashImagesFav.includes(ele) ? <button onClick={() => handleFavImage(ele)} value={ele} className="heart-button">&#10084;</button> : <button onClick={() => handleFavImage(ele)} value={ele} className="heart-button-inc">&#10084;</button>}
          </div>
        ))}
      </div> :  <div className="no-data-con"><img src={noData}/></div>}
    </AppLayout>
  );
};

export default FavouriteImages;

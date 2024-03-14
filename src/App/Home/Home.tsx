import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImagesUnplash, addFavImage } from '../../Redux/Slices/ImageGallery/ImageGalleryActions';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BsSearchHeart } from 'react-icons/bs';
import { ClipLoader } from 'react-spinners';
import './Home.css';
import AppLayout from '../../Layout/AppLayout';
import { Dispatch } from 'redux';

interface RootState {
  imageGallery: {
    images: any[];
    favImages: string[];
    isLoading: string;
    isFavLoading: string;
  };
}

const Home: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [unplashPage, setUnplashPage] = useState<number>(1);

  const unplashImages = useSelector((state: RootState) => state.imageGallery.images);
  const unplashImagesFav = useSelector((state: RootState) => state.imageGallery.favImages);
  const unplashApiLoading = useSelector((state: RootState) => state.imageGallery.isLoading);

  useEffect(() => {
    if (searchQuery) {
      dispatch(getImagesUnplash(unplashPage, searchQuery));
    } else {
      dispatch(getImagesUnplash(unplashPage));
    }
  }, [dispatch, unplashPage]);

  const handleSearch = () => {
    setUnplashPage(1);
    dispatch(getImagesUnplash(1, searchQuery));
  };

  const handleFavImage = (imageUrl: string) => {
    dispatch(addFavImage(imageUrl));
  };
  

  const handleNextPage = () => {
    setUnplashPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setUnplashPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <AppLayout>
      <div className="search-container">
        <div className="search-wrap">
          <input
            type="text"
            className="search-input"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch} className="search-button">
            <BsSearchHeart className="ser-icn" />
          </button>
        </div>

        <div className="pagination-wrap">
          <div onClick={handlePrevPage} className="page-prev">
            <FaArrowLeft />
          </div>
          <div className="page-no-wrap">{unplashPage}</div>
          <div onClick={handleNextPage} className="page-next">
            <FaArrowRight />
          </div>
        </div>
      </div>

      {unplashApiLoading === 'loading' ? (
        <ClipLoader
          loading={unplashApiLoading === 'loading'}
          cssOverride={{ display: 'block', margin: '0 auto', borderColor: 'red' }}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="c-multicol">
          {unplashImages?.map((ele, index) => (
            <div key={index} className="post">
              <img className="post-img" src={ele.urls.regular} alt="Image" />
              {unplashImagesFav.includes(ele.urls.regular) ? (
                <button onClick={() => handleFavImage(ele.urls.regular)} className="heart-button">
                  &#10084;
                </button>
              ) : (
                <button onClick={() => handleFavImage(ele.urls.regular)} className="heart-button-inc">
                  &#10084;
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </AppLayout>
  );
};

export default Home;

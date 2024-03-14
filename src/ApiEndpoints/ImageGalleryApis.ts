const apiUrls: Readonly<{
    getUnplashImages: string;
    getSearchUnplashImages: string;
}> = Object.freeze({
    getUnplashImages: `https://api.unsplash.com/photos`,
    getSearchUnplashImages: `https://api.unsplash.com/search/photos`,
});

export default apiUrls;

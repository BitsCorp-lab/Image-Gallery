// Routes/AppRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../App/Home/Home";
import FavouriteImages from "../App/FavouriteImages/FavouriteImages";

interface RouteConfig {
  path: string;
  element: JSX.Element;
}

const createBrowserRouter = (routes: RouteConfig[]) => {
  return () => (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/docs",
    element: <FavouriteImages />,
  },
]);

export default appRoutes;

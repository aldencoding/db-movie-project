import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPages";
import MovieDetails from "./pages/MovieDetails";
import MovieList from "./Molecules/MovieList.jsx";

import App from "./App.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} errorElement={<ErrorPage />} />
      <Route path="movie-details" element={<MovieDetails />} />
      <Route path="x" element={<MovieList />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

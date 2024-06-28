import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handleAddWatchlist = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];
    localStorage.setItem("MovieApp", JSON.stringify(newWatchList));
    setWatchlist(newWatchList);
    console.log(newWatchList);
  };

  const handleRemoveFromWatchlist = (movieObj) => {
    const filteredWatchlist = watchlist.filter(
      (movie) => movie.id !== movieObj.id
    );
    localStorage.setItem("MovieApp", JSON.stringify(filteredWatchlist)); // Update localStorage
    setWatchlist(filteredWatchlist);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("MovieApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage));
  }, []); // Added empty dependency array to run the effect only once

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchlist={watchlist}
                  handleAddWatchList={handleAddWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
              </>
            }
          ></Route>
          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                setWatchlist={setWatchlist}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

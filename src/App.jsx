import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
    let [watchlist,setWatchlist]=useState([])
    
    let handleAddWatchlist = (movieObj) => {
      let newWatchList =[...watchlist, movieObj]
      setWatchlist(newWatchList)
      console.log(newWatchList);
    }

    let handleRemoveFromWatchlist = (movieObj) => {
      let filteredWatchlist =watchlist.filter((movie) => {
        return movie.id != movieObj.id;
      })
      setWatchlist(filteredWatchlist)
      console.log(filteredWatchlist)
    }
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
                <Movies watchlist={watchlist} handleAddWatchList={handleAddWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>
              </>
            }
          ></Route>
          <Route path="/watchlist" element={<Watchlist />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

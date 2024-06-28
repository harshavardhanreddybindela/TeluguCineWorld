import React, { useEffect, useState } from "react";
import genreids from "../utilities/genre";

const createGenreList = (watchlist) => {
  const temp = new Set(
    watchlist.map((movieObj) => genreids[movieObj.genre_ids[0]])
  );
  return ["All Genres", ...temp];
};

function Watchlist({ watchlist, setWatchlist, handleRemoveFromWatchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  const sortIncreasing = () => {
    console.log("Entering into Increasing");
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sortedIncreasing]);
  };

  const sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortedDecreasing]);
  };

  useEffect(() => {
    const genreArray = createGenreList(watchlist);
    if (JSON.stringify(genreArray) !== JSON.stringify(genreList)) {
      setGenreList(genreArray);
    }
  }, [watchlist]);
  const filteredWatchlist = watchlist
    .filter((movieObj) => {
      if (currGenre === "All Genres") {
        return true;
      } else {
        return genreids[movieObj.genre_ids[0]] === currGenre;
      }
    })
    .filter((movieObj) => {
      return movieObj.title.toLowerCase().includes(search.toLowerCase());
    });

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre, index) => (
          <div
            key={index}
            onClick={() => handleFilter(genre)}
            className={`flex justify-center rounded-xl h-[3rem] w-[9rem] font-bold text-white items-center mx-4 ${
              currGenre === genre ? "bg-blue-400" : "bg-gray-400"
            }`}
          >
            {genre}
          </div>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search for Movie"
          className="h-[3rem] w-[18rem] bg-gray-200 px-4"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-center">
          <thead className="border-b-3">
            <tr>
              <th className="py-2">Name</th>
              <th className="flex justify-center">
                <div onClick={sortIncreasing} className="py-2 mx-1">
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="py-2 mx-1">Ratings</div>
                <div onClick={sortDecreasing} className="py-2 mx-1">
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>

              <th className="py-2">Popularity</th>
              <th className="py-2">Genre</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredWatchlist.map((movieObj) => (
              <tr className="border-b-2" key={movieObj.id}>
                <td className="flex items-center">
                  <img
                    className="h-[10rem] w-[15rem]"
                    src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                    alt={movieObj.original_title}
                  />
                  <div className="items-left">{movieObj.original_title}</div>
                </td>
                <td className="text-center">{movieObj.vote_average}</td>
                <td className="text-center">{movieObj.popularity}</td>
                <td className="text-center">
                  {genreids[movieObj.genre_ids[0]]}
                </td>
                <td
                  className="text-red-600 cursor-pointer text-center rounded-xl"
                  onClick={() => handleRemoveFromWatchlist(movieObj)}
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;

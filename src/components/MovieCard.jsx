import React from "react";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddWatchList,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[50vh] w-[500px] m-5 bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      <div className="text-white text-2xl w-full p-2 text-center bg-gray-900/60">
        {name}
      </div>
      <div className="w-full flex justify-center p-2">
        {doesContain(movieObj) ? (
          <div
            className="flex justify-center items-center h-[50px] w-[100px] bg-gray-900/60 rounded-xl"
            onClick={() => handleRemoveFromWatchlist(movieObj)}
          >
            &#x274c;
          </div>
        ) : (
          <div
            className="flex justify-center items-center h-[50px] w-[100px] bg-gray-900/60 rounded-xl"
            onClick={() => handleAddWatchList(movieObj)}
          >
            &#10084;
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCard;

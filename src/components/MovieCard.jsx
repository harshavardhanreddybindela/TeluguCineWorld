import React from "react";

function MovieCard({ poster_path, name }) {
  return (
    <div
      className="h-[50vh] w-[500px] m-5 bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`
      }} 
    >
    <div className="text-white text-2xl w-full p-2 text-center bg-gray-900/60">{name}</div>  
    </div>
    
  );
}

export default MovieCard;

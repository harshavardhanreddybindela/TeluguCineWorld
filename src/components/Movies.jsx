import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPage] = useState(1);

  const handlePrev = ()=>{
    if(pageNo==1){
      setPage(1)
    }
    setPage(pageNo-1)
  }

  const handleNext = ()=>{
    setPage(pageNo+1)
  }
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=e2da318fa1e6e266a7733328964ba6d5&with_original_language=te&page=${pageNo}`)
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]); 

  
  return (
    <div>
      <div className="font-bold text-center text-2xl">Trending Movies</div>
      <div className="flex flex-wrap justify-between items-end gap">
        {
          movies.map((movieObj) => {
            return <MovieCard key={movieObj.id} poster_path={movieObj.poster_path} name={movieObj.original_title} />;
          })
        }
      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  );
}

export default Movies;

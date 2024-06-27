import React from "react";

function Watchlist() {
  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="flex justify-center rounded-xl h-[3rem] w-[9rem] bg-blue-400 font-bold text-white items-center mx-4">
          Action
        </div>
        <div className="flex justify-center rounded-xl h-[3rem] w-[9rem] bg-gray-00 font-bold text-white items-center">
          Action
        </div>
      </div>
      <div className="flex justify-center my-5">
        <input
          type="text"
          placeholder="Search for Movie"
          className="h-[3rem] w-[18rem] bg-gray-200 px-4"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full">
          <thead className="border-b-3">
            <th>Name</th>
            <th>Ratings</th>
            <th>Popularity</th>
            <th>Genre</th>
          </thead>
          <tbody>
            <tr className="border-b-2">
              <td className="flex items-center">
                <img
                  className="h-[10rem] w-[15rem]"
                  src="https://files.prokerala.com/movies/pics/1024/birthday-poster-of-sai-pallavi-movie-113601.jpg"
                />
                <div className="mx-10">Love Story</div>
              </td>
              <td>8.5</td>
              <td>9</td>
              <td>Action</td>
              <td className="text-red-1000">Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;

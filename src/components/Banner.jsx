import React from "react";

function Banner() {
  return (
    <div
      className="10vh md:h-[80vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage:
          "url(https://miro.medium.com/v2/resize:fit:2400/format:webp/1*hokOn8W6gzNEvh9jl-2Kxw.jpeg)",
      }}
    >
      <div className="text-white text-2xl text-center w-full bg-blue-900/60 p-3">
        Kalki 2898 - A.D
      </div>
    </div>
  );
}

export default Banner;

import React from "react";

function Pagination({ handleNext, handlePrev, pageNo }) {
  return (
    <div className="bg-gray-400 p-3 mt-5 text-center jutify-center">
      <div className="px-8 hover:cursor-pointer" onClick={handlePrev}>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div>{pageNo}</div>
      <div className="px-8" onClick={handleNext}>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;

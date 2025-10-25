import React from "react";

const Shimmer = () => {
  return (
    <div className="w-72 h-5 bg-gray-300 rounded overflow-hidden relative">
      <div className="absolute top-0 left-[-50%] h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer">Shimmer UI Loading......</div>
      <h1 className="relative text-black ">Shimmer UI Loading......</h1>
    </div>
  );
};

export default Shimmer;
import React, { Suspense } from "react";

const Spinner = () => (
  <div className="flex justify-center items-center space-x-4 my-20">
    <div className="border-4 border-t-primary border-dashed rounded-full w-16 h-16 animate-spin"></div>
    <p className="text-primary text-lg animate-pulse">Loading...</p>
  </div>
);

export default Spinner;
import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <progress className="w-56 animate-spin progress progress-primary"></progress>
    </div>
  );
};

export default Loader;
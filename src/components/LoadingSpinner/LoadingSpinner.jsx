import React from 'react';
import { RingLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black z-50">
      <RingLoader color="#00FFFF" size={100} />
    </div>
  );
};

export default LoadingSpinner;

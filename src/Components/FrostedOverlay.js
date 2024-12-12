import React from 'react';

const FrostedOverlay = ({ children }) => {
  return (
    <div className="w-4/5 mx-auto my-20 bg-[#fbd6c8]/20 backdrop-blur-md rounded-lg p-8 border-[2px] border-dashed border-white">
      {children}
    </div>
  );
};

export default FrostedOverlay;

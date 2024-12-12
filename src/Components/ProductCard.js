import React, { useState } from "react";

const ProductCard = ({ imageSrc, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
      <img
        src={imageSrc}
        alt="Card Image"
        className="object-cover w-full h-48"
      />
      <div className="flex flex-col justify-between flex-grow p-4">
        <h3 className="text-lg text-[#eaaf99] font-bold">{title}</h3>
        <p
          className={`text-sm text-gray-600 flex-grow overflow-hidden relative transition-all ${
            isExpanded ? "max-h-full" : "max-h-24"
          }`}
        >
          {description}
          <span
            className={`absolute inset-x-0 ${
              isExpanded ? "top-0" : "bottom-0"
            } text-sm text-gray-600 bg-gradient-to-t from-white to-transparent h-10 flex ease-in-out transition-all duration-250 items-center justify-center cursor-pointer`}
            onClick={toggleDescription}
          >
            <button className="text-gray-700">{isExpanded ? "↑" : "↓"}</button>
          </span>
        </p>
        <button className="mt-4 w-full py-2 bg-[#fbd6c8] text-white font-semibold rounded-lg hover:bg-[#e8a38b] transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

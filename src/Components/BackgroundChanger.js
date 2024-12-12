import React, { useState, useEffect } from 'react';

const BackgroundChanger = () => {
  const [bgIndex, setBgIndex] = useState(0);

  // Array of background images
  const backgrounds = [
    'https://res.cloudinary.com/dmlexnpty/image/upload/v1732610311/property_images/tzzhf7o5wykyfctmqyty.jpg',
    'https://res.cloudinary.com/dmlexnpty/image/upload/v1732609750/property_images/hbssd3t6bune92llbkil.jpg',
    'https://res.cloudinary.com/dmlexnpty/image/upload/v1727341575/cld-sample-3.jpg',
    'https://res.cloudinary.com/dmlexnpty/image/upload/v1727341575/cld-sample-4.jpg',
    'https://res.cloudinary.com/dmlexnpty/image/upload/v1727341575/samples/cup-on-a-table.jpg',
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the current section based on scroll position
      const sectionHeight = window.innerHeight; // Height of a single section
      const scrollPosition = window.scrollY; // Current scroll position
      const index = Math.floor(scrollPosition / sectionHeight);

      // Ensure the index stays within bounds
      if (index >= 0 && index < backgrounds.length) {
        setBgIndex(index);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [backgrounds.length]);

  return (
    <div
      className="fixed inset-0 bg-cover bg-center transition-opacity duration-500"
      style={{
        backgroundImage: `url(${backgrounds[bgIndex]})`,
        zIndex: -1, // Keeps it in the background
      }}
    ></div>
  );
};

export default BackgroundChanger;

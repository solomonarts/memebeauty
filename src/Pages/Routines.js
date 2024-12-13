import React from "react";
import FrostedOverlay from "../Components/FrostedOverlay";
import BookingSection from "../Components/BookingSection";

const Routines = ({ routinesref }) => {
  return (
    <div
      ref={routinesref}
      id="routines"
      className="min-h-screen flex items-center justify-center"
    >
      <FrostedOverlay>
        {/* <h1 className="text-4xl font-bold text-white">Your Daily Glow Routine</h1>
        <p className="mt-4 text-lg text-white/90">
          Beauty is a habit. Transform your skin with customized routines designed for your lifestyle. Whether it’s a quick 5-minute ritual or an indulgent spa night, we have the perfect plan for you.
        </p>
        <div className="mt-8 space-x-4">
          <button className="px-6 py-3 bg-peach-500 hover:bg-peach-400 text-white rounded-lg">
            Explore Routines
          </button>
          <button className="px-6 py-3 bg-white text-peach-500 hover:bg-peach-200 rounded-lg">
            Book a Personalized Consultation
          </button>
        </div> */}

        <div>
          <header>
            <h1 className="text-4xl font-bold text-white">Tailored Skincare Routines</h1>
            <p className="my-6 text-lg text-white/90">
              Book a consultation with our experts for personalized skincare
              recommendations.
            </p>
          </header>
         <BookingSection />
        </div>
      </FrostedOverlay>
    </div>
  );
};

export default Routines;

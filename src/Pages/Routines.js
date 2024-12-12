import React from "react";
import FrostedOverlay from "../Components/FrostedOverlay";

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
            <h1>Tailored Skincare Routines</h1>
            <p>
              Book a consultation with our experts for personalized skincare
              recommendations.
            </p>
          </header>
          <section>
            <h2>Normal Skin Routine</h2>
            <p>Step 1: Cleanse with Gentle Foaming Cleanser</p>
            <p>Step 2: Tone with Hydrating Toner</p>
            <p>Step 3: Moisturize with Hydrating Facial Cream</p>
          </section>
        </div>
      </FrostedOverlay>
    </div>
  );
};

export default Routines;

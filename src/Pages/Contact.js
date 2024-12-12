import React from "react";
import FrostedOverlay from "../Components/FrostedOverlay";

const Contact = ({ contactref }) => {
  return (
    <div
      ref={contactref}
      id="contact"
      className="min-h-screen flex items-center justify-center"
    >
      <FrostedOverlay>
        {/* <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        <p className="mt-4 text-lg text-white/90">
          Have questions or want to book an appointment? We’re here to help! Reach out to us and let’s make magic happen.
        </p>
        <div className="mt-8 space-y-4">
          <p className="text-white/80">📍 123 Beauty Lane, Glow City</p>
          <p className="text-white/80">📞 +123 456 7890</p>
          <p className="text-white/80">📧 contact@beautyandspa.com</p>
        </div>
        <div className="mt-8">
          <button className="px-6 py-3 bg-peach-500 hover:bg-peach-400 text-white rounded-lg">
            Book an Appointment
          </button>
        </div> */}
        <div>
          <header>
            <h1>Contact Us</h1>
            <p>We'd love to hear from you!</p>
          </header>
          <section>
            <h2>Contact Information</h2>
            <p>Address: Plot 45, Beauty Lane, Kampala, Uganda</p>
            <p>Phone: +256-555-12345</p>
            <p>Email: info@memebeautyspa.com</p>
          </section>
        </div>
      </FrostedOverlay>
    </div>
  );
};

export default Contact;

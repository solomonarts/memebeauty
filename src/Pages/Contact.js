import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Contact = ({ contactref }) => {
  return (
    <div ref={contactref} className="bg-peachpuff bg-repeat min-h-max p-8">
      <div className="text-white text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">
          Address: Plot 45, Beauty Lane, Kampala, Uganda
        </p>
        <p className="text-lg">Phone: +256-555-12345</p>
        <p className="text-lg">Email: info@memebeautyspa.com</p>
      </div>
      <div className="flex justify-center mt-6 space-x-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 text-2xl text-white"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 text-2xl text-white"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Contact;

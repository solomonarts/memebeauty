import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import memelogo from "../Assets/logos/memelogo.png";
import { FaBars } from "react-icons/fa";

const Navbar = ({ scrollToSection }) => {
  const [isopen, setIsopen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-sm flex items-center justify-between px-2 lg:px-14 py-1 z-50">
        <div className="text-2xl font-bold text-white flex items-center">
          <img src={memelogo} alt="Meme_logo" className="w-[100px] h-auto" />
          Meme Beauty Spa
        </div>
        <ul className="hidden lg:flex space-x-6 text-white">
          {["Home", "About", "Products", "Routines", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  to={`/#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() =>
                    scrollToSection(`${item.toLocaleLowerCase()}ref`)
                  }
                  className="relative hover:after:w-full after:w-0 after:h-1 after:bg-white after:absolute after:-bottom-2 after:left-0 after:transition-all"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="text-white flex items-center">
          <FaBars
            className="text-2xl cursor-pointer lg:hidden"
            onClick={() => setIsopen(!isopen)}
          />
        </div>
      </nav>
      {isopen && (
        <ul className="flex lg:hidden fixed top-24 z-50 w-full bg-white/50 backdrop-blur-sm flex-col items-center gap-4 py-4 text-[#a15d44]">
          {["Home", "About", "Products", "Routines", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  to={`/#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => {
                    scrollToSection(`${item.toLocaleLowerCase()}ref`);
                    setIsopen(false);
                  }}
                  className="relative hover:after:w-full after:w-0 after:h-1 font-semibold after:bg-white after:absolute after:-bottom-2 after:left-0 after:transition-all"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default Navbar;

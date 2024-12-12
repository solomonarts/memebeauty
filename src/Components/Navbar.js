import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import memelogo from "../Assets/logos/memelogo.png";

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-sm flex items-center justify-between px-14 py-1 z-50">
      <div className="text-2xl font-bold text-white flex items-center">
        <img src={memelogo} alt="Meme_logo" className="w-[100px] h-auto" />
        Meme Beauty Spa
      </div>
      <ul className="flex space-x-6 text-white">
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
        <ShoppingCartOutlined className="text-2xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;

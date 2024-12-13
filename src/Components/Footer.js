import { Image } from "antd";
import InternalPreviewGroup from "antd/es/image/PreviewGroup";
import React from "react";
import { FaCopyright, FaFacebook, FaInstagram, FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
import { backgrounds } from "../constants";

function Footer() {
  return (
    <>
      <footer className="px-20 py-10 w-full mx-auto bg-white/45 backdrop-blur-md rounded-t-lg">
        {/* <div className="footer-links">
        <h4 className="underline font-bold mb-2">Page Links</h4>
        <ul className="flex flex-col gap-5 text-white">
          {["Home", "About", "Our Products", "Routines", "Contact Us"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="relative hover:after:w-full after:w-0 after:h-1 after:bg-white after:absolute after:-bottom-2 after:left-0 after:transition-all"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </div> */}
        <div className="footer-gallery items-center">
          <h3 className="underline font-bold mb-4 text-xl text-white">Gallery</h3>
          <InternalPreviewGroup>
            <Image
              width={100}
              src={backgrounds["meme3.jpeg"]}
              alt="Gallery Image 1"
            />
            <Image
              width={100}
              src={backgrounds["meme8.jpeg"]}
              alt="Gallery Image 2"
            />
            <Image
              width={100}
              src={backgrounds["meme5.jpeg"]}
              alt="Gallery Image 3"
            />
          </InternalPreviewGroup>
        </div>
      </footer>
      <div className="bg-white min-h-max min-w-full flex flex-col items-center content-center align-middle py-1">
        <h6 className="flex gap-2 h-full items-center"><FaRegCopyright /> Memebeautyspa </h6>
        <p>{new Date().getFullYear()}</p>
      </div>
    </>
  );
}

export default Footer;

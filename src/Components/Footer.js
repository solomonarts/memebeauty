import { Image } from "antd";
import InternalPreviewGroup from "antd/es/image/PreviewGroup";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex justify-between px-20 py-20 w-full mx-auto bg-white/45 backdrop-blur-md rounded-lg">
      <div className="footer-socials">
        <h4 className="underline font-bold mb-2">Socials</h4>
        <div className="flex">
          <a
            href="https://www.instagram.com/memebeautyspa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/memebeautyspa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="footer-links">
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
      </div>
      <div className="footer-gallery">
        <h3>Gallery</h3>
        <InternalPreviewGroup>
          <Image width={100} src="gallery-image-1.jpg" alt="Gallery Image 1" />
          <Image width={100} src="gallery-image-2.jpg" alt="Gallery Image 2" />
          <Image width={100} src="gallery-image-3.jpg" alt="Gallery Image 3" />
        </InternalPreviewGroup>
      </div>
    </footer>
  );
}

export default Footer;

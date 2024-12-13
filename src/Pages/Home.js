import React from "react";
import FrostedOverlay from "../Components/FrostedOverlay";
import { Button } from "@nextui-org/react";
import ProductCard from "../Components/ProductCard";
import { backgrounds } from "../constants";

const Home = ({ homeref }) => {
  const products = [
    {
      image: backgrounds["meme1.jpeg"],
      title: "Hydrating Facial Cream",
      description:
        "Nourish and hydrate for a radiant glow. Nourish and hydrate for a radiant glow. Nourish and hydrate for a radiant glow.",
    },
    {
      image: backgrounds["meme4.jpeg"],
      title: "Brightening Face Mask",
      description:
        "Reveal brighter, smoother skin with every use. Reveal brighter, smoother skin with every use. Reveal brighter, smoother skin with every use.",
    },
    {
      image: backgrounds["meme8.jpeg"],
      title: "Nourishing Body Butter",
      description:
        "Luxurious hydration that lasts all day. Luxurious hydration that lasts all day. Luxurious hydration that lasts all day.",
    },
  ];
  return (
    <div
      ref={homeref}
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <FrostedOverlay>
        {/* <h1 className="text-4xl font-bold text-white">Radiate Confidence Inside and Out</h1>
        <p className="mt-4 text-lg text-white/90">
          Discover the ultimate blend of luxury, relaxation, and beauty. From rejuvenating spa treatments to premium beauty products, we’re here to help you shine.
        </p>
        <div className="mt-8 space-x-4">
          <button className="px-6 py-3 bg-peach-500 hover:bg-peach-400 text-white rounded-lg">
            Shop Products
          </button>
          <button className="px-6 py-3 bg-white text-peach-500 hover:bg-peach-200 rounded-lg">
            Book a Spa Experience
          </button>
        </div> */}
        <div>
          <header className="hero-section">
            <h1 className="text-5xl font-bold text-white">
              Welcome to Meme Beauty Spa
            </h1>
            <p className="mt-4 text-xl font-bold text-white/90">
              Your one-stop-shop for all your beauty and skincare needs
            </p>
            <Button className="px-6 py-4 bg-peach-500 hover:bg-peach-400 text-xl font-semibold text-white rounded-lg border-1 my-5">
              Explore Now
            </Button>
          </header>
          <section className="featured-products">
            <h2 className="text-2xl font-bold text-white my-5">
              Our Best-Sellers
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {products.map((product, pindx) => {
                return (
                  <ProductCard
                    imageSrc={product.image}
                    title={product.title}
                    description={product.description}
                  />
                );
              })}
            </div>
            {/* <div className="flex justify-evenly">
              <div className="grid gap-4 bg-white/90 shadow rounded-lg p-5 hover:shadow-lg hover:bg-white transition-all duration-150 cursor-pointer">
                <img src="sample-product-1.jpg" alt="Hydrating Facial Cream" />
                <h3 className="text-blue-500 text-sm uppercase">
                  Hydrating Facial Cream
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Nourish and hydrate for a radiant glow.
                </p>
                <button className="px-6 py-2 bg-[#fbd6c8] w-full m-auto hover:bg-peach-400 rounded-lg">
                  Shop Now
                </button>
              </div>
              <div className="grid gap-4 bg-white/90 shadow rounded-lg p-5 hover:shadow-lg hover:bg-white transition-all duration-150 cursor-pointer">
                <img src="sample-product-2.jpg" alt="Brightening Face Mask" />
                <h3 className="text-blue-500 text-sm uppercase">
                  Brightening Face Mask
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Reveal brighter, smoother skin with every use.
                </p>
                <button className="px-6 py-2 bg-[#fbd6c8] w-full m-auto hover:bg-peach-400 rounded-lg">
                  Shop Now
                </button>
              </div>
              <div className="grid gap-4 bg-white/90 shadow rounded-lg p-5 hover:shadow-lg hover:bg-white transition-all duration-150 cursor-pointer">
                <img src="sample-product-3.jpg" alt="Nourishing Body Butter" />
                <h3 className="text-blue-500 text-sm uppercase">
                  Nourishing Body Butter
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Luxurious hydration that lasts all day.
                </p>
                <button className="px-6 py-2 bg-[#fbd6c8] w-full m-auto hover:bg-peach-400 rounded-lg">
                  Shop Now
                </button>
              </div>
            </div> */}
          </section>
        </div>
      </FrostedOverlay>
    </div>
  );
};

export default Home;

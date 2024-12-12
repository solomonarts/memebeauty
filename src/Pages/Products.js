import React, { useState } from "react";
import FrostedOverlay from "../Components/FrostedOverlay";
import { backgrounds } from "../constants";

const items = [
  {
    id: 1,
    name: "Hydrating Facial Cream",
    price: 25,
    image: "meme3.jpeg",
  },
  {
    id: 2,
    name: "Brightening Face Mask",
    price: 15,
    image: "meme4.jpeg",
  },
  {
    id: 3,
    name: "Nourishing Body Butter",
    price: 20,
    image: "meme7.jpeg",
  },
];

const Products = ({ productsref }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <FrostedOverlay>
      <div ref={productsref} id="products" className="p-6">
        <h1 className="text-2xl font-bold mb-4">Mini Shop</h1>

        {/* Product List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow">
              <img
                src={backgrounds[product.image]}
                alt={product.name}
                className="w-full h-32 object-cover mb-4"
              />
              <h2 className="text-lg text-white font-semibold">
                {product.name}
              </h2>
              <p className="text-white">${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-white text-black px-4 py-2 rounded hover:bg-white/80"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border p-4 rounded-lg"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="text-right font-semibold text-lg mt-4">
                Total: ${total.toFixed(2)}
              </div>
            </div>
          )}
        </div>
      </div>
    </FrostedOverlay>
  );
};

export default Products;

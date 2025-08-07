import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <motion.div
      className="max-w-6xl mx-auto p-6"
      initial={{ opacity: 0, y: 30 }}          
      animate={{ opacity: 1, y: 0 }}           
      transition={{ duration: 0.5, ease: "easeOut" }} 
    >
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
        My Wishlist
      </h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <button
                onClick={() => toggleWishlist(product)}
                className="absolute top-3 right-3 text-xl text-red-500 hover:scale-110 transition"
              >
                ♥
              </button>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-purple-600 font-bold">{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-3 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Wishlist;

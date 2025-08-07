import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <nav className="bg-purple-700 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link to="/">Mini E-Commerce</Link>
      </h1>
      <ul className="flex space-x-6 text-lg items-center">
        <li>
          <Link to="/">Products</Link>
        </li>
        
        <li>
          <Link to="/wishlist" className="flex items-center gap-1 hover:text-gray-200 transition">
            <FaHeart className="text-lg" />
            Wishlist
          </Link>
        </li>

        <li className="relative">
          <Link to="/cart">
            <FaShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { FaHeart, FaRegHeart, FaTimes } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹1,999",
    image: "/images/wireless headphones.jpg",
    stock: 10,
    description: "Experience premium sound with these wireless headphones.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹2,499",
    image: "/images/smartwatch.jpg",
    stock: 3,
    description: "Track fitness and stay connected with this smartwatch.",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "₹1,799",
    image: "/images/bluetooth speaker.jpg",
    stock: 5,
    description: "Portable speaker with high-quality sound and bass.",
  },
  {
    id: 4,
    name: "Cable Organizer",
    price: "₹299",
    image: "/images/cable organizers.jpg",
    stock: 15,
    description: "Keep your cables neat, tidy, and tangle-free.",
  },
  {
    id: 5,
    name: "Wireless Mouse",
    price: "₹599",
    image: "/images/wireless mouse.jpg",
    stock: 0,
    description: "Ergonomic wireless mouse with long battery life.",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: "₹1,299",
    image: "/images/mechanical keyboards.jpg",
    stock: 8,
    description: "Enjoy fast, smooth, and clicky typing with every press.",
  },
  {
    id: 7,
    name: "Laptop Stand",
    price: "₹999",
    image: "/images/laptop stand.jpg",
    stock: 20,
    description: "Adjustable aluminum laptop stand for better posture.",
  },
  {
    id: 8,
    name: "Cooling Pads",
    price: "₹1,199",
    image: "/images/ooling pads.jpg",
    stock: 7,
    description: "Keep your Device cool and performance sharp.",
  },
];

const Products = () => {
  const { addToCart, cart } = useCart();
  const { wishlist, toggleWishlist, isWishlisted } = useWishlist();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto animate-fade">
      <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">Our Products</h1>

      {/* Search Bar */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="mt-3 sm:mt-0 bg-gray-200 text-sm text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Clear
          </button>
        )}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-105 relative animate-zoom"
            >
              {/* Wishlist Icon */}
              <button
                onClick={() => toggleWishlist(product)}
                className={`absolute top-3 right-3 text-xl transition-transform duration-300 hover:scale-125 ${
                  isWishlisted(product.id) ? "text-red-500" : "text-gray-400"
                }`}
              >
                {isWishlisted(product.id) ? <FaHeart /> : <FaRegHeart />}
              </button>

              {/* Out of Stock Badge */}
              {product.stock === 0 && (
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  Out of Stock
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-4 cursor-pointer transition duration-300 hover:opacity-90"
                onClick={() => setSelectedProduct(product)}
              />
              <h3
                className="text-lg font-semibold cursor-pointer hover:text-purple-700 transition"
                onClick={() => setSelectedProduct(product)}
              >
                {product.name}
              </h3>
              <p className="text-purple-600 font-bold">{product.price}</p>

              <button
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
                className={`mt-3 px-4 py-2 rounded transition text-white ${
                  product.stock === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-purple-700 hover:bg-purple-800"
                }`}
              >
                Add to Cart
              </button>

              {getQuantity(product.id) > 0 && (
                <p className="mt-2 text-sm font-semibold text-green-600">
                  In Cart: {getQuantity(product.id)}
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No products found.</p>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative animate-zoom">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <FaTimes />
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
            <p className="text-purple-600 font-bold text-lg mb-2">{selectedProduct.price}</p>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

            <button
              onClick={() => {
                addToCart(selectedProduct);
                setSelectedProduct(null);
              }}
              disabled={selectedProduct.stock === 0}
              className={`px-4 py-2 rounded transition text-white ${
                selectedProduct.stock === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-purple-700 hover:bg-purple-800"
              }`}
            >
              {selectedProduct.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

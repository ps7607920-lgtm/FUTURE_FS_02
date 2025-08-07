import React from "react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion"; 

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  const handleRemove = (product) => {
    removeFromCart(product.id);
    toast.error(`${product.name} removed from cart`, { toastId: `remove-${product.id}` });
  };

  const handleClear = () => {
    clearCart();
    toast.info("Cart cleared", { toastId: "clear-cart" });
  };

  return (
    <motion.div
      className="p-6 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold mb-4 text-purple-700 text-center">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded flex gap-4 items-center shadow hover:shadow-md transition hover:scale-[1.02]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-sm">Quantity: {item.quantity}</p>
                <p className="text-sm text-purple-600">Price: {item.price}</p>
              </div>
              <button
                onClick={() => handleRemove(item)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-lg font-semibold text-right">Total: ${totalPrice.toFixed(2)}</div>
          <button
            onClick={handleClear}
            className="mt-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
          >
            Clear Cart
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;

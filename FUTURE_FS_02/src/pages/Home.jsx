import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Headphones, Watch, Speaker, Github, ShieldCheck, FileText } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹1,999",
    image: "/images/wireless headphones.jpg",
    icon: <Headphones className="w-6 h-6 text-purple-600" />,
    badge: "Popular",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹2,499",
    image: "/images/smartwatch.jpg",
    icon: <Watch className="w-6 h-6 text-purple-600" />,
    badge: "New",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "₹1,799",
    image: "/images/bluetooth speaker.jpg",
    icon: <Speaker className="w-6 h-6 text-purple-600" />,
    badge: "Trending",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Priya Singh",
    feedback:
      "Mini Store has the best tech gadgets at unbeatable prices. Fast delivery and great quality!",
  },
  {
    id: 2,
    name: "Ayush Kasaudhan",
    feedback:
      "Super satisfied with the shopping experience. Will definitely recommend to friends!",
  },
  {
    id: 3,
    name: "Sakshi Singh",
    feedback:
      "Products were exactly as described, and customer service was very helpful.",
  },
];

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Hero Section */}
      <motion.section
        className="text-center py-20 bg-gradient-to-br from-purple-100 to-white px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-purple-700 mb-4">
          Welcome to Mini Store
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl max-w-xl mx-auto mb-6">
          Your one-stop shop for tech gadgets and accessories at affordable prices.
        </p>
        <Link
          to="/products"
          className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition"
        >
          Shop Now
        </Link>
      </motion.section>

      {/* Featured Products */}
      <section className="px-6 py-10 bg-white">
        <motion.h2
          className="text-3xl font-bold text-center text-purple-700 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Products
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition hover:scale-105 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              {/* Badge */}
              <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full transition-transform transform hover:scale-110 hover:bg-purple-700">
               {product.badge}
              </span>


              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-4"
              />

              {/* Icon and title */}
              <div className="flex items-center gap-2 mb-1">
                {product.icon}
                <h3 className="text-lg font-semibold">{product.name}</h3>
              </div>
              <p className="text-purple-600 font-bold">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="bg-purple-50 py-12 text-center px-4">
        <motion.h2
          className="text-3xl font-bold text-purple-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        <motion.div
          key={testimonials[currentTestimonial].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="max-w-3xl mx-auto"
        >
          <p className="italic text-gray-700 text-lg mb-4">
            “{testimonials[currentTestimonial].feedback}”
          </p>
          <p className="font-semibold text-purple-800">
            – {testimonials[currentTestimonial].name}
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;

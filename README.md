# 🛒 Mini E-Commerce Storefront

A modern and responsive e-commerce storefront built using **React**, **Vite**, and **Tailwind CSS**. This project showcases core shopping functionalities like product listing, cart, wishlist, and smooth UI interactions. Ideal for beginners learning React or developers building a portfolio project.

---

## ✨ Features

- 🛍️ Product grid with image, name, price, and stock indicator
- ❤️ Wishlist: Add or remove items easily with animation
- 🛒 Cart: Add/remove items with quantity and total calculation
- 🔥 Toast notifications for user actions using `react-toastify`
- 💾 Persistent cart and wishlist using `localStorage`
- 📱 Responsive design using Tailwind CSS
- 🎨 Smooth UI animations using `framer-motion`

---

## ⚙️ Tech Stack

- **React** (with Vite)
- **Tailwind CSS**
- **React Router DOM**
- **React Toastify**
- **Framer Motion**
- **Context API** (for Cart & Wishlist management)

---

## 📁 Folder Structure

project-root/

│
├── public/ # Static files and images

│ └── images/ # Images

│
├── src/ # components, context, pages

│ ├── components/ # Navbar, Footer

│ ├── context/ # CartContext and WishlistContext

│ ├── pages/ # Home, Products, Cart, Wishlist, etc.

│ ├── App.jsx

│ └── main.jsx

│
├── tailwind.config.js # Tailwind configuration

├── postcss.config.js # PostCSS setup for Tailwind

├── index.html # Entry point

└── package.json

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your system
- VS Code or any preferred code editor

### Steps to Run

1. **Clone the repository** or copy project files (excluding `node_modules`)
2. Navigate to the folder in terminal:

---

### Install dependencies:

npm install

Start development server:
npm run dev

Open in browser:
http://localhost:5173

✅ Tailwind will already be set up if tailwind.config.js and postcss.config.js are included — no need to run npx tailwindcss init -p.

---

📌 Note

1. This is a frontend-only project.

2. All data (products, cart, wishlist) is handled locally.

---

📄 License

This project is open-source and available under the MIT License.

---

🙋‍♀️ Author

Priya Singh

GitHub: https://github.com/ps7607920-lgtm

Email id: ps7607920@gmail.com

Linkedin: https://www.linkedin.com/in/priya-singh-70692a290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app

Hugging Face: https://huggingface.co/PriyaSinghlgtm







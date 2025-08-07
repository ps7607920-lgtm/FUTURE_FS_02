import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Mini E-Commerce. All rights reserved.
        </p>

        {/* Right - Icons */}
        <div className="flex space-x-4 text-2xl">
          <a
            href="https://github.com/ps7607920-lgtm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://huggingface.co/PriyaSinghlgtm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition transform hover:scale-110"
            aria-label="Hugging Face"
          >
            <SiHuggingface />
          </a>
          <a
            href="https://www.linkedin.com/in/priya-singh-70692a290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

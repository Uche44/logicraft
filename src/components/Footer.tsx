import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative bg-cover bg-center text-gray-800 py-16 px-6 md:px-20"
      style={{
        backgroundImage: "url('https://i.ibb.co/vZy5z8W/ship-footer.jpg')",
      }} // Replace with your ship image
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 z-10">
        {/* Connect With Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            Connect With Us <span className="inline-block text-lg">↗</span>
          </h3>
          <div className="flex items-center gap-4 mb-6">
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600"
            >
              <FaPinterestP size={20} />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600"
            >
              <FaTwitter size={20} />
            </a>
          </div>
          <p className="text-sm">Or email us at</p>
          <p className="font-semibold">connect@logicraft.com</p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Menu</h3>
          <ul className="space-y-2 text-gray-700">
            <li>About us</li>
            <li>Live Tracking</li>
            <li>Solutuons</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Office */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Office</h3>
          <p className="mb-4">
            2762 N Fairfield Rd, Beavercreek, Ohio 45431, United States
          </p>
          <p className="mb-4">
            2762 N Fairfield Rd, Beavercreek, Ohio 45431, United States
          </p>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <FaPhoneAlt size={16} />
              <span>+41 2541 9454</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt size={16} />
              <span>+41 2541 9454</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

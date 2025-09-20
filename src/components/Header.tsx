import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-1000">
      <div className="container mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo + Brand */}
        <span className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="logo"
            className="w-50 h-10 object-cover"
          />
          {/* <h2 className="text-xl font-bolder text-gray-800">
            LOGI<span className="font-light">CRAFT</span>
          </h2> */}
        </span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium mr-6">
          <NavLink
            to="/track-order"
            className="hover:text-blue-600"
          >
            Track Order
          </NavLink>
          <NavLink
            to="/services"
            className="hover:text-blue-600"
          >
            Our Services
          </NavLink>
          <NavLink
            to="/solutions"
            className="hover:text-blue-600"
          >
            Solutions
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-blue-600"
          >
            About Us
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden flex flex-col bg-white shadow-lg px-6 py-4 space-y-4 text-gray-700 font-medium">
          <NavLink
            to="/track-order"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Track Order
          </NavLink>
          <NavLink
            to="/services"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Our Services
          </NavLink>
          <NavLink
            to="/solutions"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Solutions
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;

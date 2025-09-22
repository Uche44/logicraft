import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-[1000]">
      <div className="container mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <span className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="logo"
            className="w-50 h-10 object-cover"
          />
        </span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium mr-6">
          <a
            href="#track-order"
            className="hover:text-blue-600"
          >
            Track Order
          </a>
          <a
            href="#services"
            className="hover:text-blue-600"
          >
            Our Services
          </a>
          <a
            href="#solutions"
            className="hover:text-blue-600"
          >
            Solutions
          </a>
          <a
            href="#about"
            className="hover:text-blue-600"
          >
            About Us
          </a>
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
          <a
            href="#track-order"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Track Order
          </a>
          <a
            href="#services"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Our Services
          </a>
          <a
            href="#solutions"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Solutions
          </a>
          <a
            href="#about"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;

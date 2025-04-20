import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "Properties", to: "properties" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <h1
            className={`text-2xl font-bold ${
              scrolled ? "text-primary-900" : "text-white"
            }`}
          >
            <span className="font-playfair">MUZ </span>
            <span className="text-gold-500">Reality</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className={`navbar-link cursor-pointer font-medium ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-gold-500 transition-colors duration-300`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`${
              scrolled ? "text-gray-800" : "text-white"
            } focus:outline-none`}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 py-4"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 py-2 hover:text-gold-500 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

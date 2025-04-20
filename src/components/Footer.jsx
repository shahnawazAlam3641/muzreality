import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        {/* Footer Main */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="font-playfair">MUZ</span> 
              <span className="text-gold-500">Reality</span>
            </h3>
            <p className="mb-4 text-gray-400">
              Your trusted partner in finding premium real estate properties in Kolkata. Experience excellence in property solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="hero" smooth={true} duration={500} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link to="properties" smooth={true} duration={500} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  Services
                </Link>
              </li>
              <li>
                <Link to="testimonials" smooth={true} duration={500} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Property Types</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Residential Apartments
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Luxury Villas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Commercial Spaces
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Office Buildings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Land & Plots
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Rental Properties
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-gold-500" />
                <span className="text-gray-400">+91 8240207235</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-gold-500" />
                <span className="text-gray-400">info@muzreality.com</span>
              </li>
              <li className="text-gray-400">
                <p>Park Street, Kolkata</p>
                <p>West Bengal, India</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-700 text-center md:flex md:justify-between md:text-left">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2025 MUZ Reality. All rights reserved. <span className="text-gold-500">|</span> Md Muzammil, Sole Proprietor
            </p>
          </div>
          <div>
            <ul className="flex justify-center md:justify-end space-x-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              ValenceAI
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                location.pathname === '/' ? 'text-blue-600' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                location.pathname === '/about' ? 'text-blue-600' : ''
              }`}
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                location.pathname === '/blog' ? 'text-blue-600' : ''
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                location.pathname === '/contact' ? 'text-blue-600' : ''
              }`}
            >
              Contact
            </Link>
            <button className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors font-medium">
              Log In
            </button>
            <button className="bg-blue-600 text-white hover:bg-blue-700 px-5 py-2 rounded-lg transition-colors font-medium">
              Request a Demo
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  location.pathname === '/' ? 'text-blue-600' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  location.pathname === '/about' ? 'text-blue-600' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  location.pathname === '/blog' ? 'text-blue-600' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  location.pathname === '/contact' ? 'text-blue-600' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors font-medium w-full text-left">
                Log In
              </button>
              <button className="bg-blue-600 text-white hover:bg-blue-700 px-5 py-2 rounded-lg transition-colors font-medium w-full text-left">
                Request a Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
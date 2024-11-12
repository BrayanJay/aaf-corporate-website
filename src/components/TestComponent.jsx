import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const TestComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const sidebarRef = useRef(null); // Reference for sidebar

  const liClasses = 'text-white bg-bluegradient hover:bg-darkbluegradient py-1.5 px-2.5 rounded-tl-lg rounded-br-lg';

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close the sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-12">
        {/* Social Media Icons - Left side */}
        <div className="flex space-x-2">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={['fab', 'facebook']} className="text-blue-700 hover:text-blue-900 text-lg"/>
          </a>

          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={['fab', 'instagram']} className="text-blue-700 hover:text-blue-900 text-lg"/>
          </a>

          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-blue-700 hover:text-blue-900 text-lg"/>
          </a>

          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={['fab', 'youtube']} className="text-blue-700 hover:text-blue-900 text-lg"/>
          </a>
        </div>

        {/* Mobile Hamburger Menu for Sidebar */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navbar Tabs - Right side (Visible on larger screens only) */}
        <div className="hidden lg:flex space-x-3">
          {/* Home Tab */}
          <Link className={liClasses} to="/">
            Home
          </Link>

          {/* About Tab with Dropdown */}
          <div className="relative">
            <button
              className={liClasses}
              onClick={() => toggleDropdown('about')}
              onMouseEnter={() => toggleDropdown('about')}
            >
              <Link to="/about">About</Link>
            </button>
            {dropdown === 'about' && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-blue-900 shadow-lg z-50">
                <Link className="block px-4 py-2 hover:bg-blue-100" to="/products/gold-loan">
                  Mission, Vision & Goal
                </Link>
                <Link className="block px-4 py-2 hover:bg-blue-100" to="/products/fixed-deposit">
                  Board of Directors
                </Link>
                <Link className="block px-4 py-2 hover:bg-blue-100" to="/products/leasing">
                  Corporate management
                </Link>
                <Link className="block px-4 py-2 hover:bg-blue-100" to="/products/mortgage">
                  Branch Network
                </Link>
              </div>
            )}
          </div>

          {/* Products & Services Tab with Dropdown */}
          <div className="relative">
            <button
              className={liClasses}
              onClick={() => toggleDropdown('products')}
              onMouseEnter={() => toggleDropdown('products')}
            >
              <Link to="/products">Products & Services</Link>
            </button>
            {dropdown === 'products' && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-blue-900 shadow-lg z-50">
                <Link className="block px-4 py-2 hover:bg-blue-100" to="/products/gold-loan">
                  Gold Loan
                </Link>
                <Link className="block px-4 py-2 hover:bg-blue-100" to="/products/fixed-deposit">
                  Fixed Deposit
                </Link>
                <Link className="block px-4 py-2 hover:bg-blue-100" to="/products/leasing">
                  Leasing
                </Link>
                <Link className="block px-4 py-2 hover:bg-blue-100" to="/products/mortgage">
                  Mortgage
                </Link>
                <Link className="block px-4 py-2 hover:bg-blue-100" to="/products/foreign-exchange">
                  Foreign Exchange
                </Link>
                <Link className="block px-4 py-2 hover:bg-blue-100" to="/products/luckewallet">
                  Luckewallet
                </Link>
              </div>
            )}
          </div>

          {/* Investor Relations Tab with Dropdown */}
          <div className="relative">
            <button
              className={liClasses}
              onClick={() => toggleDropdown('ir')}
              onMouseEnter={() => toggleDropdown('ir')}
            >
              Investor Relations
            </button>
            {dropdown === 'ir' && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-blue-900 shadow-lg z-50">
                <Link className="block px-4 py-2 hover:bg-blue-100" to="/ir/reports">
                  Corporate Profile
                </Link>
                <Link className="block px-4 py-2 hover:bg-blue-100" to="/ir/governance">
                  Financial Keys
                </Link>
              </div>
            )}
          </div>

          {/* Careers Tab (No Dropdown) */}
          <Link className={liClasses} to="/careers">
            Careers
          </Link>

          {/* Downloads Tab (No Dropdown) */}
          <Link className={liClasses} to="/downloads">
            Downloads
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <div
          ref={sidebarRef} // Attach the ref here
          className="lg:hidden fixed top-0 right-0 bg-blue-600 h-full w-64 z-50"
        >
          <div className="flex flex-col space-y-4 py-4 px-4">
            <Link className="block text-white hover:text-gray-300" to="/" onClick={toggleSidebar}>
              Home
            </Link>
            <div className="relative">
              <button
                className="block text-white hover:text-gray-300"
                onClick={() => toggleDropdown('about')}
              >
                About
              </button>
              {dropdown === 'about' && (
                <div className="bg-blue-600 text-white space-y-2 py-2 px-4">
                  <Link className="block py-2 hover:bg-gray-500" to="/about/mission" onClick={toggleSidebar}>
                    Mission, Vision & Goal
                  </Link>
                  <Link className="block py-2 hover:bg-gray-500" to="/about/team" onClick={toggleSidebar}>
                    Board of Directors
                  </Link>
                  <Link className="block py-2 hover:bg-gray-500" to="/about/values" onClick={toggleSidebar}>
                    Corporate Management
                  </Link>
                  <Link className="block py-2 hover:bg-gray-500" to="/about/values" onClick={toggleSidebar}>
                    Branch Network
                  </Link>
                  
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="block text-white hover:text-gray-300"
                onClick={() => toggleDropdown('products')}
              >
                Products & Services
              </button>
              {dropdown === 'products' && (
                <div className="bg-blue-600 text-white space-y-2 py-2 px-4">
                  <Link className="block py-2 hover:bg-gray-500" to="/products/loans" onClick={toggleSidebar}>
                    Gold Loan
                  </Link>
                  <Link className="block py-2 hover:bg-gray-500" to="/products/savings" onClick={toggleSidebar}>
                    Fixed Deposit
                  </Link>
                  <Link className="block py-2 hover:bg-gray-500" to="/products/forex" onClick={toggleSidebar}>
                    Leasing
                  </Link>
                  <Link className="block py-2 hover:bg-gray-500" to="/products/forex" onClick={toggleSidebar}>
                    Mortgage
                  </Link>
                  <Link className="block py-2 hover:bg-gray-500" to="/products/forex" onClick={toggleSidebar}>
                    Foreign Exchange
                  </Link>
                  <Link className="block py-2 hover:bg-gray-500" to="/products/forex" onClick={toggleSidebar}>
                    Luckewallet
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="block text-white hover:text-gray-300"
                onClick={() => toggleDropdown('ir')}
              >
                Investor Relations
              </button>
              {dropdown === 'ir' && (
                <div className="bg-blue-600 text-white space-y-2 py-2 px-4">
                  <Link className="block py-2 hover:bg-gray-500" to="/ir/corporate-information" onClick={toggleSidebar}>
                    Corporate Profile
                  </Link>
                  <Link className="block py-2 hover:bg-gray-500" to="/ir/financial-keys" onClick={toggleSidebar}>
                    Financial Keys
                  </Link>
                </div>
              )}
            </div>

            <Link className="block text-white hover:text-gray-300" to="/careers" onClick={toggleSidebar}>
              Careers
            </Link>

            <Link className="block text-white hover:text-gray-300" to="/downloads" onClick={toggleSidebar}>
              Downloads
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TestComponent;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const navbarData = t("navbar", { returnObjects: true });

  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const sidebarRef = useRef(null); // Reference for sidebar
  const dropdownRef = useRef(null); // Ref for dropdown

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

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutsideDropdown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(null);
      }
    };

    // Only attach listener when dropdown is open
    if (dropdown) {
      document.addEventListener('mousedown', handleClickOutsideDropdown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDropdown);
    };
  }, [dropdown]); // Effect runs when dropdown state changes

  const scrolltoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <nav className="bg-white/50 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-12">
        {/* Social Media Icons */}
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

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button
            className="text-blue-700 hover:text-blue-900 focus:outline-none"
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

        {/* Navbar Tabs */}
        <div className="hidden lg:flex space-x-3">
          <Link className={liClasses} to="/" onClick={scrolltoTop}>
            {navbarData.home}
          </Link>

          {/* About Tab with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className={liClasses}
              onClick={() => toggleDropdown('about')}
            >
              {navbarData.about}
            </button>
            {dropdown === 'about' && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-blue-900 shadow-lg z-50">
                <HashLink className="block px-4 py-2 hover:bg-blue-100" smooth to="/about" onClick={() => { setDropdown(null); scrolltoTop(); }}>
                  {navbarData.about_dropdown0}
                </HashLink>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" smooth to="/about/#mission-vision-goal" onClick={() => setDropdown(null)}>
                  {navbarData.about_dropdown1}
                </HashLink>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" smooth to="/about/#bod" onClick={() => setDropdown(null)}>
                  {navbarData.about_dropdown2}
                </HashLink>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" smooth to="/about/#corporate-management" onClick={() => setDropdown(null)}>
                  {navbarData.about_dropdown3}
                </HashLink>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" smooth to="/about/#branches" onClick={() => setDropdown(null)}>
                  {navbarData.about_dropdown4}
                </HashLink>
              </div>
            )}
          </div>

          {/* More Tabs... */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

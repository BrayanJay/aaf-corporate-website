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
      <div className="container mx-auto px-4 flex items-center justify-end h-12">
        

        {/* Mobile Hamburger Menu for Sidebar */}
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

        {/* Navbar Tabs - Right side (Visible on larger screens only) */}
        <div className="hidden lg:flex space-x-3">
          {/* Home Tab */}
          <Link className={liClasses} to="/web" onClick={scrolltoTop}>
          {navbarData.home}
          </Link>

          {/* About Tab with Dropdown */}
          <div className="relative">
            <button
              className={liClasses}
              onClick={() => toggleDropdown('about')}
            >
              {navbarData.about}
            </button>
            {dropdown === 'about' && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-blue-900 shadow-lg z-50">
                <HashLink className="block px-4 py-2 hover:bg-blue-100" smooth to="/web/about" onClick={() => {setDropdown(null); scrolltoTop()}}>
                {navbarData.about_dropdown0}
                </HashLink>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" smooth to="/web/about/#mission-vision-goal" onClick={() => setDropdown(null)}>
                {navbarData.about_dropdown1}
                </HashLink>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" smooth to="/web/about/#bod" onClick={() => setDropdown(null)}>
                {navbarData.about_dropdown2}
                </HashLink>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" smooth to="/web/about/#corporate-management" onClick={() => setDropdown(null)}>
                {navbarData.about_dropdown3}
                </HashLink>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" smooth to="/web/about/#branches" onClick={() => setDropdown(null)}>
                {navbarData.about_dropdown4}
                </HashLink>
              </div>
            )}
          </div>

          {/* Products & Services Tab with Dropdown */}
          <div className="relative">
            <button
              className={liClasses}
              onClick={() => toggleDropdown('products')}
            >
              {navbarData.products}
            </button>
            {dropdown === 'products' && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-blue-900 shadow-lg z-50">
                <HashLink className="block px-4 py-2 hover:bg-blue-100" smooth to="/web/products" onClick={() => {setDropdown(null); scrolltoTop()}}>
                {navbarData.products_dropdown1}
                </HashLink>
                <Link className="block px-4 py-2 hover:bg-blue-100" to="/web/gold-loan" onClick={() => {setDropdown(null); scrolltoTop()}}>
                {navbarData.products_dropdown2}
                </Link>
                <Link className="block px-4 py-2 hover:bg-blue-100" to="/web/fixed-deposit" onClick={() => {setDropdown(null); scrolltoTop()}}>
                {navbarData.products_dropdown3}
                </Link>
                <Link className="block px-4 py-2 hover:bg-blue-100" to="/web/leasing" onClick={() => {setDropdown(null); scrolltoTop()}}>
                {navbarData.products_dropdown4}
                </Link>
                <Link className="block px-4 py-2 hover:bg-blue-100" to="/web/mortgage" onClick={() => {setDropdown(null); scrolltoTop()}}>
                {navbarData.products_dropdown5}
                </Link>
                <Link className="block px-4 py-2 hover:bg-blue-100" to="/web/foreign-exchange" onClick={() => {setDropdown(null); scrolltoTop()}}>
                {navbarData.products_dropdown6}
                </Link>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" smooth to="/web/products/#luckewallet" onClick={() => {setDropdown(null)}}>
                {navbarData.products_dropdown7}
                </HashLink>
              </div>
            )}
          </div>

          {/* Investor Relations Tab with Dropdown */}
          <div className="relative">
            <button
              className={liClasses}
              onClick={() => toggleDropdown('ir')}
            >
              {navbarData.investor_relations}
            </button>
            {dropdown === 'ir' && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-blue-900 shadow-lg z-50">
                <HashLink className="block px-4 py-2 hover:bg-blue-100" to="/web/ir" onClick={() => {setDropdown(null); scrolltoTop()}}>
                {navbarData.investor_relations_dropdown1}
                </HashLink>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" to="/web/ir/#financial-keys" onClick={() => setDropdown(null)}>
                {navbarData.investor_relations_dropdown2}
                </HashLink>
              </div>
            )}
          </div>

          {/* Careers Tab (No Dropdown) */}
          <Link className={liClasses} to="/web/careers" onClick={scrolltoTop}>
          {navbarData.careers}
          </Link>

          {/* Downloads Tab (No Dropdown) */}
          <Link className={liClasses} to="/web/downloads" onClick={scrolltoTop}>
          {navbarData.downloads}
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <div
          ref={sidebarRef} // Attach the ref here
          className="lg:hidden fixed top-0 right-0  h-full w-64 z-50"
        >
          <div className="flex flex-col space-y-4 py-4 px-4 bg-blue-700 ">
            <Link className="block text-white hover:text-gray-300 transition-all duration-75 ease-in-out hover:border-b-2 border-white" to="/web" onClick={() => {toggleSidebar(); scrolltoTop()}}>
            {navbarData.home}
            </Link>
            <div className="relative transition-all duration-75 ease-in-out hover:border-b-2 border-white">
              <button
                className="block text-white hover:text-gray-300"
                onClick={() => toggleDropdown('about')}
              
              >
                {navbarData.about}
              </button>
              {dropdown === 'about' && (
                <div className="bg-blue-600 text-white space-y-2 py-2 px-4">
                  <HashLink className="block py-2 hover:text-gray-300" to="/web/about" onClick={() => {toggleSidebar(); scrolltoTop()}}>
                  {navbarData.about_dropdown0}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" to="/web/about/#mission-vision-goal" onClick={toggleSidebar}>
                  {navbarData.about_dropdown1}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" to="/web/about/#bod" onClick={toggleSidebar}>
                  {navbarData.about_dropdown2}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" to="/web/about/#corporate-management" onClick={toggleSidebar}>
                  {navbarData.about_dropdown3}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" to="/web/about/#branches" onClick={toggleSidebar}>
                  {navbarData.about_dropdown4}
                  </HashLink>
                  
                </div>
              )}
            </div>

            <div className="relative transition-all duration-75 ease-in-out hover:border-b-2 border-white">
              <button
                className="block text-white hover:text-gray-300"
                onClick={() => toggleDropdown('products')}
              >
                {navbarData.products}
              </button>
              {dropdown === 'products' && (
                <div className="bg-blue-600 text-white space-y-2 py-2 px-4">
                  <HashLink className="block py-2 hover:text-gray-300" to="/web/products" onClick={() => {toggleSidebar(); scrolltoTop()}}>
                  {navbarData.products_dropdown1}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" to="/web/gold-loan" onClick={() => {toggleSidebar(); scrolltoTop()}}>
                  {navbarData.products_dropdown2}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" to="/web/fixed-deposit" onClick={() => {toggleSidebar(); scrolltoTop()}}>
                  {navbarData.products_dropdown3}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" to="/web/leasing" onClick={() => {toggleSidebar(); scrolltoTop()}}>
                  {navbarData.products_dropdown4}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" to="/web/mortgage" onClick={() => {toggleSidebar(); scrolltoTop()}}>
                  {navbarData.products_dropdown5}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" to="/web/foreign-exchange" onClick={() => {toggleSidebar(); scrolltoTop()}}>
                  {navbarData.products_dropdown6}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" to="/web/products/#luckewallet" onClick={toggleSidebar}>
                  {navbarData.products_dropdown7}
                  </HashLink>
                </div>
              )}
            </div>

            <div className="relative transition-all duration-75 ease-in-out hover:border-b-2 border-white">
              <button
                className="block text-white hover:text-gray-300"
                onClick={() => toggleDropdown('ir')}
              >
                {navbarData.investor_relations}
              </button>
              {dropdown === 'ir' && (
                <div className="bg-blue-600 text-white space-y-2 py-2 px-4">
                  <HashLink className="block py-2 hover:text-gray-300" to="/web/ir" onClick={() => {toggleSidebar(); scrolltoTop()}}>
                  {navbarData.investor_relations_dropdown1}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" to="/web/ir/#financial-keys" onClick={toggleSidebar}>
                  {navbarData.investor_relations_dropdown2}
                  </HashLink>
                </div>
              )}
            </div>

            <Link className="block text-white hover:text-gray-300 transition-all duration-75 ease-in-out hover:border-b-2 border-white" to="/web/careers" onClick={() => {toggleSidebar(); scrolltoTop()}}>
            {navbarData.careers}
            </Link>

            <Link className="block text-white hover:text-gray-300 transition-all duration-75 ease-in-out hover:border-b-2 border-white" to="/web/downloads" onClick={() => {toggleSidebar(); scrolltoTop()}}>
            {navbarData.downloads}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

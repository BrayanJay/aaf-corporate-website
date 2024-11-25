import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from 'react-router-dom';

const Footer = ({ theme = "dark" }) => {
  const { t } = useTranslation();
  const listItems = t("footerListItems", { returnObjects: true });
  const data = t("footerText", { returnObjects: true });

  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  // Effect to handle smooth scroll after language change
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const elementId = hash.substring(1); // Remove the '#' symbol
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [t.language]); // Runs when the language changes

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted email: ${email}`);
  };

  const handleNavigation = (link) => {
    // If the link is a full-page link (without a hash), scroll to the top of the page
    if (!link.includes('#')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate(link);  // Navigate to the full-page route
    }

    // If it's a component link (with a hash), smooth scroll to that element
    else {
      const elementId = link.split('#')[1];
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      navigate(link);  // Navigate to the route, allowing scrolling within the page
    }
  };

  return (
    <div
      className={`px-5 md:px-10 lg:px-20 py-10
      ${theme === "dark" ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-600"}`}
    >
      {/* Subscription Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-8 border-b">
        <div className="flex-1 text-center lg:text-left" data-aos="fade-up">
          <p className="pb-3 text-lg md:text-xl font-medium text-white/80">{data.subs_title1}</p>
          <h1 className="text-2xl md:text-4xl font-semibold text-white/80">
            {data.subs_title2} <br /> {data.subs_title3}!
          </h1>
        </div>
        <div className="flex-1" data-aos="fade-up">
          <p className="pb-3 text-center lg:text-left font-thin text-white/80">
            {data.subs_message}
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row w-full max-w-md mx-auto lg:mx-0"
          >
            <input
              type="email"
              name="email"
              id="email"
              className="flex-grow border border-slate-300 rounded-sm px-3 py-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm"
              placeholder={data.subs_field}
              value={email}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-white hover:bg-bluegradient text-blue-700 hover:text-white mt-3 sm:mt-0 sm:ml-2 px-4 py-2 rounded-sm font-semibold"
            >
              {data.subs_btn}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 py-10 border-b">
        {/* Left Section */}
        <div className="md:basis-1/4 text-center md:text-left">
          <img className="w-24 mx-auto md:mx-0" src={logo} alt="Logo" data-aos="fade-up"/>
          <p className="mt-4 mb-6 text-sm leading-relaxed text-gray-400" data-aos="fade-up" data-aos-delay="100">
            {data.intro}
          </p>
          <div className="flex flex-col gap-1 text-sm">
            <p data-aos="fade-up" data-aos-delay="200">{data.address}</p>
            <p data-aos="fade-up" data-aos-delay="300">+94 117 699000</p>
            <p data-aos="fade-up" data-aos-delay="400">info@asiaassetfinance.lk</p>
          </div>
          <div className="flex justify-center md:justify-start mt-4 gap-3 text-lg" data-aos="fade-up" data-aos-delay="500">
            {['facebook', 'instagram', 'linkedin', 'youtube'].map((icon, idx) => (
              <FontAwesomeIcon
                key={idx}
                icon={['fab', icon]}
                className="transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-6 md:gap-10 lg:gap-16" data-aos="fade-up" data-aos-delay="500">
          {listItems.map((item, idx) => (
            <div key={idx} className="w-full sm:w-auto">
              <h5 className="font-semibold mb-3 text-gray-300">{item.title}</h5>
              <ul className="flex flex-col gap-3">
                {item.list.map((listItem, listIdx) => (
                  <li key={listIdx} className="transition-all duration-300 ease-in-out hover:text-white cursor-pointer">
                    <span onClick={() => handleNavigation(item.links[listIdx])}>
                      {listItem}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className={`py-5 text-center text-gray-500 text-xs
        ${theme === "dark" ? "border-t-gray-800" : "border-t-gray-300"}`}
      >
        2024 &copy; Copyright <span className="font-black">Asia Asset Finance PLC</span>. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;

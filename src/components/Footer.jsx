import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const data = [
  { title: "About", list: ["Overview", "Board of Directors", "Corporate Management", "Branch Network"] },
  { title: "Products", list: ["Gold Loans", "Fixed Deposits", "Leasing", "Mortgage", "Foreign Exchange ", "E - Savings"] },
  { title: "Investor Relations", list: ["Corporate Profile", "Annual Reports", "Credit Ratings", "Other financial information - CSE"] },
  { title: "Careers", list: ["Careers", "Internships"] },
];

const Footer = ({ theme = "dark" }) => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted email: ${email}`);
  };

  return (
    <div
      className={`px-5 md:px-10 lg:px-20 py-10
      ${theme === "dark" ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-600"}`}
    >
      {/* Subscription Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-8 border-b">
        <div className="flex-1 text-center lg:text-left" data-aos="fade-up">
          <p className="pb-3 text-lg md:text-xl font-medium text-white/80">Bringing Financial Solutions Closer to You</p>
          <h1 className="text-2xl md:text-4xl font-semibold text-white/80">
            Subscribe & Get Latest Updates <br /> From Us!
          </h1>
        </div>
        <div className="flex-1">
          <p className="pb-3 text-center lg:text-left font-thin text-white/80">
            Subscribe to receive our offers and updates directly in your inbox.
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
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-white hover:bg-bluegradient text-blue-700 hover:text-white mt-3 sm:mt-0 sm:ml-2 px-4 py-2 rounded-sm font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 py-10 border-b">
        {/* Left Section */}
        <div className="md:basis-1/4 text-center md:text-left">
          <img className="w-24 mx-auto md:mx-0" src={logo} alt="Logo" />
          <p className="mt-4 mb-6 text-sm leading-relaxed text-gray-400">
            Asia Asset Finance PLC, incorporated on 25th November 1981, is rated ICRA A+ Stable Outlook and is licensed
            by the Monetary Board of the Central Bank of Sri Lanka.
          </p>
          <div className="flex flex-col gap-1 text-sm">
            <p>No: 76, Park Street, Colombo 02, Sri Lanka</p>
            <p>+94 117 699000</p>
            <p>info@asiaassetfinance.lk</p>
          </div>
          <div className="flex justify-center md:justify-start mt-4 gap-3 text-lg">
            {['facebook', 'linkedin', 'instagram', 'youtube', 'twitter'].map((icon, idx) => (
              <FontAwesomeIcon
                key={idx}
                icon={['fab', icon]}
                className="transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-6 md:gap-10 lg:gap-16">
          {data.map(({ title, list }, idx) => (
            <div key={idx} className="w-full sm:w-auto">
              <h5 className="font-semibold mb-3 text-gray-300">{title}</h5>
              <ul className="flex flex-col gap-3">
                {list.map((item, idx) => (
                  <li
                    key={idx}
                    className="transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
                  >
                    {item}
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

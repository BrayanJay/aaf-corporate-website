import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const data = [
  { title: "About", list: ["Overview", "Board of Directors", "Corporate Management", "Branch Network"] },
  { title: "Products", list: ["Gold Loans", "Fixed Deposits", "Leasing", "Mortgage", "Foreign Exchange ", "E - Savings"] },
  { title: "Investor Relations", list: ["Corporate Profile", "Annual Reports", "Credit Ratings", "Other financial information - CSE"] },
  { title: "Careers", list: ["Careers", "Internships",] },
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
    <>
        
      <div
        className={` px-20 pt-10 md:pt-10 text-xs sm:text-sm
      ${theme === "dark" ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-600"}
      `}
      >
        <div className="flex pt-3 pb-10 mb-10 border-5 border">
        <div className='pl-10 basis-1/2 ' data-aos="fade-up">
                <p className='pb-3 text-xl font-md text-white/80'>Bringing Financial Solutions Closer to You</p>
                <h1 className='text-4xl font-semibold text-white/80'> Subscribe & Get Latest Updates <br/> From Us!</h1>
                
        </div>

        <div className="basis-1/2 pr-10 items-center justify-end inset-0">
        <p className='pb-1 font-thin text-white/80'>Subscribe Us & receive our offers and updates in your inbox directly.</p>
      <form onSubmit={handleSubmit} className="flex w-full max-w-md">
        <input
          type="email"
          name="email"
          id="email"
          className="flex-grow border border-slate-300 rounded-sm px-3 py-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-white hover:bg-bluegradient text-blue-700 hover:text-white ml-2 px-4 py-2 rounded-sm font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
            </div>
        <div className="flex flex-col md:flex-row gap-8 sm:gap-20 pt-5 pb-5 border-t border-b">
          <div className="basis-1/4">
            <div className='w-40'>
              <img src={logo}/>
            </div>

            <div className="mb-2 md:mb-6">
              Asia Asset Finance PLC, incorporated on 25th November 1981, is rated ICRA A+ Stable Outlook and is licensed by the Monetary Board of the Central Bank of Sri Lanka.
            </div>

            <div className='flex flex-col mb-2 md:mb-6 gap-1'>
                  <p className='text-sm font-md text-justify'>No: 76, Park Street, Colombo 02, Sri Lanka</p>
                  <p className='text-sm font-md text-justify'>+94 117 699000</p>
                  <p className='text-sm font-md text-justify'>info@asiaassetfinance.lk</p>
            </div>

            <div className="flex gap-3 text-sm sm:text-lg">
            <FontAwesomeIcon 
              icon={['fab', 'facebook']} 
              className='transition-all duration-300 ease-in-out hover:text-white hover:cursor-pointer' 
              size='md' 
            />
            <FontAwesomeIcon 
              icon={['fab', 'linkedin']} 
              className='transition-all duration-300 ease-in-out hover:text-white hover:cursor-pointer' 
              size='md' 
            />
            <FontAwesomeIcon 
              icon={['fab', 'instagram']} 
              className='transition-all duration-300 ease-in-out hover:text-white hover:cursor-pointer' 
              size='md' 
            />
            <FontAwesomeIcon 
              icon={['fab', 'youtube']} 
              className='transition-all duration-300 ease-in-out hover:text-white hover:cursor-pointer' 
              size='md' 
            />
            <FontAwesomeIcon 
              icon={['fab', 'linkedin']} 
              className='transition-all duration-300 ease-in-out hover:text-white hover:cursor-pointer' 
              size='md' 
            />
            <FontAwesomeIcon 
              icon={['fab', 'x-twitter']} 
              className='transition-all duration-300 ease-in-out hover:text-white hover:cursor-pointer' 
              size='md' 
            />
              
            </div>
          </div>

          <div className="flex flex-row gap-6 md:gap-12 flex-wrap sm:flex-nowrap">
            {data.map(({ title, list }, idx) => (
              <div key={idx}>
                <h5
                  className={`font-semibold mb-2 sm:mb-8
                  ${theme === "dark" ? "text-gray-300" : "text-gray-900"} `}
                >
                  {title}
                </h5>
                <ul className="flex flex-col gap-3 sm:gap-5">
                  {list.map((item, idx) => (
                    <li 
                    className='transition-all duration-300 ease-in-out hover:text-white hover:cursor-pointer transform hover:translate-x-1'
                    key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
            
        <div
          className={`py-10 text-gray-500 text-xs text-center
          ${theme === "dark" ? "border-t-gray-800" : "border-t-gray-300"} `}
        >
          2024 &copy; Copyright <span className='font-black'>Asia Asset Finance PLC</span>. All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;

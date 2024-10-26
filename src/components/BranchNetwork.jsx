import React from 'react';
import Map from '../assets/map.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BranchNetwork = () => {
  return (
    <div className='flex flex-row mx-20'>
      <div className='basis-1/2'>
        <img src={Map} alt="Branch Map" />
      </div>
      <div className='flex justify-center basis-1/2 p-10'>
        <div className='bg-goldgradient rounded-tl-3xl rounded-br-3xl p-5'>
          <div className='text-white font-black text-2xl pr-5 border-r-4 border-white text-right'>
            <span className='text-4xl pr-2'>“</span>Find Your Nearest Branch
          </div>
          <div className='text-white font-normal text-sm pr-5 border-r-4 border-white text-right italic'>
            Enter or Pin Your Location
          </div>

          <div className="mb-3 xl:w-96 pt-5">
            <div className="relative mb-4 flex w-full"> {/* Removed items-center for full width */}
              <input
                type="search"
                className="flex-grow block rounded-full border border-solid border-white bg-transparent px-3 py-2 pr-10 text-base font-normal text-white outline-none transition duration-200 ease-in-out focus:border-primary focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] dark:border-white dark:text-white dark:placeholder:text-white dark:focus:border-primary"
                placeholder="Your Location"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              {/* Search Icon inside the input */}
              <FontAwesomeIcon
                icon={['fas', 'search']}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
                size="lg"
              />
                {/* TO BE IMPLEMENT THE BRANCH SUGGESIONS AND MAP LOCATOR - BACKEND */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BranchNetwork;

// src/components/BranchNetwork.jsx
import React, { useState } from 'react';
//import branchesData from '../contents/BranchesData'
import { useTranslation } from 'react-i18next';

const BranchNetwork = () => {
  const { t } = useTranslation();
  const data = t("branchNetworktext", { returnObjects: true });
  const branchesData = t("branchesData", { returnObjects: true });

  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Combine all branches into a single array for the "All" tab
  const allBranches = Object.values(branchesData).flatMap(region => region.branches);

  // Filter branches based on search query (left to right, word-by-word)
  const filterBranches = (branches) => {
    return branches.filter((branch) =>
      branch.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  };

  // Filtered branches for the selected region or "All"
  const filteredBranches = selectedRegion === 'all'
    ? filterBranches(allBranches)
    : filterBranches(branchesData[selectedRegion]?.branches || []);

  // Function to handle region tab click
  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  return (
    <div className="px-10 lg:px-20">
      {/* Header Section */}
      <div className="flex flex-col relative justify-center items-start py-10">
          <div className="border-l-4 lg:border-l-8 border-blue-900 text-blue-700 text-xl md:text-2xl lg:text-4xl font-semibold pl-2 lg:pl-4" data-aos="fade-up">
            {data.title1} <span className='font-bold text-blue-900'>{data.title2}</span>
            </div>
            <div className='border-l-4 lg:border-l-8 border-blue-900 pl-2 lg:pl-4 pt-1 text-sm lg:text-xl font-medium text-blue-500 italic' data-aos="fade-up">{data.subtitle}</div>
            <div className='py-5 text-xs lg:text-sm font-normal text-black/50 text-justify' data-aos="fade-in" data-aos-delay="500">{data.description1} <span className='font-bold text-blue-500 hover:text-blue-700'>{data.description2}</span> {data.description3} <span className='font-bold text-blue-500 hover:text-blue-700'>{data.description4}</span> {data.description5}</div>
        </div>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center items-center gap-2 lg:gap-5" data-aos="fade-up">
        <div className='text-center text-xs md:text-sm lg:text-lg font-semibold text-blue-700 '>{data.label} </div>
        <input
          type="text"
          placeholder={data.field}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-blue-300 rounded-lg w-full sm:w-1/2"
        />
      </div>

      {/* Tab Bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button
          onClick={() => setSelectedRegion('all')}
          className={`py-2 px-4 rounded-lg ${
            selectedRegion === 'all' ? 'bg-bluegradient text-white' : 'bg-gray-200'
          }`}
        >
          {data.all_tab}
        </button>
        {Object.keys(branchesData).map((region) => (
          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`py-2 px-4 rounded-lg ${
              selectedRegion === region ? 'bg-bluegradient text-white' : 'bg-gray-200'
            }`}
          >
            {branchesData[region].title}
          </button>
        ))}
      </div>

      {/* Branch Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
        {filteredBranches.length > 0 ? (
          filteredBranches.map((branch, index) => (
            <div key={index} className="flex flex-col p-4 bg-white shadow-lg rounded-lg justify-center items-center">
              <img
                src={branch.image}
                alt={branch.name}
                className="max-w-16 lg:max-w-24 w-fit h-fit object-cover"
              />
              <h3 className="text-base lg:text-lg font-bold mt-2 text-center">{branch.name}</h3>
              <p className='text-xs lg:text-sm text-center'>{branch.location}</p>
              <p className='text-xs lg:text-sm text-center'>{branch.contact}</p>
            </div>
          ))
        ) : (
          <p className=''>No branches found!</p>
        )}
      </div>
    </div>
  );
};


export default BranchNetwork;

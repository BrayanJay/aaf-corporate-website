// src/components/BranchNetwork.jsx
import React, { useState } from 'react';
import branchSample from '../assets/branches/branch.svg'

const branchesData = {
  western: {
    title: "Western Region",
    branches: [
      { name: "Colombo 1", location: "Colombo", contact: "+94 123 456 789", image: branchSample },
      { name: "Colombo 2", location: "Colombo", contact: "+94 234 567 890", image: branchSample },
      { name: "Gampaha", location: "Gampaha", contact: "+94 345 678 901", image: branchSample },
    ]
  },
  eastern: {
    title: "Eastern Region",
    branches: [
      { name: "Trincomalee", location: "Trincomalee", contact: "+94 456 789 012", image: branchSample },
      { name: "Batticaloa", location: "Batticaloa", contact: "+94 567 890 123", image: branchSample },
    ]
  },
  southern: {
    title: "Southern Region",
    branches: [
      { name: "Galle", location: "Galle", contact: "+94 678 901 234", image: branchSample },
      { name: "Matara", location: "Matara", contact: "+94 789 012 345", image: branchSample },
    ]
  },
  northern: {
    title: "Northern Region",
    branches: [
      { name: "Jaffna", location: "Jaffna", contact: "+94 890 123 456", image: branchSample },
      { name: "Vavuniya", location: "Vavuniya", contact: "+94 901 234 567", image: branchSample },
    ]
  },
  central: {
    title: "Central Region",
    branches: [
      { name: "Kandy", location: "Kandy", contact: "+94 123 456 000", image: branchSample },
      { name: "Nuwara Eliya", location: "Nuwara Eliya", contact: "+94 234 567 111", image: branchSample },
    ]
  }
};

const BranchNetwork = () => {
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
      <div className="flex flex-col relative justify-center items-start py-10">
          <div className="border-l-4 lg:border-l-8 border-blue-900 text-blue-700 text-xl md:text-2xl lg:text-4xl font-light pl-2 lg:pl-4" data-aos="fade-up">
            Our <span className='font-bold text-blue-900'>Branch Network</span>
            </div>
            <div className='border-l-4 lg:border-l-8 border-blue-900 pl-2 lg:pl-4 pt-1 text-sm lg:text-xl font-md text-blue-500 italic' data-aos="fade-up">Bringing Financial Solutions Closer to You</div>
            <div className='py-5 text-xs lg:text-sm font-normal text-black/50 text-justify' data-aos="fade-in" data-aos-delay="500">Visit one of our <span className='font-bold text-blue-500 hover:text-blue-700'>100+ branches</span> today and experience the personalized service that <span className='font-bold text-blue-500 hover:text-blue-700'>Asia Asset Finance PLC</span> is known for. We're here to support your financial journey, no matter where you are in Sri Lanka</div>
        </div>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center items-center gap-2 lg:gap-5" data-aos="fade-up">
        <div className='text-center text-xs md:text-sm lg:text-lg font-semibold text-blue-700 '>Search Your Nearest Branch: </div>
        <input
          type="text"
          placeholder="Search Branch..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-blue-300 rounded-lg w-full sm:w-1/2"
        />
      </div>

      {/* Tabs for selecting regions */}
      <div className="flex justify-center mb-6 space-x-1 lg:space-x-4" data-aos="fade-in" data-aos-delay="500">
        {/* "All" Tab */}
        <button
          onClick={() => handleRegionClick('all')}
          className={`px-3 lg:px-6 py-1 lg:py-2 text-xs md:text-sm lg:text-lg rounded-lg font-medium ${selectedRegion === 'all' ? 'bg-goldgradient text-white' : 'bg-amber-100 text-blue-900'} hover:bg-amber-300 hover:text-white transition`}
        >
          All
        </button>

        {/* Region Tabs */}
        {Object.keys(branchesData).map((region) => (
          <button
            key={region}
            onClick={() => handleRegionClick(region)}
            className={`px-2 lg:px-6 py-1 lg:py-2 text-xs md:text-sm lg:text-lg rounded-lg font-medium ${selectedRegion === region ? 'bg-goldgradient text-white' : 'bg-transparent border-2 border-amber-400 text-amber-600'} hover:bg-amber-300 hover:text-white transition`}
          >
            {branchesData[region].title} {/* Display title for the region */}
          </button>
        ))}
      </div>

      {/* Display branches for the selected region or "All", filtered by search */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10" data-aos="fade-up" data-aos-delay="500">
        {filteredBranches.length > 0 ? (
          filteredBranches.map((branch, index) => (
            <div key={index} className="bg-blue-50 hover:bg-blue-100 p-3 lg:p-6 rounded-tr-2xl rounded-bl-2xl shadow-lg">
              <img
                src={branch.image}
                alt={branch.name}
                className="w-full h-24 lg:h-48 object-cover rounded-lg mb-4"
                
              />
              <h3 className="text-sm md:text-base lg:text-xl font-semibold text-blue-700">{branch.name}</h3>
              <p className="text-xs md:text-sm lg:text-lg mt-2 text-black/40">Location: {branch.location}</p>
              <p className="text-xs md:text-sm lg:text-lg mt-2 text-black/40">Contact: {branch.contact}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-base lg:text-xl font-semibold text-red">No branches found for your search criteria!</p>
        )}
      </div>
    </div>
  );
};

export default BranchNetwork;

// src/components/BranchNetwork.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
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

  return (
    <div id='main-container' className="px-10 lg:px-20">
      {/* Header Section */}
      <div className="flex flex-col relative justify-center items-start py-10">
          <h1 className="border-l-4 lg:border-l-8 border-blue-900 text-blue-700 text-xl md:text-2xl lg:text-4xl font-semibold pl-2 lg:pl-4" data-aos="fade-up">
            {data.title1} <span className='font-bold text-blue-900'>{data.title2}</span>
            </h1>
            <h2 className='border-l-4 lg:border-l-8 border-blue-900 pl-2 lg:pl-4 pt-1 text-sm lg:text-xl font-medium text-blue-500 italic' data-aos="fade-up">{data.subtitle}</h2>
            <div className='py-5 text-xs lg:text-sm font-normal text-black/50 text-justify' data-aos="fade-in" data-aos-delay="500">{data.description1} <span className='font-bold text-blue-500 hover:text-blue-700'>{data.description2}</span> {data.description3} <span className='font-bold text-blue-500 hover:text-blue-700'>{data.description4}</span> {data.description5}</div>
        </div>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center items-center gap-2 lg:gap-5" data-aos="fade-up" aria-label='Search nearest branch'>
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
      <div className="flex flex-wrap justify-center gap-2 mb-6" data-aos="fade-up">
        <button
          onClick={() => setSelectedRegion('all')}
          className={`py-2 px-4 rounded-lg ${
            selectedRegion === 'all' ? 'bg-bluegradient text-white' : 'bg-gray-200'
          }`}
          aria-label='All Branches Tab'
        >
          {data.all_tab}
        </button>

        {/* Dynamically create regional Tabs */}
        {Object.keys(branchesData).map((region) => (
          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`py-2 px-4 rounded-lg ${
              selectedRegion === region ? 'bg-bluegradient text-white' : 'bg-gray-200'
            }`}
            aria-label={region}
          >
            {branchesData[region].title}
          </button>
        ))}
      </div>

      {/* Branch Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10" data-aos="fade-up">
        {/* Dynamically create cards per  each branch */}
        {filteredBranches.length > 0 ? (
          filteredBranches.map((branch, index) => (
            <div key={index} className="flex flex-col p-4 bg-white shadow-lg rounded-lg justify-center items-center">
              <img
                src={branch.image}
                alt={branch.name}
                className="max-w-16 lg:max-w-24 max-h-16 lg:max-h-24 w-fit h-fit object-cover"
                aria-label={branch.name}
              />
              <div className="text-blue-900 text-base lg:text-lg font-bold mt-2 text-center">{branch.name}</div>
              <div className='text-black/60 flex items-center text-xs lg:text-sm text-center gap-2'><FontAwesomeIcon icon={['fas', 'location-dot']} className="text-xs" aria-label={branch.location}/> {branch.location}</div>
              <a href={`tel:+94${branch.contact.replace(/\s/g, '').replace(/^0/, '')}`}>
                <div className='text-black/60 flex items-center text-xs lg:text-sm text-center hover:text-blue-500 transition-all duration-300 ease-in-out gap-2'><FontAwesomeIcon icon={['fas', 'phone']} className="text-xs" aria-label={branch.contact} /> {branch.contact}</div>
              </a>
            </div>
          ))
        ) : (
          <div className='flex flex-row justify-center text-xl font-semibold text-center text-rose-800' aria-label="No branches found!">No branches found!</div>
        )}
      </div>
    </div>
  );
};


export default BranchNetwork;

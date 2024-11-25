import React from 'react'
import PropTypes from 'prop-types'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';



const JobCard = ({Department, SubDepartment, Designation, Location, Type}) => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col'>
        <h1 className='justify-start lg:text-3xl text-xl lg:pl-20 pl-10 flex pt-5 text-sky-700 font-bold'>{Department}</h1>
    <div className='lg:ml-20 lg:mr-20 ml-10 mr-10 p-2 mt-10 mb-10 rounded-xl h-40 w-auto bg-whit shadow-2xl'>
    <h2 className='flex justify-start lg:text-2xl md:text-xl text-sm pl-10 pt-5 text-gray-600 font-bold'>{Designation} - {SubDepartment}</h2>
    <div className='flex flex-row items-center pl-10 pt-5 text-gray-400 font-semibold lg:gap-10 gap-5'>
         <div className='flex'><FontAwesomeIcon icon={['fas', 'suitcase']} className="lg:text-sm md:text-sm text-xs text-gray-400 mt-1 " /><p className='ml-3 lg:text-sm md:text-sm text-xs'>{SubDepartment}</p></div>
         <div className='flex'><FontAwesomeIcon icon={['fas', 'location-dot']} className="lg:text-sm md:text-sm text-xs text-gray-400 mt-1 " /><p className='ml-3 lg:text-sm md:text-sm text-xs'>{Location}</p></div>
         <div className='flex'><FontAwesomeIcon icon={['fas', 'computer']} className="lg:text-sm md:text-sm text-xs text-gray-400 mt-1 " /><p className='ml-3 lg:text-sm md:text-sm text-xs'>{Type}</p></div>
         <div className='flex flex-grow justify-end'>
        <Button onClick={() => navigate(`/careers/job-description`)} className='bg-transparent justify-center lg:mr-20 mr-10 p-2 text-blue-500 hover:text-blue-700 lg:text-sm text-xs'>View Details <FontAwesomeIcon icon={['fas', 'arrow-right']} className="lg:text-sm text-xs ml-2" /></Button>
    </div>
         </div>
    
    
    </div>
    </div>
  )
}

JobCard.propTypes = {
  Department: PropTypes.string.isRequired,
  SubDepartment: PropTypes.string.isRequired,
  Designation: PropTypes.string.isRequired,
  Location: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
}

export default JobCard

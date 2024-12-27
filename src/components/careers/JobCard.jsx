import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const scrolltoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="flex flex-col">
      <h1 className="justify-start lg:text-3xl text-xl lg:pl-20 pl-10 flex pt-5 text-sky-700 font-bold">
        {job.department}
      </h1>
      <div className="lg:ml-20 lg:mr-20 ml-10 mr-10 p-2 mt-10 mb-10 rounded-xl h-40 w-auto bg-white shadow-2xl">
        <h2 className="flex justify-start lg:text-2xl md:text-xl text-sm pl-10 pt-5 text-gray-600 font-bold">
          {job.designation}
        </h2>
        <div className="flex flex-row items-center pl-10 pt-5 text-gray-400 font-semibold lg:gap-10 gap-5">
          <div className="flex">
            <FontAwesomeIcon icon={['fas', 'suitcase']} className="lg:text-sm md:text-sm text-xs text-gray-400 mt-1" />
            <p className="ml-3 lg:text-sm md:text-sm text-xs">{job.department}</p>
          </div>
          <div className="flex">
            <FontAwesomeIcon icon={['fas', 'location-dot']} className="lg:text-sm md:text-sm text-xs text-gray-400 mt-1" />
            <p className="ml-3 lg:text-sm md:text-sm text-xs">{job.location}</p>
          </div>
          <div className="flex">
            <FontAwesomeIcon icon={['fas', 'computer']} className="lg:text-sm md:text-sm text-xs text-gray-400 mt-1" />
            <p className="ml-3 lg:text-sm md:text-sm text-xs">{job.type}</p>
          </div>
          <div className="flex flex-grow justify-end">
            <div
              onClick={() => {navigate(`/web/careers/job-description/${job.id}`); scrolltoTop();}}
              className="bg-lightbluegradient hover:bg-darkbluegradient transition-all duration-500 ease-in-out rounded-tl-xl rounded-br-xl justify-center lg:mr-20 mr-10 py-2 px-3 text-white/80 hover:text-white lg:text-sm text-xs cursor-pointer shadow-lg"
            >
              View
              <FontAwesomeIcon icon={['fas', 'arrow-right']} className="lg:text-sm text-xs ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    subDepartment: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCard;

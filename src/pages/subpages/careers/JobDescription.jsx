// JobDescription.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useParams } from 'react-router-dom';
import JobData from '../../../contents/JobData';

const JobDescription = () => {
  const navigate = useNavigate();
  const { jobId } = useParams(); // Extract jobId from route params

  // Retrieve the job details using jobId
  const job = JobData.find((job) => job.id === jobId) || {};
  const scrolltoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="flex flex-col">
      <h1 className="justify-start lg:text-3xl text-2xl lg:pl-20 pl-10 flex pt-5 text-sky-700 font-bold">
        {job.department || 'Job Department'}
      </h1>
      <div className="lg:ml-20 lg:mr-20 ml-10 mr-10 p-2 mt-10 mb-10 rounded-xl h-auto w-auto bg-white shadow-2xl">
        <h2 className="flex justify-start lg:text-3xl md:text-2xl text-lg pl-10 pt-5 text-gray-600 font-bold">
          {job.designation || 'Job Designation'}
        </h2>
        <div className="flex flex-col pl-10 pr-10 pt-5 pb-10 text-gray-400 font-semibold lg:gap-5 gap-5">
          <div className="flex justify-start h-10 w-48 px-5 py-2.5 bg-blue-500 rounded-lg text-white ease-in-out">
            <span className="flex flex-col justify-center items-center font-bold">Key Responsibilities</span>
          </div>
          {job.responsibilities?.map((resp, index) => (
            <div key={index} className="flex">
              <FontAwesomeIcon
                icon={['fas', 'caret-right']}
                className="lg:text-sm md:text-sm text-xs text-gray-400 mt-1"
              />
              <p className="ml-3 lg:text-sm md:text-sm text-xs">{resp}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col pl-10 pr-10 pt-5 pb-10 text-gray-400 font-semibold lg:gap-5 gap-5">
          <div className="flex justify-start h-10 w-48 px-5 py-2.5 bg-blue-500 rounded-lg text-white ease-in-out">
            <span className="flex flex-col justify-center items-center font-bold">Job Requirements</span>
          </div>
          {job.requirements?.map((req, index) => (
            <div key={index} className="flex">
              <FontAwesomeIcon
                icon={['fas', 'caret-right']}
                className="lg:text-sm md:text-sm text-xs text-gray-400 mt-1"
              />
              <p className="ml-3 lg:text-sm md:text-sm text-xs">{req}</p>
            </div>
          ))}
        </div>

        <div className='flex flex-col text-blue-950/75 font-bold pl-10 pr-10 pb-10 gap-5'>
        <span className='md:text-md text-sm'>The incumbent will be offered a very attractive remuneration package coupled with allowances, on-the-job training, local and foreign off the job training and career guidance with facilities to pursue further studies for career advancement in a fastgrowing company.</span>
      </div>

      <div className="ml-10 mb-10 mr-10 h-10 px-10 py-2.5 bg-amber-400 rounded-lg justify-center items-center inline-flex">
    <div className=" text-white lg:text-lg text-xs font-bold">Asia Asset Finance PLC is an Equal Opportunity Provider</div>
</div>

        <div
          onClick={() => {navigate('/careers/application-form'); scrolltoTop();}}
          className="h-auto px-10 ml-10 mr-10 mb-10 py-2 bg-[#14326b] hover:bg-blue-700 transition-colors duration-500 ease-in-out rounded-2xl justify-center items-center gap-2.5 hover:cursor-pointer"
        >
          <div className="text-white text-lg font-bold text-center">Apply Now</div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;

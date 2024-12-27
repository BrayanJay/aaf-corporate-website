import JobCard from '../careers/JobCard'
import JobData from '../../contents/JobData';

const Vacancies = () => {

    return(
    <div className=''>
        {JobData.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
    </div>
  )
}

export default Vacancies

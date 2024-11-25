import React from 'react'
import JobCard from '../careers/JobCard'
import { useNavigate } from 'react-router-dom';

function Vacancies(){

    return(
    <div id='1' className=''>
        <JobCard
          Department="Finance Department"
          SubDepartment="Fixed Deposits"
          Designation="Senior Manager"
          Location="Head Office"
          Type="Full Time"
        />
    </div>
  )
}

export default Vacancies

import React from 'react'
import Carousel from '../components/Carousel'
import banner1 from '../assets/products/fd.svg'
import Description from '../components/Description';
import fdUpload from '../assets/uploads/fd11112024.webp'

const image = {
  src: banner1,
  title: "Fixed Deposits",
};

const AboutOverview = {
  title: "Overview",
  description: "For over 50 years we of Asia Asset Finance PLC have invested our interests in countless individuals and business. Be it in the Gold loans we provide for the most reasonable rates, leasing, mortgage loans, Group Personal loans, Personal Loans, Business Loans, Corporate Loans, Micro Loans or accepting your public deposits we are proud to have nurtured communities to be sustainable economies. Asia Asset Finance PLC is a fully owned subsidiary of Muthoot Finance Ltd and a fully licensed, deposit-taking institution registered with the Central Bank of Sri Lanka. Society’s financial needs are ever growing and Asia Asset grew over the years, in a simple quest to cater to these needs. Our efforts have always been to aid our customers to achieve growth in the way they live and in the way they do business. The story of Asia Asset Finance PLC is one of “Empowering People and Transforming Lives”."
};

const ProductInfo = () => {
  return (
    <div>
      <Carousel image={image}/>
      <Description description={AboutOverview.description} />
      <div className='flex justify-center p-10 bg-white'>
          <img className='p-10' src={fdUpload}/>
      </div>
    </div>
  )
}

export default ProductInfo

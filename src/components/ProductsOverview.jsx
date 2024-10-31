import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

// import images - product overview
import FixedDeposits from '../assets/productsoverview/fd.jpg';
//import GoldLoan from '';
//import Leasing from '';
//import Mortgage from '';
//import ForeignExchange from '';
//import ESaving from '';

// Product data
const products = [
  { title: "Fixed Deposits", image: FixedDeposits, description: "Secure your savings with fixed returns." },
  { title: "Gold Loan", image: "image2.jpg", description: "Grow your wealth with flexible savings." },
  { title: "Mortgage", image: "image3.jpg", description: "Affordable loans for your every need." },
  { title: "Leasing", image: "image4.jpg", description: "Convenient spending with low-interest rates." },
  { title: "Saving", image: "image5.jpg", description: "Comprehensive protection for peace of mind." },
  { title: "Foreign Exchange", image: "image6.jpg", description: "Maximize your returns with diverse options." },
];
const ProductsOverview = () => {
  const [setSwiperRef] = useState(null);
  return (
    <div>
        <div className='w-full h-full relative px-10 lg:px-40 gap-2 pt-10'>

            <div className='relative ' data-aos="fade-up">
                <h1 className='border-r-8 border-blue-500 pl-5 pr-5 text-xl md:text-2xl lg:text-4xl font-black text-blue-900 text-right'> Discover Our Financial Products </h1>
                <p className='border-r-8 border-blue-500 pl-5 pr-5 pt-1 text-sm lg:text-xl font-medium text-blue-800 text-right'>Comprehensive Solutions for Secure Financial Growth</p>
                <p className='pb-5 pt-5 text-xs lg:text-sm font-medium lg:font-semibold text-black/50 text-justify'>At Asia Asset Finance, we provide a diverse range of financial products tailored to meet your unique needs. Whether you're looking to grow your savings, secure a loan, or explore investment opportunities, our offerings are designed with your financial well-being in mind. Choose from our secure Fixed Deposits, flexible Gold Loans, and supportive Micro Mortgage Loans to find the right fit for you. With our innovative E-Saving accounts, competitive Foreign Exchange services, and convenient Leasing options, we ensure that every aspect of your financial journey is covered. Trust us to deliver reliable, personalized solutions that empower your financial success.</p>
            </div>

            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={4}
              centeredSlides={false}
              spaceBetween={50}
              pagination={{
                type: 'fraction',
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {products.map((product, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="relative h-44 lg:h-64 bg-cover bg-center transition-all duration-300"
                      style={{ backgroundImage: `url(${product.image})` }}
                    >
                      {/* Title */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-lg md:text-xl lg:text-3xl font-semibold lg:font-black uppercase transition-all duration-300 hover:top-1/2">
                        {product.title}
                      </div>

                      {/* Description (hidden until hover) */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-sm md:text-xl mt-6 p-4 bg-black bg-opacity-60 rounded-md">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>

        </div>
    </div>
    
  )
}

export default ProductsOverview

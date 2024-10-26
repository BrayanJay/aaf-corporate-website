import React from 'react'
import Carousel from '../components/Carousel';
import banner1 from '../assets/bannerimg1.svg';
import ProductSelector from '../components/ProductSelector';
import ProductLuckewallet from '../components/ProductLuckewallet';

const image = {
  src: banner1,
  title: "About us",
  intro: "Empowering Your Financial Future ",
  specialnote: "since 1981",
  description: "“ Empowering People and Transforming Lives “",
};

const ProductsAndServicesPage = () => {


  return (
    <div className='container mx-auto'>
      <Carousel image={image}/>
      <ProductSelector/>
      <ProductLuckewallet/>
    </div>
  )
}

export default ProductsAndServicesPage

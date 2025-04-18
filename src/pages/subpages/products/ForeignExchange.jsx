import Carousel from '../../../components/Carousel'
import banner from '../../../media/products/fePgBanner.webp'
import Description from '../../../components/Description';
//import fdUpload from '../../../media/uploads/fe13112024.webp'
import { useTranslation } from "react-i18next";

import muthoot from '../../../media/products/forex/muthoot_global.png'
import moneygram from '../../../media/products/forex/moneygram.png'
import w_union from '../../../media/products/forex/western_union.png'
import ria from '../../../media/products/forex/ria.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import axios from 'axios';

const logos = [moneygram, w_union, muthoot, ria]

const ForeignExchange = () => {
  const { i18n } = useTranslation();
  //const { product_name } = useParams(); // Get product from URL params
    const [data, setData] = useState(null);
  //const data = t("forexPage", { returnObjects: true });
  
  useEffect(() => {
    const fetchProductData = async () => {
      let product_name = "forex";
      try {
        const response = await axios.get(
          `http://localhost:3000/data/product/${product_name}/${i18n.language}`
        );
        setData(response.data[0]);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [i18n.language]); // Re-fetch on language or product change

  if (!data) return <p>Loading...</p>;

const image = {
  src: banner,
  title: data.title,
};
  return (
    <div id='main-container'>
      {/* G Tagging sources */}
      <Helmet>
        <title>Foreign Exchange – Competitive Rates</title>
        <meta name="description" content="Exchange currencies quickly and securely. Benefit from transparent rates and professional advice." />
        <meta name="keywords" content="Foreign Exchange Sri Lanka"></meta>
        <link rel="canonical" href="https://www.asiaassetfinance.com/foreign-exchange" />
      </Helmet>

      {/* Page Carousel */}
      <Carousel image={image}/>

      {/* Body Section */}
      <div className='py-10'>
      <Description description={data.description} />
      </div>
      <div className='flex justify-center gap-5 bg-white'>
      <Link to="/downloads/customer-information"><div className='px-3 py-1.5 border-2 border-blue-500 text-xs sm:text-base text-blue-500 hover:text-white text-center hover:bg-bluegradient transition-colors ease-in-out duration-200 font-medium cursor-pointer rounded-xl items-center justify-center' aria-label={data.btn_1}>{data.btn_1}</div></Link>
      </div>
      <div className='flex justify-center p-10 bg-white'>
          {/*<img className='p-10' src={fdUpload}/>*/}
      </div>

      <div className='px-20 py-5 text-center'>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-blue-900'>
                {data.our_partners_title}
                </h1>
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {logos.map((Logo, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <img src={Logo} alt={`Logo ${index + 1}`} className="max-w-36" />
                    </div>
                    ))}
                    </div>
                </div>
                
        </div>

      <a href='tel://+94763280901' aria-label="Click Here to Dial">
      <div className="max-w-xs mx-auto bg-amber-300 hover:bg-amber-400 transition-colors duration-300 ease-in-out shadow-lg rounded-lg py-2 px-4 text-center mb-10">
      <h2 className="text-lg font-bold text-blue-700">{data.hotline}</h2>
      <p className="mt-1 text-2xl font-semibold text-gray-800">0763 280 901</p>
    </div>
    </a>
    </div>
  )
}

export default ForeignExchange

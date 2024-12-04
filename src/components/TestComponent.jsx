import React from 'react';
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ProductsOverview = () => {
  // Translation data
  const { t } = useTranslation();
  const productsOverview = t("productsOverviewLandingPage", { returnObjects: true });
  const productsOverviewText = t("productsOverviewTextLandingPage", { returnObjects: true });

  return (
    <div>
      <div className="w-full h-full relative px-10 lg:px-40 gap-2 py-10">
        <div className="relative" data-aos="fade-up">
          <h1 className="border-r-8 border-blue-500 pl-5 pr-5 text-xl md:text-2xl lg:text-4xl font-black text-blue-900 text-right">
            {productsOverviewText.title}
          </h1>
          <p className="border-r-8 border-blue-500 pl-5 pr-5 pt-1 text-sm lg:text-xl font-medium text-blue-800 text-right">
            {productsOverviewText.subtitle}
          </p>
          <p className="pb-5 pt-5 text-xs lg:text-sm font-medium lg:font-semibold text-black/50 text-justify">
            {productsOverviewText.description}
          </p>
        </div>

        {/* Swiper for Product Cards */}
        <Swiper
          modules={[Navigation]}
          navigation={true}
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {productsOverview.map((product, index) => {
            // Debugging: Log product data to verify
            console.log(`Product ${index}:`, product);

            return (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="relative h-64 lg:h-96 transition-all duration-300 group">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center z-10 rounded-tr-3xl rounded-bl-3xl"
                    style={{
                      backgroundImage: `url(${product.image || 'https://via.placeholder.com/400'})`
                    }}
                  ></div>

                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 rounded-tr-3xl rounded-bl-3xl"></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-black z-20">
                    <h3 className="text-lg md:text-xl lg:text-3xl font-semibold lg:font-black uppercase">
                      {product.title}
                    </h3>
                    <p className="text-xs md:text-sm lg:text-base px-5 text-center">{product.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsOverview;

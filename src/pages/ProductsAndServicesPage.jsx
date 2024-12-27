import Carousel from '../components/Carousel';
import bannerProductsPg from '../media/bannerProductsPg.webp';
import ProductSelector from '../components/ProductSelector';
import ProductLuckewallet from '../components/ProductLuckewallet';
import { useTranslation } from "react-i18next";


const ProductsAndServicesPage = () => {
  const { t } = useTranslation();
  const data = t("bannerProducts", { returnObjects: true });

  const image = {
    src: bannerProductsPg,
    title: data.title,
    intro: data.intro,
    specialnote: data.specialnote,
    description: data.description,
  };

  return (
    <div className='container mx-auto'>
      <Carousel image={image}/>
      <div id='products-overview'>
      <ProductSelector/>
      </div>
      <div id='luckewallet' className='pt-12'>
      <ProductLuckewallet/>
      </div>
    </div>
  )
}

export default ProductsAndServicesPage

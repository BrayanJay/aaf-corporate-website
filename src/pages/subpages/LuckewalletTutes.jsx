import { useTranslation } from "react-i18next";
import FileCard from '../../components/FileCard';

const LuckewalletTutues = () => {
  const { t } = useTranslation();
  const data = t("downloadsTexts", { returnObjects: true });

  return (
    <div className='flex flex-col lg:flex-row px-10 lg:px-40 py-10'>
      <div className="">
        <div className="border-l-4 lg:border-l-8 border-blue-500 px-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900">
          {/*data.section3*/} <h1>Luckewallet Guidelines Tutorials</h1>
          <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
              {data.intro3}
            </div>
        </div>
        <div id="customer-information" className="">
          <div className='py-5 lg:py-10 flex flex-col items-center'>
            <div className="flex justify-center items-center w-full">
              <FileCard fileDirectory="luckewalletTutes" category="Luckewallet Tutorials" />
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default LuckewalletTutues
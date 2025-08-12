import { useTranslation } from "react-i18next";
import FileCard from '../components/FileCard';

const Downloads = () => {
  const { t } = useTranslation();
  const data = t("downloadsTexts", { returnObjects: true });

  return (
    <div className='flex flex-col lg:flex-row px-10 lg:px-40 py-10'>
      <div className="">
        <h1 className="border-l-4 lg:border-l-8 border-blue-500 px-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900">
          {data.title}
        </h1>
        <div id="annual-reports" className="">
          <div className='py-5 lg:py-10 flex flex-col items-center'>
            <h2 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
              {data.section1}
            </h2>
            <div className='pb-5 text-xs lg:text-sm font-medium text-blue-900/80'>
              {data.intro1}
            </div>
        <div className="flex justify-center items-center w-full">
          <FileCard fileDirectory="annualReports" category="Annual Reports" />
        </div>
          </div>

          <div className='py-5 lg:py-10 flex flex-col items-center'>
            <h2 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
              {data.section2}
            </h2>
            <div className='pb-5 text-xs lg:text-sm font-medium text-blue-900/80'>
            {data.intro2}
            </div>
            <div className="flex justify-center items-center w-full">
              <FileCard fileDirectory="interiemFinancials" category="Interiem Financials" />
            </div>
          </div>

          {/*<div className='py-5 lg:py-10 flex flex-col items-center'>
            <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
              {data.section3}
            </div>
            <div className='pb-5 text-xs lg:text-sm font-medium text-blue-900/80'>
            {data.intro3}
            </div>
            <DownloadsCard documents={customerInformation} />
          </div>*/}

          <div className='py-5 lg:py-10 flex flex-col items-center'>
            <h2 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
              {data.section4}
            </h2>
            <div className='pb-5 text-xs lg:text-sm font-medium text-blue-900/80'>
            {data.intro4}
            </div>
            <div className="flex justify-center items-center w-full">
              <FileCard fileDirectory="otherRelatedDocs" category="Other Related Documents" />
            </div>
          </div>
          
          {/*<div className='py-5 lg:py-10 flex flex-col items-center'>
            <h2 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
              {data.section5}
            </h2>
            <div className='pb-5 text-xs lg:text-sm font-medium text-blue-900/80'>
            {data.intro5}
            </div>
            <div className="flex justify-center items-center w-full">
              <FileCard fileDirectory="debentureIssues" category="Debenture Issues" />
            </div>
          </div>*/}

        </div>
      </div>
    </div>
  );
};

export default Downloads;

import { useTranslation } from "react-i18next";
import FileCard from '../components/FileCard';

const Downloads = () => {
  const { t } = useTranslation();
  const data = t("downloadsTexts", { returnObjects: true });

  {/*const customerInformation = [
    {
      idx: 1,
      title: "Finance Business Act, No. 42 OF 2011",
      url: "/src/media/attachments/customerInformation/finance_business_act_no_42_of_2011.pdf",
    },
    {
      idx: 2,
      title: "AAF - Finance Business Licence",
      url: "/src/media/attachments/customerInformation/finance_business_licence_aaf.pdf",
    },
    {
      idx: 3,
      title: "Directions, Rules, Determinations, Notices, and Guidelines",
      url: "/src/media/attachments/customerInformation/lfc_s_direction_book.pdf",
    },
    {
      idx: 4,
      title: "Finance Leasing Lisence",
      url: "/src/media/attachments/customerInformation/finance_leasing_lisence.pdf"
    },
    {
      idx: 5,
      title: "Customer Complaint Handling Procedure",
      url: "/src/media/attachments/customerInformation/CustomerComplaintHandlingProcedure.pdf",
    },
    {
      idx: 6,
      title: "Financial Consumer Protection",
      url: "/src/media/attachments/customerInformation/FinancialConsumerProtectionPolicy.pdf",
    },

    // Add more documents here
  ];*/}

  {/*const debentureIssues = [
    {
      idx: 1,
      title: "Accountants' Report and 5 year Summary 2024",
      url: "/src/media/attachments/debentureIssues2024/accountants_report_and_5year_summary_2024.pdf",
    },
    {
      idx: 2,
      title: "Debenture Prospectus 2024",
      url: "/src/media/attachments/debentureIssues2024/prospectus_aaf_debenture_2024.pdf",
    },
    {
      idx: 3,
      title: "Signed Trust-Deed 2024",
      url: "/src/media/attachments/debentureIssues2024/signed_trust-deed_aaf_debenture_2024.pdf",
    },
    {
      idx: 4,
      title: "Debenture Application 2024",
      url: "/src/media/attachments/debentureIssues2024/debenture_application_2024.pdf",
    },
    {
      idx: 5,
      title: "Details of Debenture 2024",
      url: "/src/media/attachments/debentureIssues2024/debenture_rates_2024.webp",
    },

    // Add more documents here
  ]; */}

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

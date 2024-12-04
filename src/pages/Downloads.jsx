import React from 'react';
import DownloadsCard from '../components/DownloadsCard';
import { useTranslation } from "react-i18next";

const Downloads = () => {
  const { t } = useTranslation();
  const data = t("downloadsTexts", { returnObjects: true });

  // Example data for categories
  const annualReports = [
    {
      idx: 1,
      title: "Annual Report 2023-2024",
      url: "/web/src/media/attachments/annualReports/ar2324.pdf", // Add the PDF file's URL
    },
    {
      idx: 2,
      title: "Annual Report 2022-2023",
      url: "/web/src/media/attachments/annualReports/ar2223.pdf", // Add the PDF file's URL
    },
    {
      idx: 3,
      title: "Annual Report 2021-2022",
      url: "/web/src/media/attachments/annualReports/ar2122.pdf", // Add the PDF file's URL
    },
    {
      idx: 4,
      title: "Annual Report 2020-2021",
      url: "/web/src/media/attachments/annualReports/ar2021.pdf", // Add the PDF file's URL
    },
    {
      idx: 5,
      title: "Annual Report 2019-2020",
      url: "/web/src/media/attachments/annualReports/ar1920.pdf", // Add the PDF file's URL
    },
    // Add more reports here
  ];

  const interimFinancials = [
    {
      idx: 1,
      title: "Interim Financials as at 30th June 2023",
      url: "/web/src/media/attachments/interiemFinancials/ir30June2023.pdf",
    },
    {
      idx: 2,
      title: "Interim Financials as at 30th September 2023",
      url: "/web/src/media/attachments/interiemFinancials/ir30Sept2023.pdf",
    },
    {
      idx: 3,
      title: "Interim Financials as at 31st December 2023",
      url: "/web/src/media/attachments/interiemFinancials/ir31Dec2023.pdf",
    },
    {
      idx: 4,
      title: "Interim Financials as at 31st March 2024",
      url: "/web/src/media/attachments/interiemFinancials/ir31Mar2024.pdf",
    },
    {
      idx: 5,
      title: "Interim Financials as at 30th June 2024",
      url: "/web/src/media/attachments/interiemFinancials/ir30June2024.pdf",
    },
    // Add more documents here
  ];

  const OtherRelatedDocuments = [
    {
      idx: 1,
      title: "Customer Complaint Handling Procedure",
      url: "/web/src/media/attachments/otherRelatedDocs/CustomerComplaintHandlingProcedure.pdf",
    },
    {
      idx: 2,
      title: "Financial Consumer Protection",
      url: "/web/src/media/attachments/otherRelatedDocs/FinancialConsumerProtectionPolicy.pdf",
    },
    {
      idx: 3,
      title: "Policy on Matters Relating to The Board of Directors",
      url: "/web/src/media/attachments/otherRelatedDocs/PolicyOnMattersTelatingToTheBoardOfDirectors.pdf",
    },
    {
      idx: 4,
      title: "Board Commitees",
      url: "/web/src/media/attachments/otherRelatedDocs/BoardCommittees30092027.pdf",
    },
    {
      idx: 5,
      title: "Corporate Governance Nomination & Re-Election Policy",
      url: "/web/src/media/attachments/otherRelatedDocs/PolicyOnCorporateGovernanceNominationAndReElection.pdf",
    },
    {
      idx: 6,
      title: "Remuneration Policy",
      url: "/web/src/media/attachments/otherRelatedDocs/RemunerationPolicy.pdf",
    },
    {
      idx: 7,
      title: "Code of Business Conduct & Securities Trading Policy",
      url: "/web/src/media/attachments/otherRelatedDocs/PolicyOnInternalCodeBusinessConductAndEthicsForAllDirectorsAndEmployeesIncludingPoliciesOnTradingInTheEntitiesListedSecurities.pdf",
    },
    {
      idx: 8,
      title: "Risk Management & Internal Controls Summary",
      url: "/web/src/media/attachments/otherRelatedDocs/RiskManagmentAndInternalControlsSummary.pdf",
    },
    {
      idx: 9,
      title: "Shareholder & Investor Relations Policy",
      url: "/web/src/media/attachments/otherRelatedDocs/PolicyOnRelationsWithShareholdersAndInvestors.pdf",
    },
    {
      idx: 10,
      title: "ESG Sustainability Policy",
      url: "/web/src/media/attachments/otherRelatedDocs/PolicyOnEnvironmentalSocialAndGovernanceSustainability.pdf",
    },
    {
      idx: 11,
      title: "Asset & Investment Management Policy",
      url: "/web/src/media/attachments/otherRelatedDocs/PolicyOnControlAndManagementOfCompanymediaAndShareholderInvestments.pdf",
    },
    {
      idx: 12,
      title: "Corporate Disclosures Policy",
      url: "/web/src/media/attachments/otherRelatedDocs/CorporateDisclosuresPolicy.pdf",
    },
    {
      idx: 13,
      title: "Whistleblowing Policy Summary",
      url: "/web/src/media/attachments/otherRelatedDocs/WhistleblowingPolicySummary.pdf",
    },
    {
      idx: 14,
      title: "Anti-Bribery & Corruption Policy",
      url: "/web/src/media/attachments/otherRelatedDocs/AntiBriberyAndCorruptionPolicy.pdf",
    },
    {
      idx: 15,
      title: "Credit Ratings",
      url: "/web/src/media/attachments/otherRelatedDocs/CreditRatings2024.pdf",
    },
    // Add more documents here
  ];

  const customerInformation = [
    {
      idx: 1,
      title: "Finance Business Act, No. 42 OF 2011",
      url: "/web/src/media/attachments/customerInformation/finance_business_act_no_42_of_2011.pdf",
    },
    {
      idx: 2,
      title: "AAF - Finance Business Licence",
      url: "/web/src/media/attachments/customerInformation/finance_business_licence_aaf.pdf",
    },
    {
      idx: 3,
      title: "Directions, Rules, Determinations, Notices, and Guidelines",
      url: "/web/src/media/attachments/customerInformation/lfc_s_direction_book.pdf",
    },

    // Add more documents here
  ];

  return (
    <div className='flex flex-col lg:flex-row px-10 lg:px-40 py-10'>
      <div className="">
        <div className="border-l-4 lg:border-l-8 border-blue-500 px-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900">
          {data.title}
        </div>
        <div id="annual-reports" className="">
          <div className='py-5 lg:py-10 flex flex-col items-center'>
            <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
              {data.section1}
            </div>
            <div className='pb-5 text-xs lg:text-sm font-medium text-blue-900/80'>
              {data.intro1}
            </div>
            <div className="flex justify-center items-center w-full">
          <DownloadsCard documents={annualReports} />
        </div>
          </div>

          <div className='py-5 lg:py-10 flex flex-col items-center'>
            <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
              {data.section2}
            </div>
            <div className='pb-5 text-xs lg:text-sm font-medium text-blue-900/80'>
            {data.intro2}
            </div>
            <DownloadsCard documents={interimFinancials} />
          </div>

          <div className='py-5 lg:py-10 flex flex-col items-center'>
            <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
              {data.section3}
            </div>
            <div className='pb-5 text-xs lg:text-sm font-medium text-blue-900/80'>
            {data.intro3}
            </div>
            <DownloadsCard documents={customerInformation} />
          </div>

          <div className='py-5 lg:py-10 flex flex-col items-center'>
            <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
              {data.section4}
            </div>
            <div className='pb-5 text-xs lg:text-sm font-medium text-blue-900/80'>
            {data.intro4}
            </div>
            <DownloadsCard documents={OtherRelatedDocuments} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;

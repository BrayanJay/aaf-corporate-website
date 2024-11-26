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
      url: "/src/assets/attachments/annualReports/ar2324.pdf", // Add the PDF file's URL
    },
    {
      idx: 2,
      title: "Annual Report 2022-2023",
      url: "/src/assets/attachments/annualReports/ar2223.pdf", // Add the PDF file's URL
    },
    {
      idx: 3,
      title: "Annual Report 2021-2022",
      url: "/src/assets/attachments/annualReports/ar2122.pdf", // Add the PDF file's URL
    },
    {
      idx: 4,
      title: "Annual Report 2020-2021",
      url: "/src/assets/attachments/annualReports/ar2021.pdf", // Add the PDF file's URL
    },
    {
      idx: 5,
      title: "Annual Report 2019-2020",
      url: "/src/assets/attachments/annualReports/ar1920.pdf", // Add the PDF file's URL
    },
    // Add more reports here
  ];

  const interimFinancials = [
    {
      idx: 1,
      title: "Interiem Financials as at 30th June 2023",
      url: "/src/assets/attachments/interiemFinancials/ir30June2023.pdf",
    },
    {
      idx: 2,
      title: "Interiem Financials as at 30th September 2023",
      url: "/src/assets/attachments/interiemFinancials/ir30Sept2023.pdf",
    },
    {
      idx: 3,
      title: "Interiem Financials as at 31st December 2023",
      url: "/src/assets/attachments/interiemFinancials/ir31Dec2023.pdf",
    },
    {
      idx: 4,
      title: "Interiem Financials as at 31st March 2023",
      url: "/src/assets/attachments/interiemFinancials/ir31Mar2023.pdf",
    },
    {
      idx: 5,
      title: "Interiem Financials as at 30th June 2024",
      url: "/src/assets/attachments/interiemFinancials/ir30June2024.pdf",
    },
    // Add more documents here
  ];

  const OtherRelatedDocuments = [
    {
      idx: 1,
      title: "Customer Complaint Handling Procedure",
      url: "src/assets/attachments/otherRelatedDocs/CustomerComplaintHandlingProcedure.pdf",
    },
    {
      idx: 2,
      title: "Financial Consumer Protection",
      url: "src/assets/attachments/otherRelatedDocs/FinancialConsumerProtectionPolicy.pdf",
    },
    {
      idx: 3,
      title: "Policy on Matters Telating to The Board of Directors",
      url: "src/assets/attachments/otherRelatedDocs/PolicyOnMattersTelatingToTheBoardOfDirectors.pdf",
    },
    {
      idx: 4,
      title: "Board Commitees 30-09-2027",
      url: "src/assets/attachments/otherRelatedDocs/BoardCommittees30092027.pdf",
    },
    {
      idx: 5,
      title: "Corporate Governance Nomination & Re-Election Policy",
      url: "src/assets/attachments/otherRelatedDocs/PolicyOnCorporateGovernanceNominationAndReElection.pdf",
    },
    {
      idx: 6,
      title: "Remuneration Policy",
      url: "src/assets/attachments/otherRelatedDocs/RemunerationPolicy.pdf",
    },
    {
      idx: 7,
      title: "Code of Business Conduct & Securities Trading Policy",
      url: "src/assets/attachments/otherRelatedDocs/PolicyOnInternalCodeBusinessConductAndEthicsForAllDirectorsAndEmployeesIncludingPoliciesOnTradingInTheEntitiesListedSecurities.pdf",
    },
    {
      idx: 8,
      title: "Risk Managment & Internal Controls Summary",
      url: "src/assets/attachments/otherRelatedDocs/RiskManagmentAndInternalControlsSummary.pdf",
    },
    {
      idx: 9,
      title: "Shareholder & Investor Relations Policy",
      url: "src/assets/attachments/otherRelatedDocs/PolicyOnRelationsWithShareholdersAndInvestors.pdf",
    },
    {
      idx: 10,
      title: "ESG Sustainability Policy",
      url: "src/assets/attachments/otherRelatedDocs/PolicyOnEnvironmentalSocialAndGovernanceSustainability.pdf",
    },
    {
      idx: 11,
      title: "Asset & Investment Management Policy",
      url: "src/assets/attachments/otherRelatedDocs/PolicyOnControlAndManagementOfCompanyAssetsAndShareholderInvestments.pdf",
    },
    {
      idx: 12,
      title: "Corporate Disclosures Policy",
      url: "src/assets/attachments/otherRelatedDocs/CorporateDisclosuresPolicy.pdf",
    },
    {
      idx: 13,
      title: "Whistleblowing Policy Summary",
      url: "src/assets/attachments/otherRelatedDocs/WhistleblowingPolicySummary.pdf",
    },
    {
      idx: 14,
      title: "Anti-Bribery & Corruption Policy",
      url: "src/assets/attachments/otherRelatedDocs/AntiBriberyAndCorruptionPolicy.pdf",
    },
    {
      idx: 15,
      title: "Credit Ratings",
      url: "src/assets/attachments/otherRelatedDocs/CreditRatings2024.pdf",
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
              Click on a document to view it.
            </div>
            <DownloadsCard documents={annualReports} />
          </div>

          <div className='py-5 lg:py-10 flex flex-col items-center'>
            <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
              {data.section2}
            </div>
            <div className='pb-5 text-xs lg:text-sm font-medium text-blue-900/80'>
              Explore detailed financial facts.
            </div>
            <DownloadsCard documents={interimFinancials} />
          </div>

          <div className='py-5 lg:py-10 flex flex-col items-center'>
            <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
              {data.section4}
            </div>
            <div className='pb-5 text-xs lg:text-sm font-medium text-blue-900/80'>
              Other essential policies.
            </div>
            <DownloadsCard documents={OtherRelatedDocuments} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;

import React, { useState } from "react";
import TabBar from './TabBar'


const tabsData = [
    { tabName: "AnnualReports", tabTitle: "Annual Reports"},
    { tabName: "CreditRatings", tabTitle: "Credit Ratings" },
    { tabName: "QuarterlyFinancials", tabTitle: "Quarterly Financials" },
    { tabName: "MonthlyFinancials", tabTitle: "Monthly Financials" },
  ];
  
  const tabContents = {
    AnnualReports: <p>No Reports has been uploaded yet!</p>,
    CreditRatings: <p>No Reports has been uploaded yet!</p>,
    QuarterlyFinancials : <p>No Reports has been uploaded yet!</p>,
    MonthlyFinancials : <p>No Reports has been uploaded yet!</p>,
  };

const Documents = () => {
    const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="px-10 lg:px-40 py-2 lg:py-5">
        <div className="inline-block border-b-2 lg:border-b-4 border-blue-800 text-blue-700 text-xl md:text-2xl lg:text-4xl font-bold">
        Downloads
        </div>
       <div className="py-2 lg:py-5">
            <TabBar
            tabsData={tabsData}
            activeTabName={activeTab}
            onTabClick={setActiveTab}
            tabContents={tabContents}
            />
        </div> 
    </div>
  )
}

export default Documents

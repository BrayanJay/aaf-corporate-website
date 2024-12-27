import { useState } from "react";
import TabBar from './TabBar'
import { useTranslation } from 'react-i18next';



const Documents = () => {
  const { t } = useTranslation();
  const data = t("documentsIR", { returnObjects: true });
  const [activeTab, setActiveTab] = useState("tab1");

  const tabsData = [
    { tabName: "AnnualReports", tabTitle: data.tab1_title},
    { tabName: "CreditRatings", tabTitle: data.tab2_title },
    { tabName: "QuarterlyFinancials", tabTitle: data.tab3_title },
    { tabName: "MonthlyFinancials", tabTitle: data.tab4_title },
  ];
  
  const tabContents = {
    AnnualReports: <p>{data.tab1_content}</p>,
    CreditRatings: <p>{data.tab2_content}</p>,
    QuarterlyFinancials : <p>{data.tab3_content}</p>,
    MonthlyFinancials : <p>{data.tab4_content}</p>,
  };

  return (
    <div className="px-10 lg:px-40 py-2 lg:py-5">
        <div className="inline-block border-b-2 lg:border-b-4 border-blue-800 text-blue-700 text-xl md:text-2xl lg:text-4xl font-bold">
        {data.title}
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

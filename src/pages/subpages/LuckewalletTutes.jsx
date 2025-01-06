import DownloadsCard from '../../components/DownloadsCard';
import { useTranslation } from "react-i18next";

const LuckewalletTutues = () => {
  const { t } = useTranslation();
  const data = t("downloadsTexts", { returnObjects: true });

  const docs = [
    {
      idx: 1,
      title: "New Customer Registration",
      url: "/src/media/attachments/luckewalletTutes/new_customer_registration.pdf",
    },
    {
      idx: 2,
      title: "Existing Customer Registration",
      url: "/src/media/attachments/luckewalletTutes/existing_customer_registration.pdf",
    },
    {
      idx: 3,
      title: "Fund Transfer",
      url: "/src/media/attachments/luckewalletTutes/fund_transfer.pdf",
    },
    {
      idx: 4,
      title: "Payee Registration",
      url: "/src/media/attachments/luckewalletTutes/payee_registration.pdf"
    },

    // Add more documents here
  ];

  return (
    <div className='flex flex-col lg:flex-row px-10 lg:px-40 py-10'>
      <div className="">
        <div className="border-l-4 lg:border-l-8 border-blue-500 px-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900">
          {/*data.section3*/} Luckewallet Guidelines Tutorials
          <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
              {data.intro3}
            </div>
        </div>
        <div id="customer-information" className="">
          <div className='py-5 lg:py-10 flex flex-col items-center'>
            
            <div className="flex justify-center items-center w-full">
          <DownloadsCard documents={docs} />
        </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default LuckewalletTutues
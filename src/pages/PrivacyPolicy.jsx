import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";


export const PrivacyPolicy = () => {
    const { t } = useTranslation();
  const data = t("privacyPolicy", { returnObjects: true });
  return (
    <div className='flex flex-col lg:flex-row px-10 lg:px-40 py-10'>
      <div className="">

        {/*Title - Privacy Policy */}
        <div className="border-l-4 lg:border-l-8 border-blue-500 px-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900">
          {data.title}
        </div>

        {/* Description */}
        <div className='flex flex-col text-xs md:text-sm lg:text-base font-medium py-5 gap-y-5 text-black/50 text-center lg:text-left'>
            {data.description.map((desc, index) => (
              <span key={index}>{desc}</span>
            ))}
          </div>

        {/* Information Collection and Use */}
        <div className='py-5 flex flex-col'>
            <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-900 py-2'>
              {data.information_collection}
            </div>
            <div className='flex flex-col pb-5 text-sx md:text-sm lg:text-base font-medium text-black/50'>
            {data.ic_description.map((desc, index) => (
              <span key={index}>{desc}</span>
            ))}
            <div className="pt-5 font-semibold text-blue-500 hover:text-blue-900 transition-colors duration-300 ease-in-out"><a href="https://policies.google.com/privacy" target="_blank">Google Play Services</a></div>
            <div className="pb-5 pt-2 font-semibold text-blue-500 hover:text-blue-900 transition-colors duration-300 ease-in-out"><a href="https://firebase.google.com/support/privacy" target="_blank">Firebase</a></div>
            <div>{data.ic_description_2}</div>
            </div>
          </div>

        {/* Cookies */}
        <div className='pb-5 flex flex-col'>
            <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-900 py-2'>
              {data.cookies}
            </div>
            <div className='flex flex-col pb-5 text-sx md:text-sm lg:text-base font-medium text-black/50'>
            {data.cookies_text}
            </div>
          </div>

        {/* Service Providers */}
        <div className='pb-5 flex flex-col'>
            <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-900 py-2'>
              {data.service_providers}
            </div>
            <div className='flex flex-col pb-5 text-sx md:text-sm lg:text-base font-medium text-black/50'>
                <div>{data.service_providers_text_1}</div>
                <div className="flex flex-col py-3 gap-y-3">
                    {data.service_providers_points.map((desc, index) => (
                    <span key={index}><FontAwesomeIcon icon={['fas', 'caret-right']} className="px-2"/> {desc}</span>
                    ))}
                </div>
                <div>{data.service_providers_text_2}</div>
            </div>
          </div>

        {/* Security */}
        <div className='pb-5 flex flex-col'>
            <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-900 py-2'>
              {data.security}
            </div>
            <div className='flex flex-col pb-5 text-sx md:text-sm lg:text-base font-medium text-black/50'>
            {data.security_text}
            </div>
          </div>

        {/* Links to Other Sites */}
        <div className='pb-5 flex flex-col'>
            <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-900 py-2'>
              {data.links_to_other_sites}
            </div>
            <div className='flex flex-col pb-5 text-sx md:text-sm lg:text-base font-medium text-black/50'>
            {data.links_to_other_sites_text}
            </div>
        </div>

        {/* Children’s Privacy */}
        <div className='pb-5 flex flex-col'>
            <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-900 py-2'>
              {data.children_privacy}
            </div>
            <div className='flex flex-col pb-5 text-sx md:text-sm lg:text-base font-medium text-black/50'>
            {data.children_privacy_text}
            </div>
        </div>

        {/* Changes to This Privacy Policy */}
        <div className='pb-5 flex flex-col'>
            <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-900 py-2'>
              {data.changes_to_this_privacy}
            </div>
            <div className='flex flex-col pb-5 gap-y-3 text-sx md:text-sm lg:text-base font-medium text-black/50'>
            <div>{data.changes_to_this_privacy_text_1}</div>
            <div>{data.changes_to_this_privacy_text_2}</div>
            </div>
        </div>

        {/* Contact Us */}
        <div className='pb-5 flex flex-col'>
            <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-900 py-2'>
              {data.contact_us}
            </div>
            <div className='flex flex-col pb-5 text-sx md:text-sm lg:text-base font-medium text-black/50'>
            {data.contact_us_text}
            </div>
        </div>

        </div>
    </div>
  )
}

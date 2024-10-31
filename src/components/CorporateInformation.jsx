import React from 'react'

const CorporateInformation = () => {
  return (
    <div className='w-full px-10 lg:px-20'>
        <div className="flex flex-col relative justify-center items-start pt-10">
          <p className="border-l-4 lg:border-l-8 border-blue-900 text-blue-700 text-xl md:text-2xl lg:text-4xl font-bold pl-2 lg:pl-4">
            Corporate <span className='font-light text-blue-500'> Information</span></p>
        </div>
        <div className='flex lg:flex-row flex-col'>
        <div className='flex flex-col lg:basis-1/2 py-5 gap-5 '>
            <div>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                Name of Company
                </div>
                <div className='text-xs lg:text-sm md:text-base font-medium text-blue-900/80'>
                Asia Asset Finance PLC
                </div>
            </div>

            <div>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                Company ratings
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                Fitch A+
                </div>
            </div>

            <div className='flex flex-col gap-1'>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                Legal Form
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                - Incorporated as a Private Limited Company on 23 September 1970. (under the Companies Ordinance No. 51 of 1938 (Cap 145))
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                - Name changed under the Companies Ordinance No. 51 of 1938 (Cap 145) on 03 October 2006.
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                - Re-registered under the Companies Act No. 07 of 2007 on 23 January 2008.
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                - Converted to a Public Limited Company under the Companies Act No. 07 of 2007 on 20 March 2012.
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                - Registration Number (under the Companies Act No. 17 of 1982): PB 139 PQ.
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                - New Registration Number (under the Companies Act No. 7 of 2007): PB 139 PQ.
                </div>
            </div>

            <div>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                Company Registration Number
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                PB 139 PQ
                </div>
            </div>

            <div>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                Lawyers of the Company
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                <span>
                    Shiranthi Gunawardane Associates, <br/>
                    No.22/1,Elliot Place,Colombo 08. 
                </span>
                </div>
            </div>

        </div>

        <div className='flex flex-col lg:basis-1/2 py-5 gap-5 '>
            <div className='flex flex-col gap-1'>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                Board of Directors
                </div>
                <div className='text-xs lg:text-sm font-bold text-blue-900/80'>
                Chairman - V. A Prasanth
                </div>
                <div className='text-xs lg:text-sm font-bold text-blue-900/80'>
                CEO - Rajiv James Abeywickrema Gunawardena
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                George Muthoot Alexander
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                Kuttikattu Rajappan Bijimon
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                Kiran Gopala Krishna Pillai
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                Rajitha Ananda Bandara Basnayake
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                J P D R Jayasekara
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                Roshan De Silva Gunasekera
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                T. C. D. Kumarasiri
                </div>
            </div>

            <div>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                Secretary of the Company
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                <span>
                Ms. Chalani Gonaduwa <br/>
                Company Secretory <br/>
                No.76, Park Street, Colombo 02.<br/>
                Tel: 011 7699 074 <br/>
                Email: companysecretary@asiaassetfinance.lk
                </span>
                </div>
            </div>

            <div className='flex flex-col gap-1'>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                Auditors of the Company
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                <span>
                BDO Partners <br/>
                65/2, Sir Chiththapalam A. Gardiner Mawatha, <br/>
                Colombo 02.
                </span>
                </div> 
            </div>
        </div>
        </div>
        
        <div className='px-20 py-5 text-center'>
                <div className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                Bankers of the Company
                </div>
                
        </div>

    </div>
  )
}

export default CorporateInformation

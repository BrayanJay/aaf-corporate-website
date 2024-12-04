import React from 'react'

const FinancialsCard = ({amount, title}) => {
  return (
    <div>
      <div className="h-[75px] md:h-[100px] w-[75px] md:w-[100px] bg-white rounded-tr-3xl rounded-bl-3xl shadow border-4 md:border-8 border-blue-700 justify-center items-center inline-flex text-black/50">
          <div className="self-stretch p-2.5 flex-col justify-center items-center lg:gap-1 inline-flex">
          <div className="text-center text-xs font-medium font-['Roboto']"></div>
          <div className="text-center text-lg font-bold font-['Roboto']">{amount}</div>
          <div className="text-center text-xs font-medium font-['Roboto']"></div>
          </div>
        </div>
        <div className='flex justify-center text-center text-sm font-medium py-2 text-blue-900/80'>{title}</div>
    </div>
  )
}

export default FinancialsCard

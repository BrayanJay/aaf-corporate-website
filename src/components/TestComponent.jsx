import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const TestComponent = () => {
  const tabStyle = 'py-1.5 px-3 bg-[#004fc5] rounded-tl-lg rounded-br-lg cursor-pointer hover:bg-[#083f93] transition delay-200 ease-in-out rounded-sm text-white text-sm font-medium font-roboto';
  const navigate = useNavigate();

  return (
    <div className='flex justify-between px-4 py-3 shadow-md items-center sticky top-0 z-50 bg-white/60 backdrop-blur-md'>
      <div className='hidden md:flex gap-4 font-medium'>
        <Button onClick={() => navigate(`/`)} className={tabStyle}>Home</Button>
        <Button onClick={() => navigate(`/about`)} className={tabStyle}>About</Button>
        <Button onClick={() => navigate(`/products`)} className={tabStyle}>Products</Button>
        <Button onClick={() => navigate(`/investor-relations`)} className={tabStyle}>Investor Relations</Button>
        <Button onClick={() => navigate(`/careers`)} className={tabStyle}>Careers</Button>
      </div>
    </div>
  );
};

export default TestComponent;

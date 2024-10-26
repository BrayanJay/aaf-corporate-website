import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ title, description }) => {
  return (
    <div className="w-auto max-h-[400px] px-20 pt-10 pb-20 bg-white flex justify-center items-center">
      <div className="grow shrink basis-0 self-stretch px-5 border-l-8 border-blue-700 flex-col justify-start items-start gap-2 inline-flex">
        <div className="text-blue-900 text-4xl font-black">{title}</div>
        <div className="self-stretch text-black/60 text-lg font-medium">{description}</div>
      </div>
    </div>
  );
};

// Define prop types
Description.propTypes = {
  title: PropTypes.string.isRequired,       // Title should be a required string
  description: PropTypes.string.isRequired   // Description should be a required string
};

export default Description;

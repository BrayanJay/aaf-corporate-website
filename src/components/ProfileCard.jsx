import React from 'react';

const ProfileCard = ({ imgSrc, name, title, borderColor, textColor }) => {
  return (
    <div className="w-64 h-80 relative mx-auto flex flex-col justify-between"> {/* Ensure height is consistent */}
      {/* Profile Image */}
      <div className="flex justify-center mt-4 mb-2">
        <img
          className="w-32 h-32 rounded-full shadow border-4"
          src={imgSrc}
          alt={`${name}'s profile`}
          style={{ borderColor }} // Dynamically applying border color
        />
      </div>

      {/* Card Details */}
      <div
        className="flex flex-col justify-center items-center text-center border-t-4 pt-4 flex-1" // Added flex-1 for equal space
        style={{ borderColor }} // Dynamic border color for top line
      >
        <div className="flex flex-row items-center gap-1">
          <span className="text-4xl font-black" style={{ color: textColor }}>
            “
          </span>
          <span className="text-2xl font-black" style={{ color: textColor }}>
            {name}
          </span>
        </div>
        
        <div className="text-sm font-bold mt-2" style={{ color: borderColor }}>
          {title}
        </div>
      </div>

      {/* View Profile */}
      <div className="pt-2 pb-4 text-black/40 text-sm font-normal text-center cursor-pointer hover:text-black/60">
        View Profile
      </div>
    </div>
  );
};

export default ProfileCard;

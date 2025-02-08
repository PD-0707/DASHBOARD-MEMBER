import React from 'react';
import { FaCoins } from 'react-icons/fa';

const PointsSummary = () => {
  return (
    <div className="bg-[#E9F0FA] min-h-screen px-4 md:px-10 pt-6 pb-10">
      <div className="max-w-6xl mx-auto">
        {/* Title - Points Summary */}
        <div className="flex items-center text-black text-xl md:text-2xl font-bold mb-7">
          <FaCoins className="mr-2 text-black" />
          Points Summary
        </div>

        {/* Total Points + Member Box */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mt-7">
          {/* Total Points */}
          <p className="text-md md:text-lg text-black font ml-8">
            Total Points: <span className="font">100</span>
          </p>

          {/* Member Box (Position Adjusted) */}
          <div className="bg-[#1E1E1E] text-white py-3 px-10 flex items-center rounded-md w-full md:w-96 h-14 justify-between mt-4 md:mt-0">
            <span className="font-bold text-md md:text-lg">Member name</span>
            <div className="h-10 w-0.5 bg-gray-400 mx-4"></div>
            <span className="font-bold text-md md:text-lg">23XXX1000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsSummary;

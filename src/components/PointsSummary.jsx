import React from 'react';
import { FaCoins } from 'react-icons/fa';

const PointsSummary = () => {
  return (
    <div className="bg-[#E9F0FA] min-h-screen px-10 pt-6 pb-10"> {/* Full-page background */}
      <div className="max-w-6xl mx-auto">
        {/* Title - Points Summary */}
        <div className="flex items-center text-black text-2xl font-bold mb-7">
          <FaCoins className="mr-2 text-black" />
          Points Summary
        </div>

        {/* Total Points + Member Box */}
        <div className="flex justify-between items-center">
          <p className="text-lg text-black ml-8">
            Total Points: <span className="font">100</span>
          </p>

          {/* Member Box - Adjusted Width & Proper Alignment */}
          <div className="bg-[#1E1E1E] text-white py-3 px-10 flex items-center rounded-none w-96 h-14 justify-between">
            <span className="font-bold text-lg">Member name</span>
            <div className="h-10 w-0.5 bg-gray-400 mx-6"></div> {/* Increased height of separator */}
            <span className="font-bold text-lg">23XXX1000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsSummary;

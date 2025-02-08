import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-[#2d3648] text-white px-6 py-2 flex justify-between items-center">
      {}
      <div className="text-lg font-normal">CodeChef VIT-C</div>

      {}
      <nav className="flex space-x-6 items-center">
        <a href="#" className="text-gray-300 hover:text-white border-b-6 border-transparent hover:border-yellow-500 pb-1">
          Contributions
        </a>
        <a href="#" className="text-gray-300 hover:text-white border-b-6 border-transparent hover:border-yellow-500 pb-1">
          Dashboard
        </a>
        <a href="#" className="text-gray-300 hover:text-white border-b-6 border-transparent hover:border-yellow-500 pb-1">
          Leaderboard
        </a>
        <a href="#" className="text-gray-300 hover:text-white border-b-6 border-transparent hover:border-yellow-500 pb-1">
          Request
        </a>
        <a href="#" className="text-gray-300 hover:text-white border-b-6 border-transparent hover:border-yellow-500 pb-1">
          Signout
        </a>

        {}
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
  <circle cx="12" cy="12" r="11" />  {}
  <circle cx="12" cy="10" r="4" />  {}
  <path d="M18 20a6 6 0 00-12 0" />  {}
</svg>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
